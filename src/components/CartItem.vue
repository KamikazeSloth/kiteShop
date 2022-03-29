

<template>
  <div class="container label">
    <div>
      {{ product.model }}
    </div>
    <button @click="removeFromCart" class="buttonContainer">
      <img src="../icons/trash.svg" alt="trashcan" />
    </button>
  </div>
</template>

<script>
import { store } from "../store/store";

export default {
  name: "CartItem",
  props: {
    product: Object,
    index: Number
  },
  methods: {
    removeFromCart: function () {
        store.commit('removeProductFromCart', this.index)
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

.buttonContainer {
    border: none;
    background-color: transparent;
}

.buttonContainer:hover {
    cursor: pointer;
}

</style>
