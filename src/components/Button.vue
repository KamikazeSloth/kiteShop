

<template>
  <button @click="onClick" :class="styleType">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    styleType: String,
    onClick: { type: Function },
  },
};
</script>

<style scoped lang="scss">
</style>
