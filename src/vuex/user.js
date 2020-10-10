import axios from 'axios'
import router from '../router/router'

export default {
    state: {
        user: {},
        tasks: [
            {
                status: 1,
                id: 0,
                type: true,
                title: 'Создать макет авторизации регистрации',
                executer: 'Madim',
                deadline: '20',
                difficulty: 1,
                time: '2:34',
                timeF: '10:00',
                author: 'Vadim',
                description: 'asdasdasdasdasd sdsdas dasd a sd asd asdas dasd asd asdsd sd asd ыв ывф ыв фы ывфы вфы ы ыфasd asd',
                subtasks: [{title: 'Дело1',status: 1},{title: 'Дело2',status: 3},{title: 'Дело3',status: 1},{title: 'Дело4',status: 2}]
            },
            {
                status: 2,
                id: 1,
                type: false,
                title: 'FUCK',
                executer: 'Vadim',
                deadline: '20',
                difficulty: 1,
                time: '2:34',
                timeF: '10:00',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: [{title: 'Дело1',status: 1},{title: 'Дело2',status: 3},{title: 'Дело3',status: 1},{title: 'Дело4',status: 2}]
            },
            {
                status: 1,
                id: 2,
                type: true,
                title: 'FUCK',
                executer: 'Badim',
                deadline: '20',
                difficulty: 3,
                time: '2:34',
                timeF: '10:00',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: [{title: 'Дело1',status: 1},{title: 'Дело2',status: 3},{title: 'Дело3',status: 1},{title: 'Дело4',status: 2}]
            },
            {
                status: 2,
                id: 3,
                type: false,
                title: 'FUCK ыыыыы ыыыыы ',
                executer: 'Tadim',
                deadline: '20',
                difficulty: 2,
                time: '2:34',
                timeF: '10:00',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: [{title: 'Дело1',status: 1},{title: 'Дело2',status: 3},{title: 'Дело3',status: 1},{title: 'Дело4',status: 2}]
            },
            {
                status: 2,
                id: 4,
                type: false,
                title: 'FUCK ыыыыы ыыыыы ',
                executer: 'Tadim',
                deadline: '20',
                difficulty: 1,
                time: '2:34',
                timeF: '10:00',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: [{title: 'Дело1',status: 1},{title: 'Дело2',status: 3},{title: 'Дело3',status: 1},{title: 'Дело4',status: 2}]
            },
            {
                status: 3,
                id: 5,
                type: false,
                title: 'FUCK ыыыыы ыыыыы ',
                executer: 'Tadim',
                deadline: '20',
                difficulty: 3,
                time: '2:34',
                timeF: '10:00',
                author: 'Vadim',
                description: 'asdasdasdasdasd',
                subtasks: [{title: 'Дело1',status: 1},{title: 'Дело2',status: 3},{title: 'Дело3',status: 1},{title: 'Дело4',status: 2}]
            }
        ],
        selectedSubtaskIndex: 0,
        error: false,
        id: null,
        showTaskWindow: false,
        getTaskData: {}
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
            newTask.id=state.tasks.length;
            state.tasks.push(newTask);
        },
        editTask(state,newTask) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===newTask.id) {
                    state.tasks[i]=newTask;
                    state.tasks.push(newTask);
                    state.tasks.pop();
                }
            }
        },
        deleteTask(state, taskId) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===taskId) {
                    state.tasks.splice(i, 1);
                }
            }
        },
        createSubtask(state, newSubtask) {
            const addStatus= {
                status: 1,
                title: newSubtask.subtask
            }
            state.tasks[newSubtask.indexTask].subtasks.push(addStatus);
        },
        deleteSubtask(state,deleteSubtask) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===deleteSubtask.indexTask) {
                    state.tasks[i].subtasks.splice(deleteSubtask.indexSubtask, 1);
                }
            }
        },
        editSubtaskTitle(state, editedSubtask) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===editedSubtask.indexTask) {
                    state.tasks[i].subtasks[editedSubtask.indexSubtask].title=editedSubtask.newTitle;
                }
            }
        },
        editStatusSubtask(state, newStatus) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===newStatus.indexTask) {
                    state.tasks[i].subtasks[newStatus.indexSubtask].status=newStatus.status;
                }
            }
        },
        editStatusTask(state, newStatus) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===newStatus.indexTask) {
                    state.tasks[i].status=newStatus.status;
                }
            }
        },
        showTaskWindow(state,status) {
            if(status!==-1) {
                for(let i=0;i<state.tasks.length;i++) {
                   if(state.tasks[i].id===status) {
                       state.getTaskData=state.tasks[i];
                       break;
                   }
                }
            }
            else state.getTaskData={kostil: 'kostil'};
            state.showTaskWindow=true;
        },
        closeTaskWindow(state) {
            state.showTaskWindow=false;
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
                    commit('signUp', res.data.original);
                    router.push('/mainPage');
                    commit('deleteError');
                })
                .catch(error => {
                    if(error.response.data.email)commit('setErrorFromServer', error.response.data.email[0]);
                    else commit('setErrorFromServer', 'Неизвестная ошибка');
                })
        },
        async createSubtask({commit}, newSubtask) {
            commit('createSubtask', newSubtask);
        },
        async deleteSubtask({commit},deleteSubtask) {
            commit('deleteSubtask', deleteSubtask);
        },
        async editSubtaskTitle({commit}, editedSubtask) {
            commit('editSubtaskTitle', editedSubtask);
        },
        async editStatusSubtask({commit}, newStatus) {
            commit('editStatusSubtask', newStatus);
        },
        async editStatusTask({commit}, newStatus) {
            commit('editStatusTask', newStatus);
        },
        async deleteTask({commit}, taskId) {
            commit('deleteTask', taskId);
        },
        async createNewTask({commit}, newTask) {
            commit('createNewTask', newTask);
        },
        async editTask({commit}, newTask) {
            commit('editTask', newTask);
        }
    },
    getters: {
        USER(state) {
            return state.user;
        },
        ERROR(state) {
            return state.error;
        },
        LAST_TASKS(state) {
            const lastTasks=state.tasks.filter((val,index)=> {
                return index>=state.tasks.length-5;
            })
            return lastTasks;
        },
        STATUSOK(state) {
            const ok=state.tasks.filter(val => {
                return val.status===3;
            })
            return ok;
        },
        STATUSWORK(state) {
            const work=state.tasks.filter(val => {
                return val.status===2;
            })
            return work;
        },STATUSTODO(state) {
            const toDo=state.tasks.filter(val => {
                return val.status===1;
            })
            return toDo;
        },
        SHOW_TASK_WINDOW(state) {
            return state.showTaskWindow;
        },
        GET_TASK_DATA(state) {
            return state.getTaskData;
        }
    }
}