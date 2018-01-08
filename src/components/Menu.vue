<template>
  <div class="row">
    <div class="col-md-12 col-lg-8">
      <table class="table table-hover table-responsive">
        <thead class="thead-dark">
          <tr>
            <th></th>
            <th></th>
            <th>Type</th>
            <th>Size</th>
            <th>Color</th>
            <th>Brand</th>
            <th>Qty</th>
            <th>Price</th>
            <th>+Cart</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item['.key']">
          <tr class="bg-primary text-white">
            <td>
              <strong>{{item.name}}</strong>
            </td>
            <td>{{item.category}}</td>
          </tr>
          <tr v-for="option in item.options">
            <td></td>
            <td></td>
            <td>{{option.type}}</td>
            <td>{{option.size}}</td>
            <td>{{option.color}}</td>
            <td>{{option.brand}}</td>
            <td>{{option.Qty}}</td>
            <td>{{option.price | currency}}</td>
            <td>
              <button class="btn btn-sm btn-outline-success" @click="addToBasket(item,option)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-12 col-lg-4">
      <div v-if="basket.length>0">
        <table class="table table-hover table-sm ">
            <thead class="thead-dark">
                <tr>
                    <th>Quantiy</th>
                    <th>Item</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody v-for="item in basket">
                <tr>
                    <td>
                        <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                        <span>{{item.quantity}}</span>
        
                        <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
                    </td>
                    <td>{{item.name}}</td>
                    <td> {{item.price * item.quantity | currency}}</td>
                </tr>
            </tbody>
        </table>
        <p>Order Total: {{ total | currency }}</p>
        <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
      </div>
      <div v-else><p>{{basketText}}</p></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { dbOrdersRef } from "../firebaseConfig";

  export default {
    data() {
      return {
        basket: [],
        basketText:"Your Basket is empty!",
        
      }
    },

    computed:{
      // // getting data from store js vuex
      // getMenuItems(){
      //   return this.$store.state.menuItems;
      // }

      ...mapGetters([
        'getMenuItems',
        
      ]),
      total(){
        var totalCost = 0;
        for (var items in this.basket) {
          var individualItem = this.basket[items];
          totalCost += individualItem.quantity * individualItem.price;
        }
        return totalCost;
      }
    },
    methods: {
      addToBasket(item, option) {
        this.basket.push({
          name: item.name,
          price: option.price,
          size: option.size,
          quantity: 1
        })
      },
      increaseQuantity(item){
          item.quantity++;
      },
      decreaseQuantity(item) {
            item.quantity--;
            if(item.quantity===0){
                this.removeFromBasket(item);
            }
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item),1);
        },
        addNewOrder(){
          //using mutations named addOrder of store.js
          // this.$store.commit('addOrder', this.basket);
          dbOrdersRef.push(this.basket);
          this.basket = [];
          this.basketText = "Your Order has been placed!"
        }
    }
  }

</script>

<style>


</style>
