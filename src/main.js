import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/style.css';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faBars,faXmark,faTrash);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router,axios);
app.mount('#app');