import { defineStore } from 'pinia'

export interface Habit {
  name: string;
  description: string;
  id?: string;
}

export const useHabitsStore = defineStore({
  id: 'habits',
  state: () => ({
    habits: [] as Habit[],
    name: '',
    description: '',
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