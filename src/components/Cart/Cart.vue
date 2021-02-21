<template>
  <div class="cart">
    <router-link
        :to="{name:'Books'}"
    >
      <div class="books-link-cart">
        <i
            class="material-icons">
          arrow_back
        </i>
        <div>
          BACK
        </div>
      </div>
    </router-link>
    <div class="basket">
      <img src="../../assets/image/basket/basket.jpg" alt="">
    </div>
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
      <h4>Всього</h4>
      <p>{{cartTotalConst}} грн</p>
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
  grid-template-columns: 1fr;
  border: 1px solid black;
}
.total{
  display: grid;
  grid-template-columns: 1fr;
  background-color: #42b983;
  color: white;
}
.books-link-cart{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  padding: 1em;
  width: 100px;
  height: 65px ;
  position: absolute;
  top:0;
  right:0;
}
.basket img{

  width: 300px;
  height: 300px;
  position: center;


}

</style>