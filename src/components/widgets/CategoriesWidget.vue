<template>
  <v-card
    outlined
    variant="tonal"
    color="secondary"
  >
    <RouterLink to="/categories" class="router-link-black">
      <v-card-title justify="center">
        <v-icon>mdi-shape-outline</v-icon>
        Top Categories
      </v-card-title>
    </RouterLink>

    <v-card-text>
      <v-list>
        <v-list-item
          v-for="(category, i) in categories"
          :key="i"
        >
          <v-row justify="center">
            <v-col cols="auto">
              <v-icon class="mr-2" size="x-large">
                {{ category.icon }}
              </v-icon>
            </v-col>

            <v-col cols="auto">
            <h4>{{ category.title }}</h4>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { useHabitsStore } from '@/stores/habits'
  import { CATEGORIES } from '@/_helpers/categories';

  const habitsStore = useHabitsStore();
  const categories = CATEGORIES;
</script>

<style>
.router-link-black {
  color: black;
}
</style>