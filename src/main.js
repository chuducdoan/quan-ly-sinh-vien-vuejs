import { createApp } from 'vue';
import './assets/tailwind.css';
import './assets/main.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue';
import NotFound from './components/UI/NotFound.vue';
import Login from './views/Login.vue';
import MainLayout from './components/layouts/MainLayout.vue';
import Home from './views/Home.vue';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import Students from './views/Students.vue';
import BaseTable from './components/UI/BaseTable.vue';
import StudentDetail from './views/StudentDetail.vue';
import BaseRadio from './components/UI/BaseRadio.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: 'home', component: Home },
        { path: 'students', component: Students },
        { path: 'students/:id', component: StudentDetail },
      ],
    },

    {
      path: '/login',
      component: Login,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
  linkActiveClass: 'active',
});
router.beforeEach((to, from, next) => {
  next();
});

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseTable', BaseTable);
app.component('BaseRadio', BaseRadio);

app.use(router);
app.use(VCalendar, {
  componentPrefix: 'vc',
});
app.mount('#app');
