<template>
  <div id="app">
    <div class="container">
      <ms-Header></ms-Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4"><router-view name="Ordering-Guide"></router-view></div>
          <div class="col-sm-12 col-md-4"><router-view name="Contact"></router-view></div>
          <div class="col-sm-12 col-md-4"><router-view name="History"></router-view></div>
        </div>

    </div>
    
    <div class="container">
      <ms-Footer></ms-Footer>
      
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { dbInventoryRef, dbOrdersRef } from "./firebaseConfig";

export default {
    components:{
      msHeader: Header,
      msFooter: Footer,

    },
    created(){
      this.$store.dispatch('setMenuItemsRef', dbInventoryRef),
      this.$store.dispatch('setOrdersRef', dbOrdersRef)
    }

}
</script>

<style>
  header,footer {
    background: #ECEEEF;
    padding: 40px 0;
    font-size: 1.2em;
  }

  .card{
    background-color: #69ab64;
    margin: 20px 0;
    border-radius: 0;
  }
</style>
