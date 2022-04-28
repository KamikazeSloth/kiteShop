<template>
    <footer class="footer">
        <div class="bar">
          <div>kontakta oss på nummer 123 123 123</div>
        </div>
    </footer>
</template>

<script>

export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style lang="scss" scoped>

  .footer {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .bar {
    height: 72px;
    background-color: $blue1;
    width: 100vw;
    margin-left: -16px;
    margin-top: 24px;
  }

</style>
