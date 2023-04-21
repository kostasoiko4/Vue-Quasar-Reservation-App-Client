// import { values } from "core-js/core/array";
import Vue from "vue";
import Vuex from "vuex";

import store from './store'
 
Vue.use(Vuex);
 
export default function (){
    const Store = new Vuex.Store({
        modules: {
            store
        },
    })

 return Store
}