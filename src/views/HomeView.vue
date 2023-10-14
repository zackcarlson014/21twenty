<template>
  <div class="home">
    <DialogForm
      v-if="show"
      :show="show"
      :title="'Create a new habit'"
      :closeDialog="closeDialog"
      :requestCreateHabit="requestCreateHabit"
    >
      <v-row
        density="compact"
        justify="center"
        class="mt-2"
      >
        <v-col cols="10" align-self="center">
          <v-text-field
            v-model="habitsStore.name"
            density="compact"
            variant="outlined" 
            placeholder="Name"
            clearable
            hide-details="auto"
          />
        </v-col>
      </v-row>

      <v-row
        density="compact"
        justify="center"
      >
        <v-col cols="10">
          <v-textarea
            v-model="habitsStore.description"
            density="compact"
            variant="outlined"
            placeholder="Description"
            hide-details="auto"
          />
        </v-col>
      </v-row>

      <v-row
        density="compact"
        justify="center"
      >
        <v-col cols="10">
          <v-autocomplete
            v-model="habitsStore.category"
            :items="categories"
            item-title="title"
            item-value="value"
            density="compact"
            variant="outlined"
            placeholder="Category"
            hide-details="auto"
          />
        </v-col>
      </v-row>
    </DialogForm>

    <v-container fluid>
      <v-row density="compact" justify="center" class="mx-4">
        <v-col cols="12" align-self="center">
          <PageHeader
            :openDialog="openDialog"
            class="mb-8">
            YOUR HABITS
          </PageHeader>
        </v-col>
      </v-row>

      <v-row density="compact" justify="center">
        <HabitsTable />
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { API } from 'aws-amplify';
  import { GraphQLResult } from "@aws-amplify/api";
  import { computed, onBeforeMount, ref } from 'vue'
  import { createHabit } from '../graphql/mutations';
  import { listHabits } from '../graphql/queries';
  import { Habit, useHabitsStore } from '../stores/habits';
  import { CATEGORIES } from '@/_helpers/categories';
  import DialogForm from '@/components/_shared/DialogForm.vue';
  import PageHeader from '@/components/_shared/PageHeader.vue';
  import HabitsTable from '../components/HabitsTable.vue';

  const habitsStore = useHabitsStore();
  const show = ref(false);
  const categories = computed(() => CATEGORIES);

  const requestCreateHabit = async () => {
    if (!habitsStore.name || !habitsStore.description || !habitsStore.category)
      return;

    const habit: Habit = {
      name: habitsStore.name,
      description: habitsStore.description,
      category: habitsStore.category,
    };

    try {
      await API.graphql({
        query: createHabit,
        variables: { input: habit }
      });
    } catch (error) {
      console.log(error);
    }

    habitsStore.name = '';
    habitsStore.description = '';
    habitsStore.category = '';
    closeDialog();
    getHabits();
  }

  const getHabits = async () => {
    let habitsResult: GraphQLResult<any> = {};
    try {
      habitsResult = await API.graphql({
        query: listHabits
      });
    } catch (error) {
      console.log(error);
    }

    habitsStore.setHabits(
      habitsResult.data.listHabits.items
    );

    return habitsResult;
  }
  const openDialog = () => {
    show.value = true;
  }
  const closeDialog = () => {
    habitsStore.name = '';
    habitsStore.description = '';
    habitsStore.category = '';
    show.value = false;
  }

  onBeforeMount(async () => {
    await getHabits();
  })
</script>
