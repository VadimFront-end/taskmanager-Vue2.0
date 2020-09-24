// import axios from 'axios'
// import router from '../router/router'

export default {
    state: {
        statusFilter: {
            statusDane: true,
            statusWork: true,
            statusToDo: true
        }
    },
    mutations: {
        showOnlyThis(state, index) {
            if(index===0)state.statusFilter.statusDane=!state.statusFilter.statusDane;
            if(index===1)state.statusFilter.statusWork=!state.statusFilter.statusWork;
            if(index===2)state.statusFilter.statusToDo=!state.statusFilter.statusToDo;
        }
    },
    actions: {},
    getters: {
        STATUSFILTER(state) {
            return state.statusFilter;
        }
    }
}