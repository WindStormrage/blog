import Vue from 'vue'
import Router from 'vue-router'
import composition from 'components/content/composition.vue';
import axis from 'components/content/axis.vue';
import comment from 'components/content/comment.vue';
import about from 'components/content/about.vue';
import home from 'components/content/home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/composition/:nav/:id',
      name: 'composition',
      component: composition
    },
    {
      path: '/axis',
      name: 'axis',
      component: axis
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
