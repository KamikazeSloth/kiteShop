

<template>
  <button :disabled="isDisabled" @click="onClick" :class="{ isDisabled: isDisabled }">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    onClick: { type: Function },
    isDisabled: Boolean
  },
};
</script>

<style scoped lang="scss">
</style>
