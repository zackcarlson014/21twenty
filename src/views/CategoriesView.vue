
<template>
  <v-container fluid>
    <v-card>
      <v-list>
        <v-list-item
          v-for="(category, i) in categories"
          :key="i"
          @click="routeToCategoryPage(category.value)"
        >
          {{ category.title }}
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  import { routeToCategoryPage } from '@/components/_helpers/routers/categoryRouter';
  import { CATEGORIES } from '@/_helpers/categories';

  const categories = CATEGORIES;
</script>