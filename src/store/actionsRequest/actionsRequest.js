import * as axios from "axios";

export default {
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
}