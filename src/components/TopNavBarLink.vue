<template>
    <div>
        <router-link to='src'>{{ text }}</router-link>
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


</style>
