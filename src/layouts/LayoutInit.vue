<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutInit',
  data () {
    return {
      text: '',
    }
  },

  methods: {
    showLoading () {
      this.$q.loading.show({
        message: 'Some important <b>"process"</b> is in progress.<br/><span class="text-primary">Please Hang on...</span>'
      })

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 3000)
    },

    beforeDestroy () {
      if (this.timer !== void 0) {
        clearTimeout(this.timer)
        this.$q.loading.hide()
      }
    },

    runSearch () {
    },

    openURL
  }
}

</script>
