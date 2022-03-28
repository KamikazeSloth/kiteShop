<template>
  <div class="barContainer">
    <div class="linksContainer">
      <TopNavBarLink src="/" text="Home" />
      <TopNavBarLink src="contact" text="Kontakta oss" />
      <TopNavBarLink src="kites" text="Kites" />
    </div>
    <div class="cartContainer">
      <Cart />
    </div>
  </div>
</template>

<script>
import Cart from './Cart.vue';
import TopNavBarLink from "./TopNavBarLink.vue";

export default {
  name: "TopNavBar",
  components: {
    TopNavBarLink,
    Cart
  },
    Cart
};
</script>

<style scoped lang="scss">
@import "../styles/css/theme.scss";

.barContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: $blue1;
  margin-left: -16px;
}

.linksContainer {

}

.cartContainer {

}

</style>
