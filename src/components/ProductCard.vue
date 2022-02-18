

<template>
  <div class="card">
    <div>{{ name }}</div>
    <div>{{ brand }}</div>
    <div>{{ count }}</div>
    <Button @click="asd" text="beställ" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import { store } from "../store/store"

export default {
  components: { Button },
  name: "ProductCard",
  props: {
    name: String,
    brand: String,
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    asd: function () {
      console.log("asd");
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 258px;
  justify-content: space-evenly;
  border-radius: 8px;
}
</style>
