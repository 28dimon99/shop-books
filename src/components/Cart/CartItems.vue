<template>
    <div class="cart-item">
        <img :src="cart_data_items.image">
        <div class="card-item-autor">
            <strong>{{cart_data_items.autor}}</strong>
        </div>

        <div class="cart-item-content yellow lighten-4">
            {{cart_data_items.name}}
        </div>
        <div class="cart-item-price">
            Ціна: {{cart_data_items.price}} грн
        </div>
        <div class="cart-item-quantity">
            <p>Количество книг</p>
          <span>
          <span @click="decrementItem">-</span>
             {{cart_data_items.quantity}}
            <span @click="incrementItem">+</span>
        </span>

        </div>




        <button @click="removeBooks">Видалити</button>
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
        grid-column: auto;
        border: 1px solid black;
    }
</style>