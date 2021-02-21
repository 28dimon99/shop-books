<template>
   <div class="content">
     <router-link
         :to="{name:'Cart', params:{cart_data: CART}}"
     >
       <div class="books_link_cart">
         {{CART.length}}
         <i
             class="material-icons">
           add_shopping_cart
         </i>
       </div>

     </router-link>
     <h1>КНИГИ</h1>
     <div class="books">
         <BooksItem
                 v-for="book in BOOKS"
                 :key="book.id"
                 :books_item="book"
                 @addToCart="addToCart"
         />
     </div>

   </div>

</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    import BooksItem from "./BooksItem";


    export default {
        name: "Books",
        props: {
            books_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        computed: mapGetters(['BOOKS','CART']),
        methods: {
            ...mapActions(["GET_BOOKS_FROM_API","ADD_TO_CART"]),
            addToCart(data){
                console.log(data)
               this.ADD_TO_CART(data)
            }
        },
        components: {BooksItem},
        mounted() {
            //вызов actions
            this.GET_BOOKS_FROM_API();

        }
    };
</script>

<style scoped>
    .content{
        display: grid;
        margin: 0 auto;
        background-color:cornsilk;
        padding: 20px 0 40px 0;
    }
.books{
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 100px;

}
.books_link_cart{
  display: grid;
  color: white;
  list-style: none;
  width: 200px;
  position: absolute;
  top:0;
  right: 0;

}
</style>