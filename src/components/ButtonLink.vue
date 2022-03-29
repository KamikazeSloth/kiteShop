

<template>
  <router-link
    :class="styleType"
    :to="{ path: href }"
  >
    <span @click="onClick" @keypress.enter="onClick" role="link">
      <slot />
    </span>
  </router-link>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    href: String,
    styleType: String,
    onClick: { type: Function },
  },
};
</script>

