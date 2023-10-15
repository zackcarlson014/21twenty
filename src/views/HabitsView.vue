<template>
  <div class="habits">
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
      <v-row density="compact" justify="center">
        <v-col cols="12" align-self="center" class="px-0">
          <PageHeader
            :openDialog="openDialog"
            class="mb-8">
            YOUR HABITS
          </PageHeader>
        </v-col>
      </v-row>

      <v-row density="compact" justify="center">
        <HabitsTable
          :requestDeleteHabit="habitsStore.requestDeleteHabit"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useHabitsStore } from '../stores/habits';
  import { CATEGORIES } from '@/_helpers/categories';
  import DialogForm from '@/components/_shared/DialogForm.vue';
  import PageHeader from '@/components/_shared/PageHeader.vue';
  import HabitsTable from '../components/HabitsTable.vue';

  const habitsStore = useHabitsStore();
  const show = ref(false);
  const categories = computed(() => CATEGORIES);

  const requestCreateHabit = () => {
    habitsStore.requestCreateHabit();
    closeDialog();
  };

  const openDialog = () => {
    show.value = true;
  };

  const closeDialog = () => {
    habitsStore.name = '';
    habitsStore.description = '';
    habitsStore.category = '';
    show.value = false;
  };
</script>

<style>
  .habits {
    justify-content: center;
  }
</style>
