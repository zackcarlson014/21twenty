<template>
  <AgGridVue
    style="width: 100%; min-height: 500px"
    class="ag-theme-alpine"
    :gridOptions="gridOptions"
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
  import router from '@/router';
  import { CellClickedEvent, GridOptions } from 'ag-grid-community/dist/lib/main';

  // const props = defineProps(['requestDeleteHabit']);

  const habitsStore = useHabitsStore();

  const rowData = computed(() =>
    habitsStore.habits,
  );

  const columnDefs = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellStyle: {
        textAlign: 'left',
      },
      onCellClicked: (event: CellClickedEvent) => {
        habitsStore.routeToHabitPage(event.data.id)
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
    {
      headerClass: 'text-center',
      cellStyle: {
        textAlign: 'center',
      },
      width: 75,
      sortable: false,
      filter: false,
      resizable: false,
      cellRenderer: function(){
        return '<button type="button"><i class="createButton mdi mdi-plus-circle"></i></button>'
      },
      cellRendererParams: {
        clicked: (params: Record<string, any>) => {
          console.log(params);
          // props.requestDeleteHabit(params.data);
        },
      },
    },
    {
      headerClass: 'text-center',
      cellStyle: {
        textAlign: 'center',
      },
      width: 75,
      sortable: false,
      filter: false,
      resizable: false,
      cellRenderer: function(){
        return '<button type="button"><i class="updateButton mdi mdi-pencil"></i></button>'
      },
      cellRendererParams: {
        clicked: (params: Record<string, any>) => {
          console.log(params);
          // props.requestDeleteHabit(params.data);
        },
      },
    },
    {
      headerClass: 'text-center',
      cellStyle: {
        textAlign: 'center',
      },
      width: 75,
      sortable: false,
      filter: false,
      resizable: false,
      cellRenderer: function(){
        return '<button type="button"><i class="deleteButton mdi mdi-close-circle"></i></button>'
      },
      cellRendererParams: {
        clicked: (params: Record<string, any>) => {
          console.log(params);
          // props.requestDeleteHabit(params.data);
        },
      },
    },
  ];

  const gridOptions: GridOptions<any> = {
    columnDefs,
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
    },
    rowData: [...rowData.value],
    domLayout: 'autoHeight',
    animateRows: true,
  };
</script>

<style>
.createButton {
  color: #2196F3;
  font-size: 25px;
}
.updateButton {
  color: #4CAF50;
  font-size: 25px;
}
.deleteButton {
  color: #F44336;
  font-size: 25px;
}
</style>
