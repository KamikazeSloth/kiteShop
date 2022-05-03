import { createStore } from 'vuex'
import { groupById } from '../utils/generalFunctionality/functions'
import { addProductToCart, removeProductFromCart } from './mutationTypes'

export const store = createStore({
  state() {
    return {
      products: [],
      categorizedProducts: [],
      numberOfProducts: 0
    }
  },
  getters: {
    categorizedProducts(state) {
      state.categorizedProducts = state.products
      state.categorizedProducts = groupById("model", state.categorizedProducts)
      return state.categorizedProducts
    },
    allProducts(state) {
      state.numberOfProducts = 0

      Object.keys(state.categorizedProducts).forEach(function(key) {
        state.numberOfProducts += state.categorizedProducts[key].length 
      })
      return state.numberOfProducts
    }
  },
  mutations: {
    [addProductToCart] (state, newProduct) {
      state.products.push(newProduct)
    },
    [removeProductFromCart] (state, index) {
      state.categorizedProducts[index].pop()
    }
  }
})
