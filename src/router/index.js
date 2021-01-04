import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import jobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
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
        }
    ]
});