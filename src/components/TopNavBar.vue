<template>
    <div class="barContainer">
        <TopNavBarLink src='/' text='Home' />
        <TopNavBarLink src='contact' text='Kontakta oss' />
        <TopNavBarLink src='kites' text='Kites' />
    </div>
</template>

<script>
import TopNavBarLink from './TopNavBarLink.vue'

export default {
  name: 'TopNavBar',
  components: {
    TopNavBarLink
  }
}
</script>

<style scoped>

.barContainer {
  display: flex;
  flex-direction: row;
}


</style>
