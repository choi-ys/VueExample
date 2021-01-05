import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import jobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue'
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/news',
        },
        {
            path:'/ask',
            component: AskView,
        },
        {
            path:'/jobs',
            component: jobsView,
        },
        {
            path:'/news',
            component: NewsView,
        },
        {
            path:'/user/:id',
            component: UserView,
        },
        {
          path:'/item/:id',
          component: ItemView,
        }
    ]
});