<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <authenticator>
          <template v-slot="{ user, signOut }">
            <nav>
              <RouterLink to='/home'>Home</RouterLink> | 
              <RouterLink to='/about'>About</RouterLink> |
              <RouterLink to='/' @click="signOut">
                Sign Out
              </RouterLink> 
            </nav>

            <RouterView />

            <h1>Hello {{ user.username }}!</h1>

            
          </template>
        </authenticator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
