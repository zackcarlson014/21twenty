<template>
  <v-btn
    v-bind="props.activatorProps"
    type="text">

    <v-icon
      size="x-large"
      class="mr-2">
      mdi-account-circle
    </v-icon>

    Welcome, {{ props.user.username }}
  </v-btn>
</template>

<script setup>
 const props = defineProps(['activatorProps', 'user'])
</script>