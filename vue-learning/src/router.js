import Vue from 'vue';
import Router from 'vue-router';

import dragmove from "./components/demo/DragMove.vue";
import getnowtime from "./components/demo/GetNowTime.vue";
import clock from "./components/demo/Clock.vue";
import draganddrop from "./components/demo/DragAndDrop.vue";
import translate from "./components/demo/Translate.vue";
import crossroad from "./components/demo/CrossRoad.vue";
import svgtest from "./components/demo/SvgTest.vue";
import app from './components/home/test.vue';
import animation from './components/demo/Animation.vue';
import linkanimation from './components/demo/LinkAnimation.vue';


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
        {
            path: '/demo/clock',
            name: 'clock',
            component : clock
        },
        {
            path: '/demo/dragmove',
            component: dragmove
        },
        {
            path: '/demo/getnowtime',
            component : getnowtime
        },
        {
            path: '/demo/draganddrop',
            component : draganddrop
        },
        {
            path: '/demo/translate',
            component : translate
        },
        {
            path: '/demo/svgtest',
            component : svgtest
        },
        {
            path: '/demo/crossroad',
            component : crossroad
        },
        {
            path: '/demo/animation',
            component : animation
        },
        {
            path: '/demo/linkanimation',
            component : linkanimation
        }
     ]
 })