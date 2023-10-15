<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useHabitsStore } from '@/stores/habits';

  const habitsStore = useHabitsStore();

  const props = defineProps(['id']);

  const name = ref('');
  const description = ref('');

  const requestGetHabit = async () => {
    console.log({ props: props.id });
    const habit = habitsStore.requestGetHabit(props.id);

    return habit;
  };

  onMounted(async () => {
    const result = await requestGetHabit();
    name.value = result.name;
    description.value = result.description;
  });
</script>