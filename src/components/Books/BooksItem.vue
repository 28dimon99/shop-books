<template>
    <div class="books-items">
        <div class="card">
            <div class="card-image">
                <img :src=" books_item.image" alt="img">
            </div>
            <div class="card-action">
                <strong>{{books_item.autor}}</strong>
            </div>

            <div class="card-content">
                {{books_item.name}}
            </div>
            <div>
                Ціна: {{books_item.price}} грн
            </div>

            <div class="books_buttons">
              <a class="waves-effect waves-light btn" @click="addToCart">Купити</a>
            </div>
            <router-view/>

        </div>
    </div>
</template>

<script>
    export default {
        name: "BooksItem",
        props: {
            books_item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods:{
            addToCart(){
              this.$emit('addToCart',this.books_item)
            }
        }
    }
</script>

<style scoped>
     .books-items{
       display: grid;
       width: 205px;
       height: 500px;
       padding: 1em;
     }
  /*  .card-image{
      width: 200px;
      height: 300px;
      overflow: auto;
    }*/
    .card-action{
      display: grid;
    }
     .card-content{
       display: grid;
     }
    .books_buttons{
      display: grid;
      align-items: end;
    }
</style>