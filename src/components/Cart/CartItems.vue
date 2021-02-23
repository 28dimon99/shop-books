<template>
    <div class="cart-item">
      <div class="cart-img">
        <img :src="cart_data_items.image">
      </div>
        <div class="card-item-autor">
            <strong>{{cart_data_items.autor}}</strong>
        </div>

        <div class="cart-item-content">
            {{cart_data_items.name}}
        </div>
        <div class="cart-item-price">
            Ціна: {{cart_data_items.price}} грн
        </div>
        <div class="cart-item-quantity">
            <p>Кількість книг</p>
          <span>
          <span @click="decrementItem">-</span>
             {{cart_data_items.quantity}}
            <span @click="incrementItem">+</span>
        </span>
        </div>
      <a class="waves-effect waves-light btn red" @click="removeBooks">Видалити</a>
    </div>
</template>

<script>
    export default {
        name: "CartItems",
        props:{
            cart_data_items:{
                type:Object,
                default(){
                    return {}
                }
            }
        },

        methods: {
            removeBooks() {
              this.$emit('removeBooks')
            },
          decrementItem(){
              this.$emit('decrementItem')
          },
          incrementItem(){
              this.$emit('incrementItem')
          }
        },
        mounted() {
            this.$set(this.cart_data_items, 'quantity', 1)
        }
    }
</script>

<style scoped>
    .cart-item{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 20px;
        justify-items: stretch;
        align-items: center;
        background-color:#2c3e50;
        color: white;
        padding: 1em;
        cursor: pointer;
        border: 1px solid black;
    }
    .cart-img{

    }
</style>