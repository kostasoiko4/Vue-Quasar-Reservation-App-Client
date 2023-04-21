<template>
  <div class="q-pa-md bg-primary text-black" align="center">
      <q-page>
        <q-list align="center" style="max-width: 600px">

        <img src="~assets/Coffee-logo.png" height="350" width="350">
        
        <!-- Search Bar -->
        <q-input rounded outlined padding="lg" color="primary" bg-color="white" v-model="text" label="Search" @keydown.enter="showLoading">
          <template v-slot:prepend>
            <q-btn round dense flat icon="search" @click="showLoading"/>
          </template>

          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <!-- Log In Button -->
        <q-item>
            <q-item-section>
                <q-btn v-ripple elevated rounded size="lg" color="grey-10" label="Log In" to="/LogIn"/>
            </q-item-section>
        </q-item>

        <!-- Sign In Button -->
        <q-item>
            <q-item-section>
                <q-btn v-ripple elevated rounded size="lg" color="grey-10" label="Sign In" to="/SignIn"/>
            </q-item-section>
        </q-item>

        <!-- Continue Button -->
        <q-item>
            <q-item-section>
                <q-btn v-ripple elevated rounded size="lg" color="grey-10" label="Continue" to="/"/>
            </q-item-section>
        </q-item>
        </q-list>
      </q-page>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data () {
    return {
        text: ''
    }
  }
}
</script>