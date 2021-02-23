<template>
<div class="main-carusel">
    <div class="carousel" @keydown="checkSlide($event)" tabindex="0">
        <button @click.prevent="next" class="btn btn-next"><i class="material-icons chevron_left">chevron_left</i></button>
        <slot>
        </slot>
        <button @click.prevent="prev" class="btn btn-prev"><i class="material-icons chevron_right">chevron_right</i></button>
    </div>
    <div class="sidebar">
      <p>
        Найкращий подарунок – це можливість вибору. Довірте вибір одержувачу подарунка. Подарунковий сертифікат Yakaboo.ua у вигляді пластикової карти або електронного сертифікату — це попередній платіж, який дає можливість купувати будь-які товари магазину, на суму еквівалентну його номіналу. Переваги купівлі сертифікатів у нашому магазині Yakaboo.ua — найбільший в Україні книжковий інтернет-магазин, який налічує понад 300 000 книг 71 мовою, включаючи найостанніші новинки і світові бестселери. Книги також доступні в електронному та аудіо форматах. Каталог товарів оновлюється щодня.
        Ексклюзивне дизайнерське рішення Для корпоративних клієнтів ми пропонуємо спеціальні умови співпраці. Ми можемо розробити унікальні сертифікати, які будуть містити вашу корпоративну стилістику і будь-який бажаний номінал.
      </p>
    </div>

</div>


</template>
<script>
    export default {
        data () {
            return {
                index : 0,
                slides : [],
                slideDirection: '',
            }
        },
        computed: {
            slidesLength() {
                return this.slides.length;
            }
        },
        mounted(){
            this.slides = this.$children;
            this.slides.map( (slide,index) => {
                slide.index = index;
            });
        },
        methods: {
            next(){
                this.index++;
                if(this.index >= this.slidesLength){
                    this.index = 0;
                }
                this.slideDirection = 'slide-right';
            },
            prev(){
                this.index--;
                if(this.index < 0){
                    this.index = this.slidesLength - 1;
                }
                this.slideDirection = 'slide-left';
            },
            checkSlide(event){
                if(event.keyCode === 39){
                    this.next();
                }else if (event.keyCode === 37){
                    this.prev();
                }else {
                    return;
                }
            },
        }
    }
</script>
<style scoped>
    .main-carusel{
      display: grid;
      grid-template-columns: 6fr 3fr;
      justify-items:stretch;
      margin-bottom: 30px;
    }

    .carousel{
      display: grid;
        width: 830px;
        height: 299px;


    }

  .btn{
      width: 10px;
      height: 30px;
  }
    .btn-next{
        position: absolute;
        margin-top: 130px;
        color: white;
        background-color: #64b5f6 ;
        opacity: 0.3;


    }
    .btn-prev{
        position: absolute;
        margin-top: 130px;
        margin-left: 798px;
        background-color: #64b5f6 ;
        opacity: 0.3;
    }

    .chevron_left{
        position: absolute;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
    }
    .chevron_right{
        position: absolute;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
    }

</style>