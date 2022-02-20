<template>
  <div class="main">
    <v-list class="item" density="compact">
      <draggable v-model="items" v-bind="draggableOptions" item-key="name">
        <template #item="{ element }">
          <div @dragstart="dragStart">
            <item v-bind="element" @delete="deleteItem(element.name)" />
          </div>
        </template>
      </draggable>
    </v-list>
  </div>
  <div ref="ghost" />
</template>

<script>
import Item from './item.vue'
import Draggable from 'vuedraggable'

export default {
  name: 'main',
  components: {
    Item,
    Draggable,
  },
  data() {
    return {
      value: '',
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
  computed: {
    draggableOptions() {
      return {
        animation: 200,
        ghostClass: 'dragging',
      }
    },
  },
  mounted() {
    this.$listenIpc('main', 'commandline', this.set)
  },
  methods: {
    deleteItem(name) {
      const index = this.items.findIndex((item) => item.name === name)
      if (index === -1) {
        return
      }
      this.items.splice(index, 1)
    },
    dragStart(e) {
      e.dataTransfer.setDragImage(this.$refs.ghost, 0, 0)
    },
    set(obj) {
      if (!obj.name) {
        return
      }
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
  .dragging {
    opacity: 0.6;
  }
}
</style>

<style lang="scss"></style>
