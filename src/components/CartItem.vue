

<template>
  <div class="container label" v-if="amountPerProduct !== 0">
    <div class="productInfoContainer">
      <span class="productName">{{ product }}</span>
      <span class="paragraph">{{ amountPerProduct }}X</span>
    </div>
    <button @click="removeFromCart" class="buttonContainer">
      <img src="../icons/trash.svg" alt="trashcan" />
    </button>
  </div>
</template>

<script>
import { removeProductFromCart } from "../store/mutationTypes";
import { store } from "../store/store";

export default {
  name: "CartItem",
  props: {
    product: Object,
    index: Number,
    amountPerProduct: Number,
    categorizedProducts: Object
  },
  methods: {
    removeFromCart: function () {
        store.commit(removeProductFromCart, this.product)
    }
  }
}
</script>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.productInfoContainer {
  display: flex;
  flex-direction: row;
}

.productName {
  padding: 0 8px 0 0;
}

.buttonContainer {
    border: none;
    background-color: transparent;
}

.buttonContainer:hover {
    cursor: pointer;
}

</style>
