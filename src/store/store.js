import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      products: []
    }
  },
  getters: {
    products(state) {
      return state.products
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
