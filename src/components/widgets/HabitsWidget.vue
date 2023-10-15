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
          <v-list-item
            v-for="(habit, i) in habitsStore.habits"
            :key="i"
            @click="habitsStore.routeToHabitPage(habit.id as string)"
          >
            <v-icon class="mr-2">
              {{ findCategoryIcon(habit.category) }}
            </v-icon>
            {{ habit.name }} ({{ findCategoryTitle(habit.category) }})
          </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import router from '@/router';
  import { useHabitsStore } from '@/stores/habits';
  import { Category, CATEGORIES } from '@/_helpers/categories';

  const habitsStore = useHabitsStore();
  const categories = CATEGORIES;

  const findCategoryIcon = ((categoryInput: string) => {
    const category = categories.find((category: Category) =>
      category.value === categoryInput)

    if (category)
      return category.icon;
  })

  const findCategoryTitle = ((categoryInput: string) => {
    const category = categories.find((category: Category) =>
      category.value === categoryInput)

    if (category)
      return category.title;
  })
</script>

<style>
.router-link-black {
  color: black;
}
</style>
