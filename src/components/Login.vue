<template>
    <div class="row">
       <div>
            <div>
                <p v-if="!currentUser">Please Login to continue</p>
                <p v-else> Logged in as:
                    <br>{{currentUser}}</p>
            </div>
            <form action="">
                <div class="form-group">
                    <label for="">Email Address:</label>
                    <input type="email" class="form-control" name="" id="email" placeholder="youremail@gmail.com">
                </div>
            
                <div class="form-group">
                    <label for="">Password:</label>
                    <input type="password" class="form-control" name="" id="password" placeholder="password">
                </div>
            
                <button class="btn btn-primary" @click.prevent="signIn">Sign In</button>
                <button class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
            </form>
       </div>
    </div>

</template>    

<script>
    import Firebase from 'firebase'
    import { store } from "../store/store.js";
    
    Firebase.auth().onAuthStateChanged(function(user){
        if (user) {
            store.dispatch('setUser', user)
        }else{
            store.dispatch('setUser', null)
        }
    })

    export default {
        methods:{
            signIn(){
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;

                Firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode==='auth/wrong-password') {
                        alert('Wrong Password')
                    }else{
                        alert(errorMessage);
                    }
                });
            },
            signOut(){
                Firebase.auth().signOut().then(function(){
                    alert('logged Out');
                }).catch(function(error){
                    alert('error.')
                })
            }
        },
        computed: {
            currentUser(){
                return this.$store.getters.currentUser
            }
        }
    }

</script>