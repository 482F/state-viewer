<template>
  <v-list-item link class="f-item">
    <v-list-item-avatar left>
      <v-icon :icon="icon" />
    </v-list-item-avatar>
    <v-list-item-header>
      <v-list-item-title v-text="name" />
      <v-list-item-subtitle v-text="body" />
    </v-list-item-header>
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
  },
}
</script>

<style lang="scss" scoped>
.f-item {
  padding: 4px 8px !important;
  user-select: none;
  .v-list-item-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 8px;
  }
}
</style>
