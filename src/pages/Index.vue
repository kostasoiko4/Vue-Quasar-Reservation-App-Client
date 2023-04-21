<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-page>

    <!-- Loaded Shops -->
    <template v-if="!loadingShops && shops.length">
      <q-item>
        <q-item-section>
          <q-item-label header>Real Shops:</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator dark/>

      <!-- Shop List -->
      <q-list
        v-for="shop in shops"
        :key="shop.id"
        dark
        separator 
        style="max-width: 600px;"
      >
        <!-- Shop -->
        <q-item
          clickable 
          v-ripple
          to="/shop"
        >
          <q-item-section>
            <q-card dark>
              <q-img 
                src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"
                style="height: 200px;"
              />

              <q-card-section >
                  <q-item 
                    clickable 
                    v-ripple
                    to="/shop"
                  >
                  <q-item-section>
                    <q-item-label>{{ shop.name }}</q-item-label>
                    <q-item-label caption>This is a shop</q-item-label>
                  </q-item-section>
                  
                  <q-item-section side top>
                    <q-item-label>Rating</q-item-label>
                    <div class="text-orange">
                      <q-icon name="star" />
                      <q-icon name="star" />
                      <q-icon name="star" />
                    </div>
                  </q-item-section>
                  </q-item>  
                </q-card-section>
            </q-card>
          </q-item-section>
        </q-item>
      </q-list>
    </template>

    <!-- If there are no shops -->
    <template v-else-if="!loadingShops && !shops.length">
      <h5 class="text-center text-grey">No Shops Yet</h5>
    </template>

    <!-- Loading Shops -->
    <template v-else>
      <q-item>
        <q-item-section>
          <q-item-label header>Real Shops:</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator dark/>

      <q-list
        v-for="n in 2"
        :key="n"
        dark
        separator 
        style="max-width: 600px"
      >
        <!-- Shop -->
        <q-item>
          <q-item-section avatar>
            <q-skeleton dark type="QAvatar" animation="fade" height="30" width="30" />
          </q-item-section>

          <q-item-section>
            <q-skeleton dark type="text" width="50%" animation="fade" />
          </q-item-section>

          <q-item-section side top>
            <q-item-label>
              <q-skeleton dark type="rect" animation="fade" style="width: 40px" />
            </q-item-label>

            <q-item-label>
              <q-skeleton dark type="rect" animation="fade" style="width: 40px" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator dark/>
      </q-list>
    </template>

      <!-- Page Scroller -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page>

  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Index',

  data() {
    return{
      shops: [],
      loadingShops: false,

      text: '',
      tab: 'mails'
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

    // get the shops from DB
    getShops () {
      this.loadingShops = true
      this.$axios.get(`${process.env.API}/shops`).then(response => {
        this.shops = response.data
        this.loadingShops = false
      }).catch(err => {
        this.$q.dialog({
          title: 'Error',
          message: 'Could not find shops'
        })
        this.loadingShops = false
      })
    }
  },

  created () {
    this.getShops()
  },

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },

  runSearch () {
  }
}
</script>
