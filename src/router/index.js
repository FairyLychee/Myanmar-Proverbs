import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue';
import ListPage from '@/views/ListPage.vue';
import DetailPage from '@/views/DetailPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/ListPage/:id/:name',
            name: "ListPage",
            component: ListPage,
        },
        {
            path: '/ListPage/:id/:name/:provId&:detailName',
            name: "DetailPage",
            component: DetailPage,
            props: true
        }
    ]
});

export default router;
