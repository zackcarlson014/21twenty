import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// MDI
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

Amplify.configure(awsExports);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(mdiVue, {
  icons: mdijs
});

app.mount('#app');
