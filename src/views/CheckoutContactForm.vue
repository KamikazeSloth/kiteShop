<template>
  <div>
      formuläret
      <InputField :validation=/\d{8}/ labelText="Telefonnummer" id="phonenumber" />
  </div>
  <div>
    <h1>Här är dina valda produkter</h1>
    <div v-for="(product, index) in products" :key="index">
      <div>{{ product.brand }}</div>
      <div>{{ product.model }}</div>
      <div>{{ product.id }}</div>
    </div>
    <h2>genomför köp</h2>
    <ButtonLink styleType="buttonBuy" href="bekraftelse">Köp</ButtonLink>
  </div>
</template>

<script>
import ButtonLink from "../components/ButtonLink.vue";
import InputField from '../components/InputField.vue';
import { store } from "../store/store";

export default {
  components: { 
    ButtonLink,
    InputField
  },
  name: "CheckoutContactForm",
  computed: {
    products() {
      return store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
