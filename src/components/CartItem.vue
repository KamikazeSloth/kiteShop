

<template>
  <div class="container">
    <div>
      {{ product }}
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
    product: String,
    index: Number
  },
  methods: {
    removeFromCart: function () {
        // console.log("called with: ", props)
        store.commit('removeProductFromCart', this.index)
    }
  }
}
</script>

<style scoped>
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
