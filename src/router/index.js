import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Cards from '../views/Cards.vue';
import NameGame from '../views/NameGame.vue';
import Highscore from '../views/Highscore.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  { path: '/game', name: 'game', component: Game },
  { path: '/squeedoo', name: 'Squeedoo', component: NameGame },
  { path: '/highscore', name: 'Highscore', component: Highscore },
  { path: '/cards', name: 'Cards', component: Cards },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
