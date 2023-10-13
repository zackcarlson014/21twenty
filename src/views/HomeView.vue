<template>
  <div class="home">
    <v-row
      density="compact"
      align="center"
      justify="center"
      class="my-8"
    >
      <v-col cols="3" align-self="center">
        <v-text-field
          v-model="habitsStore.name"
          density="compact"
          variant="outlined" 
          placeholder="Habit name"
          clearable
          hide-details
        />
      </v-col>

      <v-col cols="3">
        <v-text-field
          v-model="habitsStore.description"
          density="compact"
          variant="outlined"
          placeholder="Habit description"
          clearable
          hide-details
        />
      </v-col>

      <v-col cols="auto">
        <v-btn
          color="primary"
          density="compact"
          variant="text"
          v-on:click="requestCreateHabit"
        >
          Create Habit
        </v-btn>
      </v-col>
    </v-row>

    <v-container fluid>
      <PageHeader
        class="mb-8">
        YOUR HABITS
      </PageHeader>

      <HabitsTable />
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { API } from 'aws-amplify';
  import { GraphQLResult } from "@aws-amplify/api";
  import { onBeforeMount } from 'vue'
  import { createHabit } from '../graphql/mutations';
  import { listHabits } from '../graphql/queries';
  import { Habit, useHabitsStore } from '../stores/habits';
  import PageHeader from '@/components/_shared/PageHeader.vue';
  import HabitsTable from '../components/HabitsTable.vue';

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

    return habitsResult;
  }

  onBeforeMount(async () => {
    await getHabits();
  })
</script>
