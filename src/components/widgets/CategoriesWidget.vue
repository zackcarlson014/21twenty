<template>
  <v-card
    outlined
    variant="tonal"
    color="secondary"
  >
    <v-card-title>
      Top Categories
    </v-card-title>

    <v-card-text>
      <v-list>
        <v-list-item v-for="(category, i) in categories" :key="i">
          <v-icon class="mr-2">
            {{ category.icon }}
          </v-icon>
          {{ category.title }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { CATEGORIES } from '@/_helpers/categories';

  const categories = CATEGORIES;
</script>