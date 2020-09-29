// import axios from 'axios'
// import router from '../router/router'

export default {
    state: {
        statusFilter: {
            statusDane: true,
            statusWork: true,
            statusToDo: true
        },
        statusFiltersIndex: -1,
        difficultyFilter: {
            easy: false,
            normal: false,
            hard: false
        },
        difficultyFilterIndex: -1
    },
    mutations: {
        showOnlyThis1(state, index) {
            state.statusFilter.statusDane=true;
            state.statusFilter.statusWork=true;
            state.statusFilter.statusToDo=true;
            if(state.statusFiltersIndex!==index) {
                state.statusFiltersIndex=index;
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
            else state.statusFiltersIndex=-1;
        },
        showOnlyThis2(state, index) {
            state.difficultyFilter.easy=false;
            state.difficultyFilter.normal=false;
            state.difficultyFilter.hard=false;
            if(state.difficultyFilterIndex!==index) {
                state.difficultyFilterIndex=index;
                if(index===0)state.difficultyFilter.easy=true;
                if(index===1)state.difficultyFilter.normal=true;
                if(index===2)state.difficultyFilter.hard=true;
            }
            else state.difficultyFilterIndex=-1;
        },
        nullIndex(state) {
            state.difficultyFilter.easy=false;
            state.difficultyFilter.normal=false;
            state.difficultyFilter.hard=false;
        }
    },
    actions: {},
    getters: {
        STATUSFILTER(state) {
            return state.statusFilter;
        },
        DIFFICULTY_FILTER(state) {
            return state.difficultyFilter;
        }
    }
}