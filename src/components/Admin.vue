<template>
  <div>
   <ms-admin-hidden v-if="currentUser"></ms-admin-hidden>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <ms-login></ms-login>
      </div>
    </div>
  </div>

</template>

<script>
 
  import Login from './Login.vue'
  import {
    mapGetters
  } from "vuex"
// dynamic import
const AdminHidden = () => import('./AdminHidden.vue')

  export default {
    components: {
      msAdminHidden : AdminHidden,
      msLogin: Login
    },
    computed: {
      //   // getting data from store js vuex
      //   getMenuItems() {
      //     // get item data by accessing store state directly
      //     // return this.$store.state.menuItems;

      //     // getting item data by using getters of store.js
      //     return this.$store.getters.getMenuItems;
      //   },
      //   numberOfOrders(){
      //       return this.$store.getters.numberOfOrders;
      //   }

      ...mapGetters([
       
        'currentUser'
      ])
    },
    // guarding this component before the Route enter
    // beforeRouteEnter: (to,from,next)=>{
    //     // call back the object
    //     next(vm=>{
    //         alert('Hi'+ vm.name);
    //     })
    // }

  }

</script>
<style>
  .order-number{
    margin:10px 0;
  }
</style>