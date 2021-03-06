<template>
  <div class="search">
    <div>

        <i
            class="material-icons"
            @click="search(searchValue)"
        >
          search
        </i>

    </div>
    <div class="find-input">
      <input
          v-model="searchValue"
          type="text"
          placeholder="Пошук книг..."
      >
    </div>
    <div>
      <i
          class="material-icons"
          @click="clearSearchField"
      >
        cancel
      </i>
    </div>
  </div>


</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      searchValue: ''
    }
  },
  computed:{
    ...mapGetters(['SEARCH_VALUE'])
  },
  methods:{
    ...mapActions(['GET_SEARCH_VALUE']),
    search(value){
      this.GET_SEARCH_VALUE(value);
      if(this.$route.path !== '/books'){
        this.$router.push('/books');
      }


    },
    clearSearchField(){
      this.searchValue = '';
      this.GET_SEARCH_VALUE()
      if(this.$route.path !== '/books'){
        this.$router.push('/books');
      }
    }

  }
}
</script>

<style scoped>
.search {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-column-gap: 10px;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 200px;
  right: 0;
  bottom: 0;
  height: 10px;
  width: 300px;
}

.search .find-input  input{
  color: black;
  height: 30px;
  background-color: white;
  border: 1px solid white;
}

</style>