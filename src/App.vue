<template>
  <div id="app">
      <Wrapper/>
  </div>
</template>
<script>

import Wrapper from "./components/Wrapper";


export default {
  name:'app',
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
