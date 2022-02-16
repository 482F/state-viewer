<template>
  <div class="main">{{ value }}</div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      value: '',
    }
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
  mounted() {
    this.$listenIpc('main', 'commandline', (value) => this.value = value)
  },
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
