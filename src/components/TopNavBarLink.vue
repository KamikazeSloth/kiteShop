<template>
  <router-link class="link" :to="{ path: src }">{{ text }}</router-link>
</template>

<script>

export default {
  name: 'TopNavBarLink',
  props: {
    text: String,
    src: String
  }
}
</script>

<style scoped lang="scss">

.link {
  text-transform: uppercase;
  padding: 16px;
  text-decoration: none;
  font-family: $fontMedium;
  font-size: $font3;
  color: white;
}

.link:hover {
  background-color: rgba(0, 0, 70, 0.212)
}

</style>
