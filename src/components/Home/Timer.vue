<template>
  <div class="timer-main">
      <div class="days-stock">
        <h4>До кінця Акції</h4>
    </div>
    <div class="timer">

      <div class="days  time">
        {{displayDay}}
        <div class="text-days">Днів</div>
      </div>

      <div >
        <span class="leading-snug">:</span>
      </div>

      <div class="hours time">
        {{displayHours}}
        <div class="text-hours">Годин</div>
      </div>

      <div>
        <span class="leading-snug">:</span>
      </div>

      <div class="minutes time">
        {{displayMinutes}}
        <div class="text-minutes">Хвилин</div>
      </div>

      <div>
        <span class="leading-snug">:</span>
      </div>

      <div class="seconds time">
        {{displaySeconds}}
        <div class="label text-seconds">Секунд</div>
      </div>

    </div>
  </div>



</template>

<script>
    export default {
        name: "Timer",
        props:['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
        mounted(){
            this.showRemaining()
        },
        data() {
            return {
                displayDay: 0,
                displayHours: 0,
                displayMinutes: 0,
                displaySeconds: 0,
                loaded: false,
                expired: false
            }
        },
        computed:{
            _seconds:() => 1000,
            _minutes(){
                return this._seconds *60
             },
            _hours(){
                return this._minutes * 60
            },
            _days(){
                return this._hours * 24
            },

        },
        methods:{
            formatNum(num){
              return num < 10 ? '0' + num : num
            },
            showRemaining(){
                const timer = setInterval(()=>{
                   const now = new Date();
                  const end = new Date(2021, 4, 22, 10, 10, 10, 10)
                   const distance = end.getTime() - now.getTime();

                   if(distance < 0 ){
                       clearInterval(timer)
                       return
                   }
                   const days = Math.floor((distance / this._days));
                   const hours = Math.floor((distance % this._days) / this._hours );
                   const minutes = Math.floor((distance % this._hours) / this._minutes );
                   const seconds = Math.floor((distance % this._minutes) / this._seconds );


                   this.displaySeconds = this.formatNum(seconds);
                    this.displayMinutes = this.formatNum(minutes);
                   this.displayHours = this.formatNum(hours);
                   this.displayDay = this.formatNum(days);



                }, 1000)
            }
        }

    }
</script>

<style scoped>
    .timer-main{
      display: grid;
      justify-items: center;
      border: 2px solid black;
      margin-bottom: 20px;
      background-color:#2c3e50;
      color: white;
    }
    .timer{
        display: grid;
        width: 450px;
        height: 180px;
        grid-template-columns: repeat(7, 1fr);
        justify-items: center;
    }
    .time{
        width: 120px;
        height: 100px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        border-radius: 15px;
        border: 2px solid black;
        color:white;
        background-color: rgba(0,0,0,0.87);

    }
    .leading-snug{
        font-size: 50px;
    }
    .days-stock{
      display: grid;
      padding: 3px;
      grid-auto-columns: 1fr;




    }


</style>