<template>
  <v-card
    outlined
    variant="tonal"
    color="primary"
  >
    <RouterLink to="/habits" class="router-link-black">
      <v-card-title justify="center">
        <v-icon>mdi-list-status</v-icon>
        Recent Habits
      </v-card-title>
    </RouterLink>

    <v-card-text>
      <v-list>
        <v-list-item
          v-for="(habit, i) in habitsStore.habits"
          :key="i"
          @click="habitsStore.routeToHabitPage(habit.id as string)"
        >
          <v-row justify="center">
            <v-col cols="auto">
              <v-icon class="mr-2" size="x-large">
                {{ findCategoryIcon(habit.category) }}
              </v-icon>
            </v-col>

            <v-col cols="auto">
              <h4>
                {{ habit.name }} ({{ findCategoryTitle(habit.category) }})
              </h4>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
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
