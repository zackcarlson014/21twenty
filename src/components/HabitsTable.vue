<template>
  <AgGridVue
    style="width: 1000px; height: 500px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useHabitsStore } from '../stores/habits';
  import { AgGridVue } from "ag-grid-vue3";
  import "ag-grid-community/styles//ag-grid.css";
  import "ag-grid-community/styles//ag-theme-alpine.css";
  import { CellClickedEvent } from 'ag-grid-community/dist/lib/events';
  import router from '@/router';

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
      onCellClicked: (event: CellClickedEvent) => {
        console.log('Cell was clicked', event);
        router.push({
          name: 'habit',
          params: { id: event.data.id },
        });
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
    {
      field: 'category',
      headerName: 'Category',
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
