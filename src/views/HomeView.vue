<template>
  <div class="home">
    <v-container fluid fill-height class="container">
      <PageHeader
        :showActions="false"
      >
        Dashboard
      </PageHeader>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import PageHeader from '@/components/_shared/PageHeader.vue';
</script>

<style>
  .home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    height: 90vh;
  }
</style>
