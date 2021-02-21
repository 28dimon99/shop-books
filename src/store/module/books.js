/*
import * as axios from "axios";
export default {
    state: {
        books:[],
        cart:[]
    },
    mutations: {
        SET_BOOKS_TO_STATE:(state, books) =>{
            state.books = books
        },
        SET_BOOKS_TO_CART:(state, book)=>{
            if(state.cart.length){
                let isBookExist = false;
                state.cart.map(function (item) {
                    if(item.id === book.id){
                        isBookExist = true;
                        item.quantity++
                    }
                });
                if(!isBookExist){
                    state.cart.push(book)
                }
            }else{
                state.cart.push(book)
            }

        },

        REMOVE_FROM_CART:(state, index)=>{
            state.cart.splice(index, 1)
        },
        INCREMENT:(state, index)=>{
          state.cart[index].quantity++
        },
        DECREMENT:(state, index)=>{
            if(state.cart[index].quantity > 1){
                state.cart[index].quantity--
            }
        }

    },
    actions: {
        GET_BOOKS_FROM_API({commit}){
            return axios(' http://localhost:3000/books',{
                method: "GET"
            })
                .then((books) =>{
                    commit('SET_BOOKS_TO_STATE', books.data);
                    return books;
                })
                .catch((error)=>{
                    console.log(error)
                    return error
                })
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


    },
    getters:{
        BOOKS(state) {
            return state.books
        },
        CART(state){
            return state.cart
        }


    }


}
*/
