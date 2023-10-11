<template>
  <div class="app">
    <v-container fluid>
      <authenticator>
        <template v-slot="{ user, signOut }">
          <nav>
            <RouterLink to='/'>Home</RouterLink> | 
            <RouterLink to='/about'>About</RouterLink>
          </nav>

          <RouterView />

          <h1>Hello {{ user.username }}!</h1>

          <button @click="signOut">Sign Out</button>
        </template>
      </authenticator>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>

<style>
.app {
  text-align: center;
}
</style>
