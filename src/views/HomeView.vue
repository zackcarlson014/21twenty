<template>
  <div class="home">
    <v-container fluid fill-height class="container">
      <PageHeader
        :showActions="false"
      >
        Dashboard
      </PageHeader>

      <v-row density="compact" justify="center" class="mt-8">
        <v-col cols="4">
          <HabitsWidget />
        </v-col>

        <v-col cols="4">
          <HabitsWidget />
        </v-col>

        <v-col cols="4">
          <HabitsWidget />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import PageHeader from '@/components/_shared/PageHeader.vue';
  import HabitsWidget from '@/components/widgets/HabitsWidget.vue'
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
