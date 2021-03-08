<template>
  <footer class="page-footer green darken-2">
    <div class="container">

        <div class="phone">
          <h5 class="white-text">Безкоштовно по Україні</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">0-800-600-505</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">044-225-0-505</a></li>
          </ul>

           <FooterModal
               v-if="isOpenModalPhone"
               @closeModalPhone="closeModalPhone"
           />

          <i
              class="material-icons"
              @click="showModalPhone"
          >
            call
          </i>
        </div>

        <div class="help">
          <h5 class="white-text">Допомога</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">Оплата</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Доставка</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Повернення товару</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Подарункові сертифікати</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Всі категорії</a></li>
          </ul>
        </div>
      </div>

    <div class="footer-protect">
        © 2021 Усі права захищено
        <a class="grey-text text-lighten-4" href="#!"></a>
    </div>
  </footer>

</template>

<script>
import FooterModal from "@/components/Footer/FooterModal";

export default {
  name: "Footer",
  data(){
    return{
      isOpenModalPhone:false
    }
  },
  methods:{
    showModalPhone() {
      this.isOpenModalPhone = true
    },
    closeModalPhone() {
      this.isOpenModalPhone = false
    },
  },
  components:{
    FooterModal
  }
}
</script>

<style scoped>
.page-footer{
  display: grid;
  cursor: pointer;

}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 500px;
  justify-content: center;
  align-items: center;
}

.footer-protect{
  display: grid;
  grid-template-columns: 2fr;
  background-color: #43a047;
}

</style>