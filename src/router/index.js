import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Shop from '../pages/Shop/Shop.vue';

import ShopRatings from '../pages/Shop/components/ShopRatings.vue';
import ShopInfo from '../pages/Shop/components/ShopInfo.vue';
import ShopHeader from '../pages/Shop/components/ShopHeader.vue';
import ShopGoods from '../pages/Shop/components/ShopGoods.vue';

import Login from '../pages/login/login.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/ratings',
          component: ShopRatings,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '/shop/header',
          component: ShopHeader,
        },
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '',
          redirect: '/shop/goods',
        },
      ],
    },
  ],
});
