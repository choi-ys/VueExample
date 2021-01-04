import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import jobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // path: 요청 URL 경로
            path:'/',
            // 요청 URL 출력/처리 부
            redirect: '/news',
        },
        {
            // path: news 화면 요청
            path:'/ask',
            // 
            component: AskView,
        },
        {
            // path: 요청 URL 경로
            path:'/jobs',
            // 요청 URL 출력/처리 부
            component: jobsView,
        },
        {
            // path: 요청 URL 경로
            path:'/news',
            // 요청 URL 출력/처리 부
            component: NewsView,
        },
        {
            // path: 요청 URL 경로
            path:'/user',
            // 요청 URL 출력/처리 부
            component: UserView,
        },
        {
            // path: 요청 URL 경로
            path:'/item',
            // 요청 URL 출력/처리 부
            component: ItemView,
        }
    ]
});