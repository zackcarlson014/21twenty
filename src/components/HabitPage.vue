<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getHabit } from '@/graphql/queries';
  import { GraphQLResult } from '@aws-amplify/api-graphql';
  import { API } from '@aws-amplify/api/lib-esm/API';

  const props = defineProps(['id']);

  const name = ref('');
  const description = ref('');

  const requestGetHabit = async () => {
    const habitResult: GraphQLResult<any> = await API.graphql({
      query: getHabit,
      variables: {
        id: props.id
      }
    });

    return habitResult.data.getHabit;
  };

  onMounted(async () => {
    const result = await requestGetHabit();
    name.value = result.name;
    description.value = result.description;
  });
</script>@/graphql/queries/queries