<template>
  <div class="content">
    <router-link
        :to="{name:'Cart', params:{cart_data: CART}}"
    >
      <div class="books_link_cart">
        {{ CART.length }}
        <i
            class="material-icons">
          add_shopping_cart
        </i>
      </div>

    </router-link>
    <h1>КНИГИ</h1>
    <div class="filter">
      <SelectBooks
          :options="options"
          :selected="selected"
          @select="sortByBooks"
          :isExpanded = "IS_DESKTOP"
      />
      <div class="range-slider">
        <input
            type="range"
            step="10"
            min="0"
            max="1000"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            step="10"
            min="0"
            max="1000"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
        <div class="range-prices">
          <p>Min: {{minPrice}}</p>
          <p>Max: {{maxPrice}}</p>
        </div>

      </div>
    </div>


    <div class="books">
      <BooksItem
          v-for="book in filteredBooks"
          :key="book.id"
          :books_item="book"
          @addToCart="addToCart"
      />
    </div>

  </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";

import BooksItem from "./BooksItem";
import SelectBooks from "@/components/SelectBooks/SelectBooks";


export default {
  name: "Books",
  props: {
    books_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      options: [
        {name: 'Всі', value: 'ALL'},
        {name: 'Популярні', value: 'Popular'},
        {name: 'Новинки', value: 'News'}
      ],
      selected: 'Вибрать книги',
      sortedCategory: [],
      minPrice: 0,
      maxPrice: 1000


    }
  },

  computed: {
    ...mapGetters(['BOOKS', 'CART', 'IS_MOBILE', 'IS_DESKTOP']),

    filteredBooks() {
      if (this.sortedCategory.length) {
        return this.sortedCategory
      } else {
        return this.BOOKS
      }
    }

  },
  methods: {
    ...mapActions(["GET_BOOKS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      console.log(data)
      this.ADD_TO_CART(data)
    },
    sortByBooks(category) {
      let vm = this
      this.sortedCategory = [...this.BOOKS]
      this.sortedCategory = this.sortedCategory.filter(function (item){
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category){
        this.sortedCategory = this.sortedCategory.filter(function (i){
          vm.selected === category.name
          return i.category === category.name
        })
      }
    },
    setRangeSlider(){
      if(this.minPrice > this.maxPrice){
        let tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
      this.sortByBooks()
    }
  },
  components: {BooksItem, SelectBooks},
  mounted() {
    //вызов actions
    this.GET_BOOKS_FROM_API();

  }
};
</script>

<style scoped>
.content {
  display: grid;
  margin: 0 auto;
  background-color: cornsilk;
  padding: 20px 0 40px 0;
}

.books {
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 100px;

}

.books_link_cart {
  display: grid;
  color: white;
  list-style: none;
  width: 200px;
  position: absolute;
  top: 0;
  right: 0;

}
.filter{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.range-slider {
  display: grid;
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.range-prices{
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>