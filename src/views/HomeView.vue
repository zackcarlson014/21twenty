<template>
  <h1>Welcome, {{ props.user.username }}!</h1>
</template>

<script setup lang="ts">
  const props = defineProps(['user']);
</script>
