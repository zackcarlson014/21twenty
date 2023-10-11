<template>
  <v-row density="compact" justify="center">
    <AgGridVue
      style="width: 1000px; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    />
  </v-row>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useHabitsStore } from '../stores/habits';
  import { AgGridVue } from "ag-grid-vue3";
  import "ag-grid-community/styles//ag-grid.css";
  import "ag-grid-community/styles//ag-theme-alpine.css";

  const habitsStore = useHabitsStore();

  const rowData = computed(() => habitsStore.habits);

  const columnDefs = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellStyle: {
        textAlign: 'left',
      },
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      cellStyle: {
        textAlign: 'left',
      },
    },
  ]
</script>

<style>
.ag-header-cell-label {
  justify-content: start;
}
</style>
