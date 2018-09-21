import Vue from 'vue';
import Router from 'vue-router';

import clock from './components/Clock.vue';
import dragmove from './components/DragMove.vue';
import app from './test.vue';


Vue.use(Router);

/**
 * Vue-learning 路由简单设计：
 * /:category/:component
 * category 表示类别，例如现在做的比较多的是demo小组件component，可能之后会加一些综合项目project之类
 * component 表示各个类别下相应的组件，例如现在做的一些
 * 例如：
 * /demo/clock
 * /demo/crossroad
 * /demo/draganddrop
 * /demo/dragmove
 * /demo/getnowtime
 * /demo/svgtest
 * /demo/translate
 */

 export default new Router({
     base: process.env.BASE_URL,
     routes: [
         {
             path: '/index',
             name:'home',
             component: app
         },
        //  {
        //      path: '/demo',
        //      name:'demo',
        //      component: app,
        //      children: [
        //          {
        //              path: 'clock',
        //              component: clock
        //          },
        //          {
        //              path: 'dragmove',
        //              component: dragmove
        //          }
        //      ]
        //  }
        {
            path: '/demo/clock',
            name: 'clock',
            component : clock
        },
        {
            path: '/demo/dragmove',
            component: dragmove
        }
     ]
 })