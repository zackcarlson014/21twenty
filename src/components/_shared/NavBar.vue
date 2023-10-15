<template>
  <v-app-bar
    color="blue lighten-5"
    density="compact"
  >
    <template v-slot:prepend>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props" />
        </template>

        <v-list>
          <RouterLink
            :to="{ name: 'home' }"
            class="router-link-black"
          >
            <v-list-item>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item>
          </RouterLink>

          <RouterLink
            :to="{ name: 'habits' }"
            class="router-link-black"
          >
            <v-list-item>
              <v-list-item-title>
                Habits
              </v-list-item-title>
            </v-list-item>
          </RouterLink>
        </v-list>
      </v-menu>
    </template>

    <v-row dense>
      <v-col cols="auto" class="ml-8">
        <v-app-bar-title>
          <RouterLink to="/" class="router-link-white">
            Z's Habits
          </RouterLink>
        </v-app-bar-title>
      </v-col>
    </v-row>

    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <AccountMenu
            :activatorProps="props"
            :username="authProps.user.username"
          />
        </template>

        <v-list>
          <v-list-item 
            @click="authProps.signOut">
            <v-list-item-title>
              Sign Out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
  import AccountMenu from './AccountMenu.vue'
  const authProps = defineProps(['signOut', 'user']);
</script>

<style>
.router-link-white {
  color: white;
}
.router-link-black {
  color: black;
}
</style>
