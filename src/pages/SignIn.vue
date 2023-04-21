<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-page>
        <q-list dark style="max-width: 600px">

          <q-toolbar style="top: 0; right: 10px; transform: translateY(-10%);">
          <!-- Back Button -->
          <q-btn round dense flat to="/" icon="keyboard_arrow_left"/>

          <!-- Log In Label -->
          <q-item-label header class="text-h6 text-white">Sign In</q-item-label>
        </q-toolbar>

        <q-item-label header class="text-white">Personal Information</q-item-label>
        
          <!-- First Name Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="account.firstName"
                  ref="firstName"
                  label="First Name"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="account.firstName !== ''" name="close" @click="account.firstName = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <!-- Last Name Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="account.lastName"
                  ref="lastName"
                  label="Last Name"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="account.lastName !== ''" name="close" @click="account.lastName = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <!-- Phone Number Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="account.phone"
                  ref="phone"
                  mask="##########"
                  label="Phone Number"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Required Filled',
                    val => val.length >= 10 || 'Enter 10 Digit Phone Number'
                    ]"
                  >
                    <template v-slot:append>
                        <q-icon v-if="account.phone !== ''" name="close" @click="account.phone = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <q-item-label header color="white">Account Details</q-item-label>

          <!-- E-mail Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="account.email"
                  ref="email"
                  label="E-mail"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="account.email !== ''" name="close" @click="account.email = ''" class="cursor-pointer" />
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
                  :type="isPwd ? 'password' : 'account.pass'"
                  hint="At Least 8 Characters"
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

          <!-- Confirm Password Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="passCon"
                  ref="passCon"
                  label="Confirm Password" :type="isPwd ? 'password' : 'passCon'"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Required Filled',
                    val => val == account.pass || 'Incorect Password'
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

          <q-item-label header class="text-white">Payment Methods</q-item-label>

          <!-- Credti Card Box -->
          <q-item>
            <q-item-section>
              <q-input
               dark
               v-model="account.card"
               color="primary"
               label="Credit Card"
               mask="#### #### #### ####"
               fill-mask="*"
               hint="*Optional"
              >
                <template v-slot:append>
                  <q-icon v-if="account.card !== ''" name="close" @click="account.card = ''" class="cursor-pointer" />
                </template>
              </q-input>
            </q-item-section>
          </q-item>

          <!-- Accept License Button -->
          <q-toggle v-model="accept" ref="accept" label="I accept the license and terms" />

          <!-- Sign In Button -->
          <q-item>
            <q-item-section>
              <q-btn
               v-ripple
               filled
               dense
               rounded
               type="submit"
               color="primary"
               label="Sign In"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </form>
  </div>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'SignIn',

  data () {
    return {
      account: {
        id: uid(),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        pass: '',
        card: ''
      },

      passCon: '',
      password: '',

      isPwd: true,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.firstName.validate()
      this.$refs.lastName.validate()
      this.$refs.phone.validate()
      this.$refs.email.validate()
      this.$refs.pass.validate()
      this.$refs.passCon.validate()

      if (this.$refs.firstName.hasError ||
          this.$refs.lastName.hasError ||
          this.$refs.phone.hasError ||
          this.$refs.email.hasError ||
          this.$refs.pass.hasError ||
          this.$refs.passCon.hasError) {
        this.formHasError = true
      } else if (this.accept !== true) {
        this.$q.notify({
          color: 'negative',
          message: 'You need to accept the license and terms'
        })
      } else {
        this.addAccount()
      }
    },

    onReset () {
      this.firstName = null
      this.lastName = null
      this.phone = null
      this.email = null
      this.pass = null
      this.pasCon = null

      this.$refs.firstName.resetValidation()
      this.$refs.lastName.resetValidation()
      this.$refs.phone.resetValidation()
      this.$refs.email.resetValidation()
      this.$refs.pass.resetValidation()
      this.$refs.passCon.resetValidation()
    },

    addAccount () {
      this.$q.loading.show()

      let formData = new FormData()

      formData.append('id', this.account.id)
      formData.append('firstName', this.account.firstName)
      formData.append('lastName', this.account.lastName)
      formData.append('phone', this.account.phone)
      formData.append('email', this.account.email)
      formData.append('pass', this.account.pass)
      formData.append('card', this.account.card)

      // send formData to backend
      this.$axios.post(`${process.env.API}/createAccount`, formData).then(response => {
        console.log('response: ', response)
        this.$router.push('/')
        // creation notification
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Account Created!',
          actions: [
            { label: 'Dismiss', color: 'white' }
          ]
        })
        this.$q.loading.hide()
        // after account creation, go to index
        window.location = index.vue
      }).catch(err => {
        console.log('Account creation error: ', err)
        this.$q.dialog({
          title: 'Error',
          message: 'Could not create account!'
        })
        this.$q.loading.hide()
      })
    },

    runSearch () {
    },
  }
}
</script>
