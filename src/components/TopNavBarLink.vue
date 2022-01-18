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

<style scoped>

.link {
  text-transform: uppercase;
  padding: 16px;
}

.link:hover {
  background-color: blue
}

</style>
