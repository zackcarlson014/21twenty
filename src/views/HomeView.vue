<template>
  <div class="home">
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

<script lang="ts" setup>
  import { API, Auth } from 'aws-amplify';
  import { GraphQLResult, GraphQLSubscription } from "@aws-amplify/api";
  import { onMounted } from 'vue'
  import { createTodo } from '../graphql/mutations';
  import { listTodos } from '../graphql/queries';
  import { onCreateTodo } from '../graphql/subscriptions';
  import { Todo, useTodosStore } from '../stores/todos';


  interface EventData {
    value: {
      data: {
        onCreateTodo: any;
      };
    };
  }

  const todosStore = useTodosStore();

  const requestCreateTodo = async () => {
    if (!todosStore.name || !todosStore.description)
      return;

    const todo: Todo = {
      name: todosStore.name,
      description: todosStore.description
    };

    todosStore.addTodo(todo);

    await API.graphql({
      query: createTodo,
      variables: { input: todo }
    });

    todosStore.name = '';
    todosStore.description = '';
  }

  const getTodos = async () => {
    console.log({ Auth });
    const todosResult: GraphQLResult<any> = await API.graphql({
      query: listTodos
    });

    todosStore.setTodos(
      todosResult.data.listTodos.items
    );
  }
      
  const subscribe = async () => {
    (API.graphql({ query: onCreateTodo }) as GraphQLSubscription<any>)
      .subscribe({
        next: (eventData: EventData) => {
          const todo = eventData.value.data.onCreateTodo;

          if (todosStore.todos.some((item) => item.name === todo.name))
            return; // remove duplications

          todosStore.addTodo(todo);
        }
      });
  }

  onMounted(async () => {
    await getTodos();
    await subscribe();
  })
</script>
