import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from "@/components/Posts";
import Create from "@/components/Create";
import DetailPost from "@/components/DetailPost";
import EditPost from "@/components/EditPost";

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
            path: '*',
            redirect: '/'
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path:'/post/:id',
            name:'detailPost',
            component: DetailPost,
            children: [{
                path:'edit',
                name:'edit-post',
                component:EditPost
            }]
        }
    ]
});