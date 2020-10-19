import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import app from './app'
import projects from './projects'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        app,
        projects
    }
});