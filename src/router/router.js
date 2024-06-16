import { createRouter, createWebHistory } from 'vue-router';

import Main from '@/pages/Main.vue';
import AboutUs from '@/pages/AboutUs.vue';
import Posts from '@/pages/Posts.vue';
import CreateNewPost from '@/pages/CreateNewPost.vue';
import Settings from '@/pages/Settings.vue';
import Authorization from '@/pages/Authorization.vue';
import SpecificPost from '@/pages/SpecificPost.vue';
import PostsWithVuex from '@/pages/PostsWithVuex.vue';



const routes = [
  { path: '/', component: Main, name: 'Main' },
  { path: '/about-us', component: AboutUs, name: 'AboutUs' },
  { path: '/posts', component: Posts, name: 'Posts' },
  { path: '/create-new-post', component: CreateNewPost, name: 'CreateNewPost'},
  { path: '/settings', component: Settings, name: 'Settings' },
  { path: '/authorization', component: Authorization, name: 'Authorization' },
  { path: '/posts-with-vuex', component: PostsWithVuex, name: 'PostsWithVuex.vue' },

  { path: '/posts/:id', component: SpecificPost, name: 'SpecificPost' },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;