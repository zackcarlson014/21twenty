import { defineStore } from 'pinia'

export interface Todo {
  name: string;
  description: string;
  id?: string;
}

export const useTodosStore = defineStore({
  id: 'todos',
  state: () => ({
    todos: [] as Todo[],
    name: '',
    description: '',
  }),
  getters: {
    todos: (state) => state.todos,
  },
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    setTodos(todos: Todo[]) {
      this.todos = todos;
    },
  },
})