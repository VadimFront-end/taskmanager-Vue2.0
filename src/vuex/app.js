// import axios from 'axios'
// import router from '../router/router'

export default {
    state: {
        statusFilter: {
            statusDane: true,
            statusWork: true,
            statusToDo: true
        },
        filtersIndex: -1
    },
    mutations: {
        showOnlyThis(state, index) {
            state.statusFilter.statusDane=true;
            state.statusFilter.statusWork=true;
            state.statusFilter.statusToDo=true;
            console.log(index,state.filtersIndex)
            if(state.filtersIndex!==index) {
                state.filtersIndex=index;
                if(index===0) {
                    state.statusFilter.statusWork=false;
                    state.statusFilter.statusToDo=false;
                }
                if(index===1) {
                    state.statusFilter.statusDane=false;
                    state.statusFilter.statusToDo=false;
                }
                if(index===2) {
                    state.statusFilter.statusDane=false;
                    state.statusFilter.statusWork=false;
                }
            }
        }
    },
    actions: {},
    getters: {
        STATUSFILTER(state) {
            return state.statusFilter;
        }
    }
}