<template>
  <v-app>
    <authenticator class="authenticator">
      <template v-slot="{ signOut, user }">
        <NavBar :signOut="signOut" :user="user" />

        <div class="mt-12">
          <RouterView
            :user="user"
          />
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

<style>
  .authenticator {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
