//import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Homepage from './components/Homepage.vue'
import UserStory1 from './components/UserStory1.vue'
import UserStory2 from './components/UserStory2.vue'
import UserStory3 from './components/UserStory3.vue'
import UserStory4 from './components/UserStory4.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/US1', component: UserStory1 },
    { path: '/US2', component: UserStory2 },
    { path: '/US3', component: UserStory3 },
    { path: '/US4', component: UserStory4 }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')