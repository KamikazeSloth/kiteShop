<template>
    <div class="universalPadding">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'UniversalPadding',
  props: {
  }
}
</script>

<style scoped>

.universalPadding {
    max-width: 1440px;
    min-width: 1440px;
    margin: 0 auto;
}

</style>
