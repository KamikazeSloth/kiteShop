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
@font-face {
  font-family: "RobotoBold";
    src: url('~@/styles/fonts/Roboto-Bold.ttf');
}
@font-face {
  font-family: "RobotoMedium";
    src: url('~@/styles/fonts/Roboto-Medium.ttf');
}
@font-face {
  font-family: "RobotoRegular";
    src: url('~@/styles/fonts/Roboto-Regular.ttf');
}
@font-face {
  font-family: "RobotoThin";
    src: url('~@/styles/fonts/Roboto-Thin.ttf');
}
</style>
