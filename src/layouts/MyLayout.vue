<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

      <!-- Toolbar -->
      <q-toolbar class="bg-primary text-white">

        <!-- Drawer Button -->
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <!-- App Icon
        <q-avatar>
          <img src="~assets/Coffee-logo2.png">
        </q-avatar> -->

        <!-- App Title
        <q-toolbar-title >
          <q-list dark >
            <q-item-section>
              <q-item-label>CoffeeHack</q-item-label>
              <q-item-label caption>The Intelligent way of Drinking Coffee</q-item-label>
            </q-item-section>
          </q-list>
        </q-toolbar-title> -->

        <!-- Search Bar -->
        <q-input style="width: 550px" dark color="white" v-model="text" label="Search" @keydown.enter="showLoading">
          <template v-slot:prepend>
            <q-btn round dense flat icon="search" @click="showLoading"/>
          </template>

          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>

      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="q-pa-md bg-grey-10 text-white">

      <!-- Drawer Items -->
      <q-list dark separator style="max-width: 318px">

        <!-- Log In -->
        <q-item clickable tag="a" to="Login">
          <q-item-section avatar>
            <img alt="login logo" src="~assets/login2.png" width="20" height="20">
          </q-item-section>

          <q-item-section>
            <q-item-label>Log In</q-item-label>
            <q-item-label caption>Log In your Account</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Sign In -->
        <q-item clickable to="SignIn">
          <q-item-section avatar>
            <img alt="singin logo" src="~assets/singin2.png" width="25" height="25">
          </q-item-section>
          <q-item-section>
            <q-item-label>Sing In</q-item-label>
            <q-item-label caption>Create an Account</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Profile Label -->
        <q-item-label header>My Profile:</q-item-label>

        <!-- Account -->
        <q-item clickable to="Account">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Account</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Reservations -->
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="check" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Reservations</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Locations -->
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="place" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Locations</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Favorites -->
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Favorites</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Ratings -->
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Ratings</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Paymend Methods -->
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="euro_symbol" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Paymend Methods</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Contact Us Label -->
        <q-item-label header>Contact Us:</q-item-label>

        <!-- Instagram -->
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img alt="login logo" src="~assets/insta.png" width="25" height="25">
          </q-item-section>

          <q-item-section>
            <q-item-label>Instagram</q-item-label>
            <q-item-label caption>@CoffeeHack</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Facebook -->
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <img alt="login logo" src="~assets/facebook2.png" width="25" height="25">
          </q-item-section>

          <q-item-section>
            <q-item-label>Facebook</q-item-label>
              <q-item-label caption>@CoffeeHack</q-item-label>
            </q-item-section>
        </q-item>

        <!-- Twitter -->
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <img alt="login logo" src="~assets/twitter2.png" width="25" height="25">
          </q-item-section>

          <q-item-section>
            <q-item-label>Twitter</q-item-label>
              <q-item-label caption>@CoffeeHack</q-item-label>
            </q-item-section>
          </q-item>

        <!-- About Label -->
        <q-item-label header>About:</q-item-label>

        <!-- Language -->
        <q-expansion-item
        icon="language"
        label="Language">

            <q-item-section class="q-pa-md">
              <q-option-group
                v-model="group"
                :options="options"
                color="primary"
              />
            </q-item-section>

        </q-expansion-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { ref } from 'vue'

export default {
  name: 'MyLayout',
  
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      text: '',
      check1: false,
      check2: false,

      group: 'op1',

      options: [
        {
          label: 'English',
          value: 'op1'
        },
        {
          label: 'Greek',
          value: 'op2'
        }
      ]
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
