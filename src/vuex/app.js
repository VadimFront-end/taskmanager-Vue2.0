import user from '../vuex/user'

export default {
    state: {
        statusFilter: {
            statusDane: false,
            statusWork: false,
            statusToDo: false
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
            state.statusFilter.statusDane=false;
            state.statusFilter.statusWork=false;
            state.statusFilter.statusToDo=false;
            if(state.statusFiltersIndex!==index) {
                state.statusFiltersIndex=index;
                if(index===0)state.statusFilter.statusDane=true;
                if(index===1)state.statusFilter.statusWork=true;
                if(index===2)state.statusFilter.statusToDo=true;
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
        // nullIndex(state) {
        //     state.difficultyFilter.easy=false;
        //     state.difficultyFilter.normal=false;
        //     state.difficultyFilter.hard=false;
        // }
    },
    getters: {
        STATUSFILTER(state) {
            return state.statusFilter;
        },
        DIFFICULTY_FILTER(state) {
            return state.difficultyFilter;
        },
        FILTERED(state) {
            let filteredTasks=user.state.tasks;
            if(state.statusFilter.statusDane)filteredTasks=user.state.tasks.filter((val) => {
                return val.status===1
            });
            if(state.statusFilter.statusWork)filteredTasks=user.state.tasks.filter((val) => {
                return val.status===2
            });
            if(state.statusFilter.statusToDo)filteredTasks=user.state.tasks.filter((val) => {
                return val.status===3
            });
            if(state.difficultyFilter.easy)filteredTasks=filteredTasks.filter((val) => {
                return val.difficulty===1
            });
            if(state.difficultyFilter.normal)filteredTasks=filteredTasks.filter((val) => {
                return val.difficulty===2
            });
            if(state.difficultyFilter.hard)filteredTasks=filteredTasks.filter((val) => {
                return val.difficulty===3
            });
            return filteredTasks;
        }
    }
}