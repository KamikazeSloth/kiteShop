<template>
  <Body>
    <TopNavBar></TopNavBar>
    <router-view/>
  </Body>
</template>

<script>
  import TopNavBar from './components/TopNavBar.vue'
  import Body from './components/Body.vue'

  export default {
    components: {
      TopNavBar,
      Body
    }
  }
</script>

<style>

</style>
