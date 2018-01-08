import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Accounting from 'accounting-js'
import { routes } from "./routes";
import { store } from "./store/store.js";


Vue.use(VueRouter)

import VueFire from 'vuefire'
Vue.use(VueFire)

const router = new VueRouter ({
  routes,
  mode: 'history',

  // return back to the saved postion whenever user his back button
  scrollBehavior(to,from, savedPosition){
    // return back to top page
    // return{x:0,y:0}
    
    // return to specific css selector
    //return {selector: '.btn'}

    // return saved postion if it's possible when user hit Back history
    // if (savedPosition) {
    //   return savedPosition;
    // }else {
    //   return{x:0, y:0}
    // }

    // return back to saved position of all the page when not only back history button but also page nav
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

// global navigation guards - happend everytime the link is clicked 
// setting what will be triggered when link is clicked, and allow the hook to happen if next() exist. 
// no hook allow if next(false)
// router.beforeEach((to, from, next) =>{
//   // check what is passed as 'to' object
//   console.log(to);
  
//   // path validation
//   if (to.path ==='/menu') {
//     next();
//   }
//   else{
//     next(false);
//   }
// })

Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

// Asynchonyze
// Vue.component('global-component',
//   () => import('./components/Menu.vue')
// )

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


