import { defineStore } from 'pinia'
import { API } from 'aws-amplify';
import { listHabits, getHabit } from '@/graphql/queries';
import { createHabit, deleteHabit } from '../graphql/mutations';
import router from '@/router';

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
    addHabit(habit: Habit): void {
      this.habits.push(habit);
    },
    setHabits(habits: Habit[]): void {
      this.habits = habits;
    },
    async requestGetHabits(): Promise<void> {
      let habitsResult: Record<string, any> = {};
      try {
        habitsResult = await API.graphql({
          query: listHabits
        });
      } catch (error) {
        console.error(error);
      }

      this.setHabits(
        habitsResult.data.listHabits.items
      );
    },
    async requestGetHabit(id: string): Promise<Habit> {
      let habitResult: Record<string, any> = {};
      try {
        habitResult = await API.graphql({
          query: getHabit,
          variables: { id: id },
        });
      } catch (error) {
        console.error(error);
      }

      console.log({ habitResult });

      return habitResult.data.getHabit;
    },
    async requestCreateHabit(): Promise<void> {
      if (!this.name || !this.description || !this.category)
        return;
  
      const habit: Habit = {
        name: this.name,
        description: this.description,
        category: this.category,
      };
  
      try {
        await API.graphql({
          query: createHabit,
          variables: { input: habit },
        });
      } catch (error) {
        console.error(error);
      }

      this.name = '';
      this.description = '';
      this.category = '';
      this.requestGetHabits();
    },
    async requestDeleteHabit(id: string): Promise<void> {
      try {
        await API.graphql({
          query: deleteHabit,
          variables: { input: { id } },
        });
      } catch (error) {
        console.error(error);
      };
  
      this.requestGetHabits();
    },
    routeToHabitPage(id: string): void {
      router.push({
        name: 'habit',
        params: { id },
      });
    },
  },
})