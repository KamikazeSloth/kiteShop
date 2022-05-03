

<template>
  <div class="container">
    <button class="icon" @click="showCart">
      <img src="../icons/cart.svg" alt="cart" />
      <div class="cartNumberContainer">
        <span class="cartNumber label" v-if="this.products > 0">
          {{ this.products }}
        </span>
      </div>
    </button>
    <Modal @clicked="onClickChild" :isActive="this.modalIsActive">
      <h1 class="heading">Din varukorg</h1>
      <CartItem
        v-for="(productName, index) in Object.keys(categorizedProducts)"
        :key="index"
        :index="index"
        :categorizedProducts="categorizedProducts"
        :product="productName"
        :amountPerProduct="categorizedProducts[productName].length"
      />
      <div class="" v-if="this.products === 0">
        Din varukorg är tom
      </div>
      <div class="buttonContainer">
        <Button
          :isDisabled="!this.checkoutIsEnabled"
          :onClick="closeCart"
          class="buttonBuy"
          text="till kassan"
        />
      </div>
    </Modal>
  </div>
</template>

<script>
import { store } from "../store/store";
import Modal from "./Modal.vue";
import CartItem from "./CartItem.vue";
import Button from "./Button.vue";

export default {
  components: {
    Modal,
    CartItem,
    Button,
  },
  name: "Cart",
  props: {},
  data: function () {
    return {
      modalIsActive: false,
      testData: 0,
      checkoutIsEnabled: false,
    };
  },
  methods: {
    showCart: function () {
      this.modalIsActive = !this.modalIsActive;
    },
    closeCart: function () {
      this.modalIsActive = false;
      this.$router.push("/kassa");
    },
    checkoutCart: function () {

    },
    onClickChild(value) {
      this.modalIsActive = value;
    }
  },
  computed: {
    products() {
      return store.getters.allProducts;
    },
    categorizedProducts() {
      return store.getters.categorizedProducts
    }
  },
  watch: {
    products: {
      handler() {
        if (this.products.length > 0) {
          this.checkoutIsEnabled = true;
        } else {
          this.checkoutIsEnabled = false;
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">

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
  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0 0 0;
  color: black;
  background-color: $blue7;
  border-radius: 50%;
}

.cartNumberContainer {
  background-color: transparent;
  height: 14px;
  width: 14px;
}

.buttonContainer {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
