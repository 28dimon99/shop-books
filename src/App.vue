<template>
  <div id="app">
      <Wrapper/>
  </div>
</template>
<script>

import Wrapper from "./components/Wrapper";
import {mapActions, mapGetters} from 'vuex'


export default {
  name:'app',
  computed:{...mapGetters(['IS_MOBILE', 'IS_DESKTOP'])},

  methods:{...mapActions(['SET_MOBILE','SET_DESKTOP'])},

  mounted() {
    let vm = this;
    window.addEventListener('resize', function (){
      if(window.innerWidth > 768){
        vm.SET_DESKTOP()
        console.log('DESKTOP',vm.IS_DESKTOP)
      }else {
        vm.SET_MOBILE()
        console.log('MOBILE',vm.IS_MOBILE)
      }
    })
  },
  components:{
      Wrapper
  }
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
