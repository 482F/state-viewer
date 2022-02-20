<template>
  <div class="main">
    <v-list density="compact">
      <item v-for="(item, i) in items" :key="i" v-bind="item" />
    </v-list>
  </div>
</template>

<script>
import Item from './item.vue'

export default {
  name: 'main',
  components: {
    Item,
  },
  data() {
    return {
      value: '',
      selectedItem: 1,
      items: [],
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
    this.$listenIpc('main', 'commandline', this.set)
  },
  methods: {
    set(obj) {
      const targetItem = this.items.find((item) => item.name === obj.name)
      if (!targetItem) {
        this.items.push(obj)
      }
      Object.assign(targetItem, obj)
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  --background-color: #ffffff;
  background-color: var(--background-color);
  min-height: 100%;
  min-width: 100%;
  > .v-list {
    padding: 0;
  }
}
</style>
