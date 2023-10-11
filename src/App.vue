<template>
  <v-app>
    <authenticator>
      <template v-slot="{ user, signOut }">
        <nav class="mt-8">
          <RouterLink to='/'>
            <h1>Home</h1>
          </RouterLink> | 

          <RouterLink to='/about'>
            <h1>About</h1>
          </RouterLink> | 

          <RouterLink to='/' @click="signOut">
            <h1>
              Sign Out
            </h1>
          </RouterLink> 
        </nav>

        <h1 class="mt-8">
          Welcome to Habit Tracker, {{ user.username }}!
        </h1>

        <RouterView />
      </template>
    </authenticator>
  </v-app>
</template>

<script lang="ts" setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
</style>
