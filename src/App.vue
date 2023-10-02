<template>
  <div id="app">
    <h1>Todo App</h1>
    <input type="text" v-model="name" placeholder="Todo name" />
    <input type="text" v-model="description" placeholder="Todo description" />
    <button v-on:click="createTodo">Create Todo</button>
    <div v-for="item in todos" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { API } from 'aws-amplify';
  import { GraphQLResult, GraphQLSubscription } from "@aws-amplify/api";
  import { createTodo } from './graphql/mutations';
  import { listTodos } from './graphql/queries';
  import { onCreateTodo } from './graphql/subscriptions';


  interface AppData {
    name: string;
    description: string;
    todos: Record<string, string>[];
  }

  interface EventData {
    value: {
      data: {
        onCreateTodo: any;
      };
    };
  }

  export default {
    name: 'app',
    async created() {
      await this.getTodos();
      await this.subscribe();
    },
    data(): AppData {
      return {
        name: '',
        description: '',
        todos: [],
      };
    },
    methods: {
      async createTodo() {
        const { name, description } = this;

        if (!name || !description)
          return;
  
        const todo = { name, description };
        this.todos = [...this.todos, todo];

        await API.graphql({
          query: createTodo,
          variables: { input: todo }
        });
  
        this.name = '';
        this.description = '';
      },
      async getTodos() {
        const todos: GraphQLResult<any> = await API.graphql({
          query: listTodos
        });

        this.todos = todos.data.listTodos.items;
      },
      async subscribe() {
        (API.graphql({ query: onCreateTodo }) as GraphQLSubscription<any>).subscribe({
          next: (eventData: EventData) => {
            let todo = eventData.value.data.onCreateTodo;
  
            if (this.todos.some((item) => item.name === todo.name))
              return; // remove duplications

            this.todos = [...this.todos, todo];
          }
        });
      },
    },
  };
</script>
