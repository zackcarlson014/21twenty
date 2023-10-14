<template>
  <v-card flat color="blue lighten-5" class="title pageHeader mx-16 mt-8">
    <v-card-title
      class="title font-weight-bold black--text text-h5"
    >
      <v-row density="compact" class="ml-2">
        <v-col cols="10" class="ml-16">
          <slot />
        </v-col>

        <v-spacer />

        <v-col cols="auto">
          <v-icon color="white" @click="props.openDialog">
            mdi-plus-circle
          </v-icon>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
  const props = defineProps(['openDialog']);
</script>


<style>
.pageHeader {
  height: auto;
  margin-top: -40px;
}
</style>
