<template>
  <v-card
    outlined
    variant="tonal"
    color="primary"
  >
    <v-card-title>
      Recent Habits
    </v-card-title>

    <v-card-text>
      <v-list>
        <v-list-item v-for="(habit, i) in habitsStore.habits" :key="i">
          {{ habit.name }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useHabitsStore } from '@/stores/habits';

const habitsStore = useHabitsStore();
</script>
