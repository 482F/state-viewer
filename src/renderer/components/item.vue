<template>
  <v-list-item
    class="f-item"
    :style="{ '--background-color': backgroundColor }"
    :color="color"
    link
  >
    <v-list-item-avatar left>
      <v-icon :icon="icon" />
    </v-list-item-avatar>
    <v-list-item-header>
      <v-list-item-title v-text="name" />
      <v-list-item-subtitle v-text="body" />
    </v-list-item-header>
    <v-icon color="black" @click="$emit('delete')">mdi-close</v-icon>
  </v-list-item>
</template>

<script>
export default {
  name: 'item',
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'black',
    },
    backgroundColor: {
      type: String,
      default: '#ffffff00',
    },
  },
}
</script>

<style lang="scss" scoped>
.f-item {
  --background-color: #ffffff00;
  background-color: var(--background-color);
  padding: 4px 8px !important;
  user-select: none;
  border-radius: 0;
  .v-list-item-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 8px;
    flex-shrink: 0;
  }
  :deep(.v-list-item-header) {
    > .v-list-item-title {
      white-space: unset;
    }
    > .v-list-item-subtitle {
      overflow-wrap: anywhere;
    }
  }
}
</style>
