<template>
  <div class="bg-grey-10 text-white">
    <q-page>
      <q-list dark separator style="max-width: 600px">
        <!-- Opening card -->
        <q-card dark>

          <!-- Store Image -->
          <q-img 
            src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg" 
            style="top: 0; right: 0; transform: translateY(-1%);"
          />
         
          <!-- Navigation Buttons -->
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-51%);"
            />

            <q-btn 
              round 
              dense
              color="primary"
              to="/" 
              icon="keyboard_arrow_left"
              style="top: 0; right: -5px; transform: translateY(-750%);"
            />

            <q-btn
              round 
              dense
              color="primary"
              icon="favorite"
              style="top: 0; left: 270px; transform: translateY(-750%);"
            />
            
            <!-- Shop Info Section -->
            <div class="row no-wrap items-center" style="transform: translateY(-80%);">
              <div class="col">
                <h9 class="text-grey">Restaurant</h9>
              </div>
              <div class="col-auto text-grey">
                <q-icon name="place" /> 250 m
              </div>
            </div>
            <div style="transform: translateY(-20%);">
              <div class="text-h6">Shop</div>
              <div class="text-grey">Minimum Reservation: 10,00€</div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Special Offers Section -->
        <div class="q-pa-md">
          <q-item-label header>Special Offers</q-item-label>
          
          <q-list dark separator style="max-width: 600px">

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"  height="50" width="70">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>1+1 Item 1</q-item-label>
              <q-item-label caption>It's a food/drink</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"  height="50" width="70">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>1+1 Item 2</q-item-label>
              <q-item-label caption>It's a food/drink</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"  height="50" width="70">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>-25% Item 3</q-item-label>
              <q-item-label caption>It's a food/drink</q-item-label>
            </q-item-section>
          </q-item>
          </q-list>
        </div>

        <!-- Featured Dishes Section -->
        <div class="q-pa-md">
          <q-item-label header>Featured Dishes</q-item-label>
          
          <q-list dark separator style="max-width: 600px">

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"  height="50" width="70">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Item 1</q-item-label>
              <q-item-label caption>It's a food/drink</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"  height="50" width="70">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Item 2</q-item-label>
              <q-item-label caption>It's a food/drink</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"  height="50" width="50">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Item 3</q-item-label>
              <q-item-label caption>It's a food/drink</q-item-label>
            </q-item-section>
          </q-item>
          </q-list>
        </div>

        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="menu" label="Menu" class="q-pa-sm"/>
          <q-tab name="reserve" label="Reserve" class="q-pa-sm"/>
        </q-tabs>
        
        <q-tab-panels v-model="tab" animated dark>
          <q-tab-panel name="menu">
            <q-list dark separator style="max-width: 600px">
            <q-item-label header class="text-h6 text-white">Menu</q-item-label>

            <q-item-label header>Burgers:</q-item-label>

            <!-- Item 1 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 1</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 2 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 2</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 3 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 3</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 4 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 4</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 5 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 5</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <q-item-label header>Vegan Burgers:</q-item-label>

            <!-- Item 1 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 1</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 2 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 2</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 3 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 3</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 4 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 4</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>

            <!-- Item 5 -->
            <q-item clickable v-ripple @click="itemCard = true">
              <q-item-section>
                <q-item-label class="text-bold">Burger 5</q-item-label>
                <q-item-label caption>Pork/Beef, letuce, tomato, backon</q-item-label>
                <q-item-label>From: 5.90€</q-item-label>
              </q-item-section>

              <q-img class="rounded-borders" style="height: 60px; width: 80px" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg"/>
            </q-item>
            </q-list>

          </q-tab-panel>

          <q-tab-panel name="reserve">
            <q-list dark separator style="max-width: 600px">

            <q-item-label header>
              <div class="text-h6 text-white">Order</div>
              <div class="text-grey">Complete Your Order By Take Away</div>
            </q-item-label>

            <q-item>
              <q-item-section>
                <q-btn 
                  v-ripple 
                  rounded 
                  filled 
                  dense 
                  type="submit" 
                  color="primary" 
                  label="Take Away"
                  @click="card = true"
                />
              </q-item-section>
            </q-item>

            <q-separator dark class="q-ma-md"/>

            <q-item-label header>
              <div class="text-h6 text-white">Reserve</div>
              <div class="text-grey">Complete Your Reservation By Selecting A Table</div>
            </q-item-label>
            <!-- Interior Table List -->
            <q-item-label header>Interior Tables:</q-item-label>

            <!-- Tabel 1 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 1</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 10,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header class="text-green">Available</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 2 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 2</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 10,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header class="text-green">Available</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 3 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 3</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 10,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header class="text-green">Available</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 4 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 4</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 10,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header class="text-green">Available</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 5 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 5</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 10,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header class="text-green">Available</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Exterior Table List -->
            <q-item-label header>Exterior Tables:</q-item-label>

            <!-- Tabel 1 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 1</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 25,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header>Reserved</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 2 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 2</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 25,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header>Reserved</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 3 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 3</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 25,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header>Reserved</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 4 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 4</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 25,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header>Reserved</q-item-label>
              </q-item-section>
            </q-item>

            <!-- Table 5 -->
            <q-item clickable v-ripple @click="card = true">
              <q-item-section>
                <q-item-label class="text-bold">Table 5</q-item-label>
                <q-item-label caption>
                  <q-icon name="person" style="transform: translateY(-10%);"/> 4
                  <div>Minimum Reservation: 25,00€</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label header>Reserved</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>

          </q-tab-panel>
        </q-tab-panels>

      <q-dialog v-model="itemCard">
        <q-card class="bg-grey-10 text-white">
          <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg" />

          <q-card-section>
            <div class="text-h6">Burger 1</div>
            <div class="text-grey">Beef/Pork, letuce, tomato, bacon</div>
          </q-card-section>

          <q-card-section>
            <q-separator dark/>
          </q-card-section>

          <q-expansion-item
            label="Add an Item"
          >
            <q-card dark>
              <q-item>
                  <q-checkbox v-model="check5" label="Option 1"/>
              </q-item>
              <q-item>
                  <q-checkbox v-model="check5" label="Option 2"/>
              </q-item>
              <q-item>
                  <q-checkbox v-model="check5" label="Option 3"/>
              </q-item>
            </q-card>
          </q-expansion-item>

          <q-card-section>
            <q-separator dark/>
          </q-card-section>

          <q-expansion-item
            label="Add an Item"
          >
            <q-card dark>
              <q-item>
                  <q-checkbox v-model="check5" label="Option 1"/>
              </q-item>
              <q-item>
                  <q-checkbox v-model="check5" label="Option 2"/>
              </q-item>
              <q-item>
                  <q-checkbox v-model="check5" label="Option 3"/>
              </q-item>
            </q-card>
          </q-expansion-item>

          <!-- Comment Section -->
          <q-card-section>
            <q-input dark style="min-width: 300px" color="primary" v-model="text" label="Add a comment: " @keydown.enter="order.comment = text, text = ''" >
              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"/>
              </template>
            </q-input>
          </q-card-section>

          <q-separator />

          <q-card-actions align="around">
            <q-btn round color="primary" icon="remove" @click="(Item1 > 1) && (Item1 --)"/>
              
            <v-text v-text="Item1"/>
              
            <q-btn round color="primary" icon="add" @click="Item1 ++"/>
                
            <q-btn rounded color="white text-black" v-close-popup>Add to Cart</q-btn>
          </q-card-actions>

        </q-card>
      </q-dialog>

      <!-- Order Card -->
      <q-dialog v-model="card">
        <q-card class="bg-grey-10 text-white">
          <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/47/a8/91/chicken-salad-sandwich.jpg" />

          <!-- Shop Location/Rating -->
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Shop</div>
              <div class="col-auto text-grey q-pt-md">
                <q-icon name="place" /> 250 m
              </div>
            </div>

            <q-rating v-model="stars" :max="3" size="32px" />
          </q-card-section>

          <!-- Item Check Out -->
          <q-card-section>
            <div class="text-subtitle2 text-grey">Date:  <v-text v-text="order.date"/><q-btn round dense flat icon="close" @click="ordeeer.date = null"/></div>
            <div class="text-subtitle2 text-grey">Time:  <v-text v-text="order.time"/><q-btn round dense flat icon="close" @click="order.time = null"/></div>
            <div class="text-subtitle1">Your Order:</div>
            <div class="text-subtitle2 text-grey" v-if="check1 !== false" >Item 1:  <v-text v-text="Item1"/><q-btn round dense flat icon="close" @click="check1 = false"/></div>
            <div class="text-subtitle2 text-grey" v-if="check2 !== false" >Item 2:  <v-text v-text="Item2"/><q-btn round dense flat icon="close" @click="check2 = false"/></div>
            <div class="text-subtitle2 text-grey" v-if="check3 !== false" >Item 3:  <v-text v-text="Item3"/><q-btn round dense flat icon="close" @click="check3 = false"/></div>
            <div class="text-subtitle2 text-grey" v-if="check4 !== false" >Item 4:  <v-text v-text="Item4"/><q-btn round dense flat icon="close" @click="check4 = false"/></div>
            <div class="text-subtitle2 text-grey" v-if="check5 !== false" >Item 5:  <v-text v-text="Item5"/><q-btn round dense flat icon="close" @click="check5 = false"/></div>
            <div class="text-subtitle2 text-grey" v-if="order.comment !== ''">Comment: <v-text v-text="order.comment"/><q-btn round dense flat icon="close" @click="order.comment = ''"/></div>
          </q-card-section>

          <!-- Comment Section -->
          <q-card-section>
            <q-input dark style="min-width: 300px" color="primary" v-model="text" label="Add a comment: " @keydown.enter="order.comment = text, text = ''" >
              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"/>
              </template>
            </q-input>
          </q-card-section>

          <q-separator />

          <!-- Calendar/Check out -->

          <q-card-actions align="around">
            <!-- -->
            <q-btn round color="grey" flat icon="event" @click="dateCard = true"/>

            <!--
            <q-input v-model="time" color="primary" filled type="time"/>
            <q-input v-model="date" color="primary" filled type="date"/>-->

            <q-btn flat color="grey" v-close-popup>Cancel</q-btn>
            <q-btn flat color="primary" v-close-popup @click="addOrder">Reserve</q-btn>
          </q-card-actions>

        </q-card>
      </q-dialog>

      <!-- Date/Time Picker -->
      <q-dialog v-model="dateCard">
          <q-date dark class="bg-grey-10" v-model="order.date" mask="DD-MM-YYYY"/>
          <q-time dark class="bg-grey-10" v-model="order.time"/>
      </q-dialog>

      <!-- Order Dialog -->
      <q-dialog v-model="placed">
        <v-text class="text-white">Your Order Has Been Placed</v-text>
      </q-dialog>

      <!-- Page Scroller -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>

      </q-list>
    </q-page>
  </div>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'Shop',

  data () {
    return {
      order: {
        id: uid(),
        // user information
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        // order details
        date: null,
        time: null,
        comment: '',
        // order items
        items: []
      },
      
      text: '',
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      Item1: 1,
      Item2: 1,
      Item3: 1,
      Item4: 1,
      Item5: 1,
      card: false,
      itemCard: false,
      dateCard: false,
      placed: false,
      stars: 3,
      filter1: false,
      filter2: false,
      filter3: false,
      filter4: false,
      filter5: false,
      slide: 1,
      tab: 'menu',
      headerState: 'false'
    }
  },

  methods: {
    // add order
    addOrder () {
      this.$q.loading.show()

      let formData = new FormData()

      formData.append('id', this.order.id)
      formData.append('firstName', this.order.firstName)
      formData.append('lastName', this.order.lastName)
      formData.append('phone', this.order.phone)
      formData.append('email', this.order.email)
      formData.append('date', this.order.date)
      formData.append('time', this.order.time)
      formData.append('comment', this.order.comment)
      // formData.append('items', this.order.items)
      // change later
      if (this.check1) {formData.append('item 1', this.Item1)}
      if (this.check2) {formData.append('item 2', this.Item2)}
      if (this.check3) {formData.append('item 3', this.Item3)}
      if (this.check4) {formData.append('item 4', this.Item4)}
      if (this.check5) {formData.append('item 5', this.Item5)}
      

      // send formData to backend
      this.$axios.post(`${process.env.API}/placeOrder`, formData).then(response => {
        console.log('response: ', response)
        this.$router.push('/')
        // create notification
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Order Placed!',
          actions: [
            { label: 'Dismiss', color: 'white' }
          ]
        })
        this.$q.loading.hide()
        // after order placement, go to index
        placed = true
        // window.location = index.vue
      }).catch(err => {
        console.log('Order placement error: ', err)
        this.$q.dialog({
          title: 'Error',
          message: 'Could not place order!'
        })
        this.$q.loading.hide()
      })
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
    }
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
