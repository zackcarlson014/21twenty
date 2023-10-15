<template>
  <h1>
    {{ categoryTitle }}
  </h1>
</template>

<script setup lang="ts">
  import { CATEGORIES } from '@/_helpers/categories';

  const props = defineProps(['id']);
  const categories = CATEGORIES;

  const category = categories.find(category => {
    return category.value === props.id
  });

  const categoryTitle = category?.title || '';
</script>