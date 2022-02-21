<template>
  <div class="barContainer">
    <div>
      <TopNavBarLink src="/" text="Home" />
      <TopNavBarLink src="contact" text="Kontakta oss" />
      <TopNavBarLink src="kites" text="Kites" />
    </div>
    <div>cart</div>
  </div>
</template>

<script>
import TopNavBarLink from "./TopNavBarLink.vue";

export default {
  name: "TopNavBar",
  components: {
    TopNavBarLink,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/css/theme.scss";

.barContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: $blue1;

  width: calc(100vw + 32px);
  margin-left: -16px;
}
</style>
