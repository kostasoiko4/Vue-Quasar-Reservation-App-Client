<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-page>

        <q-toolbar style="top: 0; right: 10px; transform: translateY(-10%);">
          <!-- Back Button -->
          <q-btn round dense flat to="/" icon="keyboard_arrow_left"/>

          <!-- My Account Label -->
          <q-item-label header class="text-h6 text-white">My Account</q-item-label>
        </q-toolbar>

        <q-list dark style="max-width: 600px">

          <!-- First Name Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="firstName"
                  ref="firstName"
                  label="First Name"
                  @keydown.enter="showLoading"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="firstName !== ''" name="close" @click="firstName = ''" class="cursor-pointer" />
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
                  v-model="lastName"
                  ref="lastName"
                  label="Last Name"
                  @keydown.enter="showLoading"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="lastName !== ''" name="close" @click="lastName = ''" class="cursor-pointer" />
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
                  v-model="phone"
                  ref="phone"
                  mask="##########"
                  label="Phone Number"
                  @keydown.enter="showLoading"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Required Filled',
                    val => val.length >= 10 || 'Enter 10 Digit Phone Number'
                    ]"
                  >
                    <template v-slot:append>
                        <q-icon v-if="phone !== ''" name="close" @click="phone = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <!-- E-mail Box -->
          <q-item>
              <q-item-section>
                  <q-input
                  dark
                  color="primary"
                  v-model="email"
                  ref="email"
                  label="E-mail"
                  @keydown.enter="showLoading"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required Filled']"
                  >
                    <template v-slot:append>
                        <q-icon v-if="email !== ''" name="close" @click="email = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </q-item-section>
          </q-item>

          <!-- Change Password Dropdown -->
          <q-expansion-item
          expand-separator
          color="lightgrey"
          icon="vpn_key"
          label="Change Password"
          >
            <q-card dark>
              <q-card-section>

                <!-- Password Box -->
                <q-item>
                  <q-item-section>
                    <q-input
                    dark
                    color="primary"
                    v-model="pass"
                    ref="pass"
                    label="Password"
                    :type="isPwd ? 'password' : 'pass'"
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

                <!-- New Password Box -->
                <q-item>
                  <q-item-section>
                    <q-input
                    dark
                    color="primary"
                    v-model="passNew"
                    ref="passNew"
                    label="New Password"
                    :type="isPwd ? 'password' : 'passNew'"
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
                      val => val == passNew || 'Incorect Password'
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

                <!-- Save Changes Button -->
                <q-item>
                  <q-item-section>
                    <q-btn 
                      v-ripple 
                      rounded 
                      filled 
                      dense 
                      type="submit" 
                      color="primary" 
                      label="Save Changes"
                    />
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator class="q-ma-md" dark/>

          <!-- Log Out -->
          <q-item clickable to="/" v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Log Out</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Account',

  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      pass: '',
      passNew: '',
      passCon: '',
      password: '',
      card: '',

      isPwd: true,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.pass.validate()
      this.$refs.passNew.validate()
      this.$refs.passCon.validate()

      if (this.$refs.pass.hasError ||
          this.$refs.passNew.hasError ||
          this.$refs.passCon.hasError) {
        this.formHasError = true
      } else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.pass = null
      this.passNew = null
      this.pasCon = null

      this.$refs.pass.resetValidation()
      this.$refs.passNew.resetValidation()
      this.$refs.passCon.resetValidation()
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

    runSearch () {
    },

    onItemClick () {
      // console.log('Clicked on an Item')
    }
  }
}
</script>
