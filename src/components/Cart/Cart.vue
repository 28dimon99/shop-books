<template>
  <div class="cart">
    <router-link
        :to="{name:'Books'}"
    >
      <div class="books_link_cart">
        Повернутися до книг
      </div>
    </router-link>
    <h1>CART</h1>
    <p v-if="!cart_data.length">Кошик порожній...</p>
    <CartItems
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_data_items="item"
        @removeBooks="removeBooks(index)"
        @decrementItem="decrementItem(index)"
        @incrementItem="incrementItem(index)"
    />
    <div class="total">
      <h4>Total</h4>
      <p>{{cartTotalConst}}</p>
    </div>

  </div>

</template>

<script>
import CartItems from "./CartItems";
import {mapActions} from "vuex";

export default {
  name: "Cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    cartTotalConst() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce((sum, el) => {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }
  },

  methods: {
    ...mapActions(['DELETE_FROM_CART','INCREMENT_CART_ITEM','DECREMENT_CART_ITEM']),
    removeBooks(index) {
      this.DELETE_FROM_CART(index)
    },
    decrementItem(index){
      this.DECREMENT_CART_ITEM(index)
    },
    incrementItem(index){
      this.INCREMENT_CART_ITEM(index)
    }

  },
  components: {
    CartItems
  }
}
</script>

<style scoped>
.cart {
  display: grid;
  grid-template-columns: auto;

  border: 1px solid black;
}
.total{
  display: grid;
  grid-template-columns: 1fr;
  background-color: #42b983;
  color: white;
}
</style>