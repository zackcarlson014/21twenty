<template>
  <v-card flat class="title grey lighten-3 pageHeader">
    <v-card-title
      class="title pl-4 py-2 font-weight-bold black--text text-h5"
    >
      <v-row dense class="ml-16">
        <v-col cols="auto" class="ml-2">
          <slot />
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>


<style>
.pageHeader {
  height: auto;
  margin-top: -40px;
}
</style>
