

<template>
    <button @click="onClick" class="buttonBuy">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    onClick: { type: Function }
  },
};
</script>

<style scoped lang="scss">

@import "../styles/css/theme.scss";
@import "../styles/css/buttons.scss";

</style>
