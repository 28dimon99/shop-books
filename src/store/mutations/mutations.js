export default {
    SWITCH_MOBILE:(state)=>{
        state.isMobile = true;
        state.isDesktop = false;
    },
    SWITCH_DESKTOP:(state)=>{
        state.isMobile = false;
        state.isDesktop = true;
    },
    SET_BOOKS_TO_STATE: (state, books) => {
        state.books = books
    },
    SET_BOOKS_TO_CART: (state, book) => {
        if (state.cart.length) {
            let isBookExist = false;
            state.cart.map(function (item) {
                if (item.id === book.id) {
                    isBookExist = true;
                    item.quantity++
                }
            });
            if (!isBookExist) {
                state.cart.push(book)
            }
        } else {
            state.cart.push(book)
        }

    },
        REMOVE_FROM_CART:(state, index) => {
            state.cart.splice(index, 1)
        },
            INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
            DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }

}