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
  }),
  getters: {
    todos: (state) => state.todos,
  },
  actions: {
    setTodos(todos: Todo[]) {
      this.todos = todos;
    },
  },
})