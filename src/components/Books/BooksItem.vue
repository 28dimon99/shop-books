<template>
    <div class="books">
        <div class="card">
            <div class="card-image">
                <img :src="books_item.image">

            </div>

            <div class="card-action">
                <strong>{{books_item.autor}}</strong>
            </div>

            <div class="card-content yellow lighten-4">
                {{books_item.name}}
            </div>
            <div>
                Ціна: {{books_item.price}} грн
            </div>

            <div>
                <button @click="addToCart">Купити</button>


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

</style>