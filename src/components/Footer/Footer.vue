<template>
  <footer class="page-footer green darken-2">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Безкоштовно по Україні</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">0-800-600-505</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">044-225-0-505</a></li>
          </ul>
          <i class="material-icons">call</i>
        </div>
        <div class="col l4 offset-l2 s12">
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
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2021 Усі права захищено
        <a class="grey-text text-lighten-4 right" href="#!"></a>

      </div>
    </div>
  </footer>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.page-footer{
  display: grid;
  grid-template-columns: 1fr;


}
.container{
  display: grid;
  grid-auto-rows: auto;
}
</style>