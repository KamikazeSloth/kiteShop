import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      products: []
    }
  },
  mutations: {
    addProductToCart (state, newProduct) {
      state.products.push(newProduct)
    },
    removeProductFromCart (state, index) {
      state.products.splice(index, 1)
    }
  }
})
