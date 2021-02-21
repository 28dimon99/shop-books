<template>
  <div class="wrap">
    <nav>
      <div class="nav-wrapper">

        <router-link class="brand-logo"
                       tag="li"
                       to="/"
                       exact=""
                       active-class="active">
            <i
                class="material-icons">
              home
            </i>
          </router-link>
        <router-link class="brand-header"
                     tag="li"
                     to="/books"
                     exact=""
                     active-class="active">
       <h5>BOOKS</h5>
        </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        </ul>
      </div>
    </nav>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>


    <div class="footer">
      <Footer/>
    </div>

  </div>

</template>

<script>

import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";


export default {
  name: "Wrapper",
  methods: {},

  components: {
    Footer, Home
  }
}
</script>

<style scoped>

.wrap {
  display: grid;

}

.nav-wrapper{
  display: grid;
  grid-template-columns: 60fr 1fr;
  padding: 5px;
  list-style: none;
  background-color: #43a047;
}
.brand-logo{
  padding-left: 30px;
}



</style>