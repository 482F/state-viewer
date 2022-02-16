<template>
  <v-app>
    <v-main>
      <div class="main">
        <titlebar :title-left="titleLeft" :title-right="titleRight" />
        <div class="content">
          <component
            :is="components[name]"
            v-model:title-left="titleLeft"
            v-model:title-right="titleRight"
          />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Titlebar from './components/titlebar.vue'
import Main from './components/main.vue'
const components = {
  Main,
}

export default {
  name: 'App',

  components: {
    Titlebar,
  },

  data: () => ({
    titleLeft: 'state viewer',
    titleRight: '',
  }),
  computed: {
    components() {
      return components
    },
    name() {
      return location.href.match(/(?<=#).+?$/)[0]
    },
  },
}
</script>

<style lang="scss">
html {
  overflow: hidden !important;
  > body {
    background-color: #ffffff00;
    .v-application {
      background-color: #ffffff00;
      .v-main__wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .main {
          height: calc(100vh - 4px);
          width: calc(100vw - 4px);
          font-family: Cica;
          display: flex;
          flex-direction: column;
          .content {
            border-style: none solid solid;
            border-color: lightgray;
            border-width: 1px;
            flex-grow: 1;
            overflow: auto;
            &::-webkit-scrollbar-track {
              background-color: #eee;
            }
            &::-webkit-scrollbar {
              width: 10px;
              height: 10px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
