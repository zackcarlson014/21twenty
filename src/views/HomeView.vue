<template>
  <div class="home">
    <input type="text" v-model="name" placeholder="Todo name" />

    <input type="text" v-model="description" placeholder="Todo description" />

    <button v-on:click="requestCreateHabit">Create Todo</button>

    <div v-for="habit in habits" :key="habit.id">
      <h3>{{ habit.name }}</h3>
      <p>{{ habit.description }}</p>
    </div>

  </div>
</template>

<script lang="ts" setup>
  import { API, Auth } from 'aws-amplify';
  import { GraphQLResult, GraphQLSubscription } from "@aws-amplify/api";
  import { onMounted } from 'vue'
  import { createHabit } from '../graphql/mutations';
  import { listHabits } from '../graphql/queries';
  import { onCreateHabit } from '../graphql/subscriptions';
  import { Habit, useHabitsStore } from '../stores/habits';


  interface EventData {
    value: {
      data: {
        onCreateTodo: any;
      };
    };
  }

  const habitsStore = useHabitsStore();

  const requestCreateHabit = async () => {
    if (!habitsStore.name || !habitsStore.description)
      return;

    const todo: Habit = {
      name: habitsStore.name,
      description: habitsStore.description
    };

    habitsStore.addHabit(todo);

    await API.graphql({
      query: createHabit,
      variables: { input: todo }
    });

    habitsStore.name = '';
    habitsStore.description = '';
  }

  const getHabits = async () => {
    const habitsResult: GraphQLResult<any> = await API.graphql({
      query: listHabits
    });

    habitsStore.setHabits(
      habitsResult.data.listHabits.items
    );
  }
      
  const subscribe = async () => {
    (API.graphql({ query: onCreateHabit }) as GraphQLSubscription<any>)
      .subscribe({
        next: (eventData: EventData) => {
          const todo = eventData.value.data.onCreateTodo;

          if (habitsStore.habits.some((item) => item.name === todo.name))
            return; // remove duplications

          habitsStore.addHabit(todo);
        }
      });
  }

  onMounted(async () => {
    await getHabits();
    await subscribe();
  })
</script>
