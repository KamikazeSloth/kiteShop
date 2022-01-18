<template>
    <div class="link">
        <router-link :to="{ path: src }">{{ text }}</router-link>
    </div>
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
}

</style>
