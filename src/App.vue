<template>
  <v-app>
    <authenticator>
      <template v-slot="{ signOut }">
        <!-- <nav class="mt-8">
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
        </nav> -->

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

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
</style>
