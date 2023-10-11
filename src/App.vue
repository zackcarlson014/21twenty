<template>
  <div class="app">
    <authenticator>
      <template v-slot="{ user, signOut }">
        <nav>
          <RouterLink to='/home'>Home</RouterLink> | 
          <RouterLink to='/about'>About</RouterLink> |
          <RouterLink to='/' @click="signOut">
            Sign Out
          </RouterLink> 
        </nav>

        <h1>Hello {{ user.username }}!</h1>

        <RouterView />
      </template>
    </authenticator>
  </div>
</template>

<script lang="ts" setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>

<style>
.app {
  min-height: 100%;
}
</style>
