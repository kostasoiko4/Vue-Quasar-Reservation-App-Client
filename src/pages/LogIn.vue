<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-page>

        <q-toolbar style="top: 0; right: 10px; transform: translateY(-10%);">
          <!-- Back Button -->
          <q-btn round dense flat to="/" icon="keyboard_arrow_left"/>

          <!-- Log In Label -->
          <q-item-label header class="text-h6 text-white">Log In</q-item-label>
        </q-toolbar>

        <q-list dark style="max-width: 600px">

          <!-- E-mail Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="account.email"
                  ref="email"
                  label="E-mail"
                  @keydown.enter="showLoading"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="account.email !== ''" name="close" @click="email = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <!-- Password Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="account.pass"
                  ref="pass"
                  label="Password"
                  :type="isPwd ? 'password' : 'pass'"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Required Filled',
                    val => val.length > 8 || 'At Least 8 Characters'
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <!-- Remember Me Check Box -->
          <q-item>
            <q-item-section>
              <q-item-label>Remember Me</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-checkbox v-model="remember" />
            </q-item-section>
          </q-item>

          <!-- Log In Button -->
          <q-item>
            <q-item-section>
              <q-btn 
                v-ripple 
                rounded 
                filled 
                dense 
                type="submit" 
                color="primary" 
                label="Log In"
              />
            </q-item-section>
          </q-item>

        </q-list>
      </q-page>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogIn',

  data () {
    return {
      account: {
        email: '',
        pass: '',
      },

      password: '',
      isPwd: true,
      remember: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.email.validate()
      this.$refs.pass.validate()

      if (this.$refs.email.hasError || this.$refs.pass.hasError) {
        this.formHasError = true
      } else {
        this.logIn()
      }
    },

    onReset () {
      this.email = null
      this.pass = null

      this.$refs.email.resetValidation()
      this.$refs.pass.resetValidation()
    },

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

    logIn () {
      this.$q.loading.show()

      let formData = new FormData()

      formData.append('email', this.account.email)
      formData.append('pass', this.account.pass)

      // send formData to backend
      this.$axios.post(`${process.env.API}/logIn`, formData).then(response => {
        console.log('response: ', response)
        this.$router.push('/')
        // creation notification
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Log In Successful!',
          actions: [
            { label: 'Dismiss', color: 'white' }
          ]
        })
        this.$q.loading.hide()
        // after account creation, go to index
        window.location = index.vue
      }).catch(err => {
        console.log('Account log in error: ', err)
        this.$q.dialog({
          title: 'Error',
          message: 'Could not log in to account!'
        })
        this.$q.loading.hide()
      })
    },

    runSearch () {
    }
  }
}
</script>
