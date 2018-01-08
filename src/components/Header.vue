<template>
  <header class="row">
    <nav class="navbar navbar-expand-md navbar-light bg-light col">
      <a class="navbar-brand" href="#">MESA COLLEGE STOCKROOM</a>
      <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link :to="homeLink" tag="li" class="nav-item">
            <a class="nav-link">Home
              
            </a>
          </router-link>

          <router-link :to="menuLink" tag="li" class="nav-item">
            <a class="nav-link">Stuff</a>
          </router-link>

        <router-link :to="adminLink" tag="li" class="nav-item">
            <a class="nav-link">Admin</a>
        </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        data(){
            return {
                homeLink: '/',
                menuLink: '/menu',
                adminLink: '/admin'
            }
        }
    }

</script>

<style>


</style>
