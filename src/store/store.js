import Vue from 'vue'
import Vuex from 'vuex'
import books from "./module/books";
import * as axios from "axios";
import mutations from "@/store/mutations/mutations";
import actionsCommon from "@/store/actions/actions";
import actionsRequest from "@/store/actionsRequest/actionsRequest";
import getters from "@/store/getters/getters";


const actions = {...actionsCommon, ...actionsRequest}

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    books:[],
    cart:[]
  },
  mutations,
  actions,
  getters,

})
