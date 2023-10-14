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
            :to="{ name: 'about' }"
            class="router-link-black"
          >
            <v-list-item>
              <v-list-item-title>
                About
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
      <v-btn type="text" @click="props.signOut">
        Sign Out
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const props = defineProps(['signOut']);
</script>

<style>
.router-link-white {
  color: white;
}
.router-link-black {
  color: black;
}
</style>
