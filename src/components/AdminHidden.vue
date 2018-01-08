<template>
<section>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <!-- new item form-->
            <ms-new-item></ms-new-item>
        </div>
        <div class="col-sm-12 col-md-6">
            <h3>Menu:</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Remove From Menu</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item['.key']">
                    <tr>
                        <td>{{item.name}}</td>

                        <td>
                            <button class="btn btn-sm btn-outline-danger" @click="removeMenuItem(item['.key'])">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h3>Current Order: {{numberOfOrders}}</h3>
            <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
                <thead>
                    <th>Item</th>
                    <th>Option</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <div class="order-number">
                        <strong>
                            <em>Order Number: {{index + 1}}</em>
                        </strong>
                        <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(orders['.key'])">X</button>
                    </div>
                    <tr v-for="orderItem in orders['.value']">
                        <td>{{orderItem.name}}</td>
                        <td>{{orderItem.size}}</td>
                        <td>{{orderItem.quantity}}</td>
                        <td>${{orderItem.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
</template>

<script>
    import NewItem from './NewItem.vue'
    import {
        mapGetters
    } from "vuex"
    import {
        dbInventoryRef,
        dbOrdersRef
    } from "../firebaseConfig";

    export default {
        components: {
            msNewItem: NewItem
        
        },
        data() {
            return {
                name: 'Hai'
            }
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
                'numberOfOrders',
                'getMenuItems',
                'getOrders'            
            ])
        },
        methods: {
            removeMenuItem(key) {
                dbInventoryRef.child(key).remove();
            },
            removeOrderItem(key) {
                dbOrdersRef.child(key).remove();
            }
        },
        // guarding this component before the Route enter
        // beforeRouteEnter: (to,from,next)=>{
        //     // call back the object
        //     next(vm=>{
        //         alert('Hi'+ vm.name);
        //     })
        // }

        // Guard this component before the Route leave
        beforeRouteLeave: (to, from, next) => {
            if (confirm('have you remmember to log out') == true) {
                next();
            } else {
                next(false);
            }
        }

    }
</script>