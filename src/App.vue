<script lang="ts" setup>
  import { API } from 'aws-amplify';
  import { GraphQLResult, GraphQLSubscription } from "@aws-amplify/api";
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
  import { ref, reactive, computed, onMounted } from 'vue'
  import { createTodo } from './graphql/mutations';
  import { listTodos } from './graphql/queries';
  import { onCreateTodo } from './graphql/subscriptions';

  interface Todo {
    name: string;
    description: string;
    id?: string;
  }

  interface EventData {
    value: {
      data: {
        onCreateTodo: any;
      };
    };
  }

  let name = '';
  let description = '';
  let todos = reactive<Todo[]>([]) 

  const requestCreateTodo = async () => {
    if (!name || !description)
      return;

    const todo: Todo = { name, description };
    todos.push(todo);

    await API.graphql({
      query: createTodo,
      variables: { input: todo }
    });

    name = '';
    description = '';
  }

  const getTodos = async () => {
    const todosResult: GraphQLResult<any> = await API.graphql({
      query: listTodos
    });

    todos = todosResult.data.listTodos.items;
  }
      
  const subscribe = async () => {
    (API.graphql({ query: onCreateTodo }) as GraphQLSubscription<any>).subscribe({
      next: (eventData: EventData) => {
        let todo = eventData.value.data.onCreateTodo;

        if (todos.some((item) => item.name === todo.name))
          return; // remove duplications

        todos.push(todo);
      }
    });
  }

  onMounted(async () => {
    await getTodos();
    await subscribe();
  })
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>

  <div id="app">

    <h1>Todo App</h1>

    <input type="text" v-model="name" placeholder="Todo name" />

    <input type="text" v-model="description" placeholder="Todo description" />

    <button v-on:click="requestCreateTodo">Create Todo</button>

    <div v-for="item in todos" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </div>

  </div>
</template>