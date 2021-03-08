<template>


    <div class="books-items">
      <BookModal
          v-if="isModalVisible"
          @closeModalBook="closeModalInfo"
          btnModal="Додати в кошик"
          :titleModal="books_item.autor"

          @addCartModal= "addToCart"
      >
        <div class="modal-cart">
          <div class="card-image">
            <img :src=" books_item.image" alt="img">
          </div>
          <div class="card-action">
            <strong>{{books_item.autor}}</strong>
          </div>

          <div class="card-content">
            {{books_item.name}}
          </div>
        </div>

      </BookModal>

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
        <a class="waves-effect waves-light btn  indigo lighten-2" @click="openModalInfo">Інформація</a>
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


    import BookModal from "@/components/Books/BookModals/BookModal";

    export default {
      name: "BooksItem",
      components: {BookModal},
      data() {
        return {
          isModalVisible: false
        }

      },
      props: {
        books_item: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      methods: {
        addToCart() {
          this.$emit('addToCart', this.books_item)
        },
        openModalInfo(){
          this.isModalVisible = true
        },
        closeModalInfo(){
          this.isModalVisible = false
        },


        components: {
          BookModal
        }
      }
    }
</script>

<style scoped>
     .books-items{
       display: grid;
       width: 205px;
       overflow: hidden;
       padding: 1em;
       align-items: end;
     }
    .card-action{
      display: grid;
    }
     .card-content{
       display: grid;
     }
    .books_buttons{
      display: grid;

    }
</style>