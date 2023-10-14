import { defineStore } from 'pinia'

export interface Habit {
  name: string;
  description: string;
  category: string;
  id?: string;
}

export const useHabitsStore = defineStore({
  id: 'habits',
  state: () => ({
    habits: [] as Habit[],
    name: '',
    description: '',
    category: '',
  }),
  getters: {
  },
  actions: {
    addHabit(habit: Habit) {
      this.habits.push(habit);
    },
    setHabits(habits: Habit[]) {
      this.habits = habits;
    },
  },
})