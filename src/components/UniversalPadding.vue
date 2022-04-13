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

<style lang="scss" scoped>

.universalPadding {
    max-width: 1440px;
    
    @include mediaQueryDesktop {
        margin: 0 128px;
    }
}

</style>
