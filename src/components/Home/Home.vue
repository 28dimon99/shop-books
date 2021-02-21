<template>
  <div class="home">
    <h3>Пропозиція тижня: -40% на е-книжки про бізнес і саморозвиток</h3>
    <div class="discont">
      <img src="../../assets/image/discont.png" alt="">
      <Timer/>
    </div>

    <carusel
        @next="next"
        @prev="prev"
    >
      <carusel-slide v-for="(slide, index) in slides"
                     :key="slide"
                     :idex="index"
                     :visibleSlide="visibleSlide"
                     :direction="direction"
      >
        <img :src="slide" alt=""/>
      </carusel-slide>

    </carusel>
    <div class="widget">
      <div>
        <img src="../../assets/image/home/1.png" alt="">
        <div>
          <h5>Знижки до Дня книгодарування</h5>
          <p>
            Знижки до -60% для закоханих у книжки до Дня книгодарування
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/2.png" alt="">
        <div>
          <h5>Найкращі книжки 2020 року!</h5>
          <p>
            Що читали українці у 2020 році? Найпопулярніші книжки минулого року
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/3.png" alt="">
        <div>
          <h5>Е-видавництво тижня! </h5>
          <p>
            -75% на «Мультимедійне видавництво Стрельбицького» Купуйте акційні електронні книжки зі знижкою до -75%! до кінця акції 6 дні 08 години 52 хв

          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/4.png" alt="">
        <div>
          <h5>Читайте сучасників разом із дітьми</h5>
          <p>
            Приєднується до проєкту "Живі письменники. Батькам" – спільного проєкту ГО "Смарт освіта" та ДУ "Український інститут книги", реалізованого у партнерстві з Фундацією Дарини Жолдак до кінця акції 20 дні 08 години 51 хв
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/5.png" alt="">
        <div>
          <h5>Книжки-переможці Нобелівської премії з літератури</h5>
          <p>
            Нобелівська премія в галузі літератури — найпрестижніша міжнародна літературна премія у світі. Створена разом з чотирма іншими Нобелівськими преміями за заповітом Альфреда Нобеля 1895 року, вручається з 1901 року.


          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/6.png" alt="">
        <div>
          <h5>Книжки-переможці Пулітцерівської премії</h5>
          <p>
            Пулітцерівська премія — одна з найпрестижніших нагород у галузі літератури, журналістики, музики і театру в США, заснована видавцем «жовтої преси» Джозефом Пулітцером. З 1917 року премія вручається щорічно в перший понеділок травня опікунами Колумбійського університету в Нью-Йорку. Розмір премії — 10 тисяч доларів. Із 2017 року розмір премії зріс до 15 тисяч доларів.

          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/7.png" alt="">
        <div>
          <h5>Книжки-переможці Букерівської премії</h5>
          <p>
            Букерівська премія — найпрестижніша літературна нагорода, що з 1969 року щорічно вручається у Великій Британії. Спочатку премія присуджувалася авторові, який проживає в одній з країн Співдружності або в Ірландії за роман, написаний англійською. З 2014 року можна висувати англомовних авторів і з інших країн світу.
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/image/home/8.png" alt="">
        <div>
          <h5>Зимовий розпродаж від #книголав</h5>
          <p>
            Купуйте акційні книжки від видавництва #книголав зі знижками до -65%!
          </p>
        </div>
      </div>

    </div>
    <Footer/>
  </div>

</template>

<script>

import Timer from "./Timer";
import Carusel from "./Carusel";
import CaruselSlide from "./CaruselSlide";



export default {
  name: "Home",
  data() {
    return {
      slides: [
        'https://img.yakaboo.ua/media/easyslide/2_161220_830_299_1_.png',
        'https://img.yakaboo.ua/media/easyslide/830_299_1_skarb_4221.png',
        'https://img.yakaboo.ua/media/easyslide/1_830_299_1_161220.png',
        'https://img.yakaboo.ua/media/easyslide/830_299_2_812021.png'
      ],

      visibleSlide: 0,
      direction: 'left'
    }
  },
  computed:{
    slidesLen(){
      return this.slides.length;
    }
  },
  methods:{
    next(){
      if(this.visibleSlide >= this.slidesLen -1){
        this.visibleSlide = 0
      } else{
        this.visibleSlide ++
      }
      this.direction='left'
    },
    prev(){
      if(this.visibleSlide <= 0){
        this.visibleSlide = this.slidesLen -1
      } else{
        this.visibleSlide --
      }
      this.direction='right'
    }
  },
  components:{Timer, Carusel, CaruselSlide}
}

</script>

<style scoped>
.home{
  display: grid;
  padding: 20px;

}
.discont{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
.widget{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>