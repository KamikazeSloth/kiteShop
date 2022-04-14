<template>
  <div>
      formuläret
      <InputField :maxLength="50" :minLength="2" :validation="regex.regex.firstName" labelText="Förnamn" id="firstName" />
      <InputField :maxLength="50" :minLength="2" :validation="regex.regex.lastName" labelText="Efternamn" id="lastName" />
      <InputField :maxLength="50" :minLength="2" :validation="regex.regex.email" labelText="E-mail" id="eMail" />
      <InputField :maxLength="8" :minLength="8" :validation="regex.regex.phone" labelText="Telefonnummer" id="phonenumber" />

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
import regex from "../utils/regex/regex.js"

export default {
  setup() {
    return { regex }
  },
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
