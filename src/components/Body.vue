<template>
    <div class="body">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'Body',
  props: {
  }
}
</script>

<style scoped>

.body {
    padding: 16px;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

</style>
