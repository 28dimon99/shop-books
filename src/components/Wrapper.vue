<template>
  <div class="wrap">
    <div id="pageHeader">
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

          <div>
            <Header/>
          </div>
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
    </div>

 <div id="pageContent">
   <div class="content">
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
   </div>
 </div>


<div id="pageFooter">
  <div class="footer" >
    <Footer/>
  </div>
</div>


  </div>

</template>

<script>

import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Header from "@/components/Header/Header";



export default {
  name: "Wrapper",
  methods: {},


  components: {
    Footer, Home, Header
  }
}
</script>

<style scoped>

.wrap {
  display: grid;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
}
#pageHeader {
  grid-area: header;
  position: fixed;
  z-index: 10;
  width: 100%;

}
#pageContent {
  grid-area: content;
}
#pageFooter {
  grid-area: footer;
}

.nav-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items:stretch;
  padding: 5px;
  list-style: none;
  background-color: #43a047;
  cursor: pointer;

}
.nav-wrapper :hover{

}
.brand-logo{
  padding-left: 40px;
}





</style>