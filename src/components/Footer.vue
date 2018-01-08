<template>
  <footer class="row">
    <nav class="navbar navbar-light">
      <ul class="navbar-nav">
        <router-link tag="li" :to="{name:'homeLink'}" class='nav-item'><a class="nav-link">Home</a></router-link>
        <router-link tag="li" :to="{name:'aboutLink'}" class='nav-item'><a class="nav-link">About</a></router-link>
        <router-link tag="li" :to="{name: 'adminLink'}" class='nav-item'><a class="nav-link">Admin</a></router-link>
      </ul>
    </nav>
</footer>

</template>


<script>
    export default {
        data() {
            return {
              
            }
        }
    }
</script>

<style>
    
</style>