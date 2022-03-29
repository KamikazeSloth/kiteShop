

<template>
  <div class="card">
    <div class="label">{{ name }}</div>
    <div class="label">{{ brand }}</div>
    <Button styleType="buttonBuy" :onClick="onClick" text="beställ" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: { Button },
  name: "ProductCard",
  props: {
    name: String,
    brand: String,
    onClick: { type: Function }
  }
};
</script>

<style scoped lang="scss">

.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 258px;
  justify-content: space-evenly;
  border-radius: 8px;
  background-color: white;
}
</style>
