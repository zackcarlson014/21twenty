<template>
  <v-dialog v-model="showDialog" width="600">
    <v-card>
      <v-card-title class="card-title text-white">
        {{ props.title }}
      </v-card-title>
  
      <v-card-text>
        <slot />
      </v-card-text>
    
      <v-card-actions class="mt-8">
        <v-btn
          size="large"
          color="grey lighten-5"
          class="ml-4"
          variant="flat"
          @click="props.closeDialog">
          Close
        </v-btn>

        <v-spacer />

        <v-btn
          size="large"
          color="blue lighten-5"
          class="mr-4"
          variant="flat"
          @click="props.requestCreateHabit">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps(['show', 'title', 'closeDialog', 'requestCreateHabit']);

  const showDialog = computed(() => props.show);
</script>

<style>
.card-title {
  background-color: #2196F3;
}
</style>