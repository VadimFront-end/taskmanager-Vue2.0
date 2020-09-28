import axios from 'axios'
import router from '../router/router'

export default {
    state: {
        user: {},
        tasks: [
            {
                status: 1,
                title: 'FUCK фывфывфы вфыв фыв',
                executer: 'Madim',
                deadline: '20',
                difficulty: 'normal',
                time: '2:34',
                author: 'Vadim',
                description: 'asdasdasdasdasd sdsdas dasd a sd asd asdas dasd asd asdsd sd asd ыв ывф ыв фы ывфы вфы ы ыфasd asd',
                subtasks: ['1','2','3','4']
            },
            {
                status: 2,
                title: 'FUCK',
                executer: 'Vadim',
                deadline: '20',
                difficulty: 'normal',
                time: '2:34',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: ['1','2','3','4']
            },
            {
                status: 1,
                title: 'FUCK',
                executer: 'Badim',
                deadline: '20',
                difficulty: 'normal',
                time: '2:34',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: ['1','2','3','4']
            },
            {
                status: 2,
                title: 'FUCK ыыыыы ыыыыы ',
                executer: 'Tadim',
                deadline: '20',
                difficulty: 'normal',
                time: '2:34',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: ['1','2','3','4']
            },
            {
                status: 2,
                title: 'FUCK ыыыыы ыыыыы ',
                executer: 'Tadim',
                deadline: '20',
                difficulty: 'normal',
                time: '2:34',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: ['1','2','3','4']
            },
            {
                status: 3,
                title: 'FUCK ыыыыы ыыыыы ',
                executer: 'Tadim',
                deadline: '20',
                difficulty: 'normal',
                time: '2:34',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: ['1','2','3','4']
            }
        ],
        error: false,
        id: null
    },
    mutations: {
        logIn(state,userData) {
            state.user=userData;
            localStorage.setItem('token', userData.auth_token);
            state.id=userData.auth_token;
        },
        signUp(state,userData) {
            state.user=userData;
            localStorage.setItem('token', userData.auth_token);
            state.id=userData.auth_token;
        },
        setError(state) {
            state.error=true;
        },
        setErrorFromServer(state,error) {
          state.error=error;
        },
        deleteError(state) {
            state.error=false;
        },
        createNewTask(state,newTask) {
            state.tasks.push(newTask);
        },
        createSubtask(state, newSubtask) {
            state.tasks[newSubtask.index].subtasks.push(newSubtask.subtask);
        },
        deleteSubtask(state,deleteSubtask) {
            state.tasks[deleteSubtask.indexTask].subtasks.splice(deleteSubtask.indexSubtask, 1);
        }
    },
    actions: {
        async signIn({commit}, userLoginPass) {
            await axios.post('https://radiant-ridge-41845.herokuapp.com/api/users/login', {
                email: userLoginPass.email,
                password: userLoginPass.password
            })
                .then(res => {
                    console.log(res.data)
                    commit('logIn', res.data);
                    router.push('/mainPage');
                    commit('deleteError');
                })
                .catch(error => {
                    if(error.response.data.login)commit('setErrorFromServer', error.response.data.login);
                    else if(error.response.data.password)commit('setErrorFromServer', error.response.data.password);
                    else commit('setErrorFromServer', 'Неизвестная ошибка');
                })
        },
        async signUp({commit}, userData) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/users/register', {
                username: userData.name,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword
            })
                .then(res => {
                    console.log(res.data.original)
                    commit('signUp', res.data.original);
                    router.push('/mainPage');
                    commit('deleteError');
                })
                .catch(error => {
                    if(error.response.data.email)commit('setErrorFromServer', error.response.data.email[0]);
                    else if(error.response.data.username)commit('setErrorFromServer', error.response.data.username[0]);
                    else if(error.response.data.password)commit('setErrorFromServer', error.response.data.password[0]);
                    else commit('setErrorFromServer', 'Неизвестная ошибка');
                })
        },
        async createSubtask({commit}, newSubtask) {
            commit('createSubtask', newSubtask);
        },
        async deleteSubtask({commit},deleteSubtask) {
            commit('deleteSubtask', deleteSubtask);
        }
    },
    getters: {
        USER(state) {
            return state.user;
        },
        ERROR(state) {
            return state.error;
        },
        TASKS(state) {
            return state.tasks;
        },
        LASTTASKS(state) {
            const lastTasks=state.tasks.filter((val,index)=> {
                return index>=state.tasks.length-5;
            })
            console.log(lastTasks)
            return lastTasks;
        },
        STATUSOK(state) {
            const ok=state.tasks.filter(val => {
                return val.status===3;
            })
            console.log(ok)
            return ok;
        },
        STATUSWORK(state) {
            const work=state.tasks.filter(val => {
                return val.status===2;
            })
            console.log(work)
            return work;
        },STATUSTODO(state) {
            const toDo=state.tasks.filter(val => {
                return val.status===1;
            })
            console.log(toDo)
            return toDo;
        }
    }
}