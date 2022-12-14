import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import blog from './learn store/modules/blog';
import product_list from './modules/product_list';
import product_cart from './modules/product_cart';
import checkout from './modules/checkout';

const store = new Vuex.Store({
    modules: {
        blog,
        product_list,
        product_cart,
        checkout,
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    plugins: [createPersistedState()],
});

export default store;
