<template>
  <v-card flat color="#bebfc2" class="title pageHeader mt-8">
    <v-card-title
      class="title font-weight-bold black--text text-h5"
    >
      <v-row density="compact" class="ml-10">
        <v-col cols="10" class="ml-16">
          <slot />
        </v-col>

        <v-spacer />

        <v-col v-if="showActions" cols="auto">
          <v-icon color="white" @click="props.openDialog">
            mdi-plus-circle
          </v-icon>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
  const props = defineProps({
    openDialog: {
      type: Function,
      required: false,
    },
    showActions: {
      type: Boolean,
      required: false,
      default: true,
    },
  });
</script>


<style>
.pageHeader {
  height: auto;
}
</style>
