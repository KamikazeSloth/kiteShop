

<template>
  <div v-if="this.modalIsActive" class="overlay">
    <div class="container">
      <div class="buttonContainer">
        <button @click="closeModal" class="closeButton">X</button>
      </div>
      <slot />
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import { store } from "../store/store";

export default {
  name: "Modal",
  props: {
    isActive: Boolean,
  },
  methods: {
    closeModal: function () {
      this.modalIsActive = false;
      this.$emit("clicked", false);
    },
  },
  data: function () {
    return {
      modalIsActive: false,
    };
  },
  watch: {
    isActive: function () {
      if (this.isActive) {
        this.modalIsActive = this.isActive;
      }
    },
  },
  computed: {
    products() {
      return store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/css/theme.scss";

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
  background-color: rgba(42, 42, 46, 0.774);
  left: 0;
  top: 0;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  width: 400px;
  height: 800px;
}

.buttonContainer {
  display: flex;
  justify-content: flex-end;
  height: 32px;
}

.closeButton {
  background-color: transparent;
  font-family: $fontMedium;
  border: none;
  width: 25px;
  height: 25px;
}

.closeButton:hover {
  cursor: pointer;
}
</style>
