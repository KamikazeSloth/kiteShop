<template>
  <div>
    <h1>Här är dina valda produkter</h1>
    <div v-for="(product, index) in products" :key="index">
      <div>{{ product.brand }}</div>
      <div>{{ product.model }}</div>
      <div>{{ product.id }}</div>
    </div>
    <h2>fortsätt till utcheckningen</h2>
    <ButtonLink styleType="buttonBuy" href="utcheckning">Till utcheckning</ButtonLink>
  </div>
</template>

<script>
import ButtonLink from "../components/ButtonLink.vue";
import { store } from "../store/store";

export default {
  components: { 
      ButtonLink
  },
  name: "Checkout",
  computed: {
    products() {
      return store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
