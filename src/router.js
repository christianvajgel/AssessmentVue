import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from "@/components/Posts";
import Create from "@/components/Create";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
    ]
});