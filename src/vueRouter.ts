import WeightTrackerPage from './features/weight-tracker/WeightTrackerPage.vue';
import WorkoutsTrackerPage from './features/workouts/WorkoutsTrackerPage.vue';
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/weight', name: 'weight', component: WeightTrackerPage},
    {path: '/workouts', name: 'workouts', component: WorkoutsTrackerPage},
    {path: '/:pathMatch(.*)*', redirect: '/weight'},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
