import { createStore } from 'vuex'
import { groupById } from '../utils/generalFunctionality/functions'
import { addProductToCart, removeProductFromCart } from './mutationTypes'

export const store = createStore({
  state() {
    return {
      products: []
    }
  },
  getters: {
    categorizedProducts(state) {
      return groupById("model", state.products)
    },
    allProducts(state) {
      return state.products
    }
  },
  mutations: {
    [addProductToCart] (state, newProduct) {
      state.products.push(newProduct)
    },
    [removeProductFromCart] (state, index) {
      state.products.splice(index, 1)
    }
  }
})
