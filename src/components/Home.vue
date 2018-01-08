<template>
    <div class="row">
        <div id="home" class="col-12 text-center">
            <div class="background">
                <h1>Welcome to Mesa Stockroom</h1>
                <h2>Order your stuff</h2>
                <button class="btn btn-success" @click="goToMenu">Order</button>
            </div>
        </div>
    </div>
</template>

<style>
    #home{
        background: url('../../src/assets/HipsterCoffee.jpg') no-repeat center center fixed;
        background-size: cover;
        min-height: 900px;
    }
    h1,h2{
        margin:6%;
    }
    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 60%;
        margin: 0 auto;
        padding:20px;
    }
</style>

<script>
    export default {
        methods: {
            goToMenu() {
                // going back and forth of the previous history page
                // this.$router.go(-1);
                
                // replace redirect to the page and erase the history of current page.
                // this.$router.replace({name:'menuLink'});

                // redirect to the page and still keep the history browsing of previous page.
                this.$router.push({name: 'menuLink' });
            }
        }
    }
</script>