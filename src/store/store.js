import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

import { firebaseMutations } from "vuexfire";


// Using Modules to load
import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
    mutations: {...firebaseMutations},
    modules: {
        menu,
        orders,
        users
    }
})
