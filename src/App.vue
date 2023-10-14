<template>
  <v-app>
    <authenticator class="my-auto">
      <template v-slot="{ signOut }">
        <NavBar :signOut="signOut" />

        <div class="mt-12">
          <RouterView />
        </div>
      </template>
    </authenticator>
  </v-app>
</template>

<script lang="ts" setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
  import NavBar from './components/_shared/NavBar.vue';
</script>
