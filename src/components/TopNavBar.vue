<template>
    <div>
        <TopNavBarLink src='hit' text='första länken'>
        </TopNavBarLink>
        
        <TopNavBarLink src='dit' text='andra länken'>
        </TopNavBarLink>
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


</style>
