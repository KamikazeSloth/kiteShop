

<template>
  <div class="container">
    <button class="icon" @click="showCart">
      <img src="../icons/cart.svg" alt="cart" />
      <div class="cartNumber">
        <span v-if="this.products.length > 0">{{ this.products.length }}</span>
      </div>
    </button>
    <Modal @clicked="onClickChild" :isActive="this.modalIsActive">
      <h1 class="heading">Din varukorg</h1>
      <CartItem
        v-for="(product, index) in products"
        :key="index"
        :index="index"
        :product="product"
      />
      <div v-if="this.products.length === 0">Din varukorg är tom</div>
    </Modal>
  </div>
</template>

<script>
import { store } from "../store/store";
import Modal from "./Modal.vue";
import CartItem from "./CartItem.vue";

export default {
  components: {
    Modal,
    CartItem,
  },
  name: "Cart",
  props: {},
  data: function () {
    return {
      modalIsActive: false,
    };
  },
  methods: {
    showCart: function () {
      this.modalIsActive = !this.modalIsActive;
    },
    onClickChild(value) {
      this.modalIsActive = value;
    },
  },
  computed: {
    products() {
      return store.state.products;
    },
  },
};
</script>

<style scoped>
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  padding: 16px;
}

.icon:hover {
  cursor: pointer;
}

.cartNumber {
  height: 14px;
}

</style>
