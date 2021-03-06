import Vue from 'vue';
import VueRouter from 'vue-router';
import HoursLog from '../views/HoursLog.vue';
import TimeEntry from '../views/TimeEntry.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HoursLog',
    component: HoursLog
  },
  {
    path: '/add-time-entry',
    name: 'TimeEntry',
    component: TimeEntry
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
];

const router = new VueRouter({
  routes
});

export default router;
