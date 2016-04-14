import Vue from 'vue';
import Vuex from 'vuex';
import router from '../main.js';

Vue.use(Vuex);

const state = {
    loggedIn: false
};

const mutations = {
    CHANGELOGIN (state, status) {
        state.loggedIn = status;
        router.go({name: 'home'});
    }
};

export default new Vuex.Store({
    state,
    mutations
});
