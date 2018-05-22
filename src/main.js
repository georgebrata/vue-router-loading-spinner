import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import HelloWorld from './components/HelloWorld.vue'
import AboutComponent from './components/AboutComponent.vue'
import ContactComponent from './components/ContactComponent.vue'


//styling libraries
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
        name: 'Home',
        path: '/',
        component: HelloWorld
  },
  {
      name: 'About',
      path: '/about',
      component: AboutComponent
  },
  {
      name: 'Contact',
      path: '/contact',
      component: ContactComponent
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
