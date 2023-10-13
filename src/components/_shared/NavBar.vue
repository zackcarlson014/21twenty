<template>
  <v-app-bar
    color="primary"
    density="compact"
  >
    <template v-slot:prepend>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props" />
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in [{ title: 'Home' }, { title: 'About' }]"
            :key="index"
            :value="index"
          >
            <v-list-item-title>
              <RouterLink
                :to="{ name: item.title.toLowerCase() }"
                class="router-link-black"
              >
                {{ item.title }}
              </RouterLink>
            </v-list-item-title>
          </v-list-item>
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
