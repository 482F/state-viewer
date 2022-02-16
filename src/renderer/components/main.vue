<template>
  <div class="main">abc</div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {}
  },
  props: {
    titleLeft: {
      type: String,
      default: 'Left',
    },
    titleRight: {
      type: String,
      default: 'Right',
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.main {
  --background-color: #ffffff;
  background-color: var(--background-color);
  height: 100%;
  width: 100%;
}
</style>
