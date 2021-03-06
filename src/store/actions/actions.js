export default {
    GET_SEARCH_VALUE({commit}, value){
        commit('SET_SEARCH_VALUE', value)
    },

    ADD_TO_CART({commit}, book){
        commit('SET_BOOKS_TO_CART', book)
    },

    DELETE_FROM_CART({commit},index){
        commit('REMOVE_FROM_CART', index)
    },

    INCREMENT_CART_ITEM({commit}, index){
        commit('INCREMENT', index)
    },

    DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT', index)
    }

}