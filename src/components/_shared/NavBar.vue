<template>
  <v-app-bar
    color="blue lighten-5"
    density="compact"
  >
    <template v-slot:prepend>
      <v-menu max-width="250" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props" />
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title dense>
              <v-icon class="mr-2">
                mdi-home
              </v-icon>
              Home
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title dense>
              <v-icon class="mr-2">
                mdi-home
              </v-icon>
              Habits
            </v-list-item-title>
              <!-- <v-expansion-panel-text>
                <v-list>
                  <v-list-item
                    v-for="(habit, i) in habitsStore.habits"
                    :key="i"
                    @click="habitsStore.routeToHabitPage(habit.id as string)"
                  >
                    <v-row justify="center">
                      <v-col cols="auto">
                        {{ habit.name }}
                      </v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text> -->
            </v-list-item>

            <v-list-item append-icon="mdi-chevron-down">
              <v-menu location="end" offset="80">
                <template v-slot:activator="{ props }">
                  <v-list-item-title dense v-bind="props">
                    <v-icon class="mr-2">
                      mdi-home
                    </v-icon>
                    Categories
                  </v-list-item-title>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(category, i) in categories"
                    :key="i"
                    @click="routeToCategoryPage(category.value as string)"
                  >
                    <v-row justify="center">
                      <v-col cols="auto">
                        {{ category.title }}
                      </v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
              </v-menu>

            <!-- <v-expansion-panel-text>
                
              </v-expansion-panel-text> -->
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
  import { useHabitsStore } from '@/stores/habits';
  import { CATEGORIES } from '@/_helpers/categories';
  import { routeToCategoryPage } from '../_helpers/routers/categoryRouter';

  const authProps = defineProps(['signOut', 'user']);

  const habitsStore = useHabitsStore();
  const categories = CATEGORIES;
</script>

<style>
.router-link-white {
  color: white;
}
.router-link-black {
  color: black;
}
</style>
