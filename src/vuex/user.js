import axios from 'axios'
import router from '../router/router'

export default {
    state: {
        user: {},
        tasks: [],
        users: [],
        id: null,
        error: false,
        showTaskWindow: false,
        getTaskData: {}
    },
    mutations: {
        logIn(state,userData) {
            state.user=userData;
            localStorage.setItem('token', userData.auth_token);
            state.id=userData.user_id;
        },
        signUp(state,userData) {
            state.user=userData;
            localStorage.setItem('token', userData.auth_token);
            state.id=userData.user_id;
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

            let newTaskMy = {
                status: +newTask.task.status,
                type: newTask.task.is_private,
                timeF: newTask.task.done_time ? newTask.task.done_time: '',
                title: newTask.task.task_name,
                executer: newTask.executer,
                executer_id: newTask.task.executer_id,
                author: newTask.creator,
                author_id: newTask.task.creator_id,
                deadline: newTask.task.deadline,
                difficulty: +newTask.task.urgency,
                time: newTask.task.estimated_time ? newTask.task.estimated_time: '',
                description: newTask.task.task_description,
                id: newTask.task.id,
                project_id: newTask.task.project_id
            }
            state.tasks.push(newTaskMy);
        },
        editTask(state,newTask) {
            for(let i=0;i<state.tasks.length;i++) {
                if(state.tasks[i].id===newTask.id) {
                    state.tasks.splice(i,1,newTask);
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
                status: false,
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
        },
        getAllUsers(state, users) {
            state.users=users;
        },
        GET_USER_TASKS(state, tasks) {
            state.tasks=[];
            console.log(this.state.user.users)
            for(let i=0;i<tasks.length;i++) {
                let nameExecuter='';
                let nameAuthor='';
                for(let j=0;j<this.state.user.users.length;j++) {
                    if(this.state.user.users[j].id===tasks[i].creator_id) {
                        nameAuthor=this.state.user.users[j].username;
                    }
                    if(this.state.user.users[j].id===tasks[i].assignee_id) {
                        nameExecuter=this.state.user.users[j].username;
                    }
                }
                let tmpTask = {
                    status: +tasks[i].status,
                    type: tasks[i].is_private,
                    timeF: tasks[i].done_time ? tasks[i].done_time: '',
                    title: tasks[i].task_name,
                    executer: nameExecuter,
                    executer_id: tasks[i].assignee_id,
                    author: nameAuthor,
                    author_id: tasks[i].creator_id,
                    deadline: tasks[i].deadline,
                    difficulty: +tasks[i].urgency,
                    time: tasks[i].estimated_time ? tasks[i].estimated_time: '',
                    description: tasks[i].task_description,
                    id: tasks[i].id,
                    project_id: tasks[i].project_id
                }
                state.tasks.push(tmpTask);
            }
        }
    },
    actions: {
        signIn({commit}, userLoginPass) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/users/login', {
                email: userLoginPass.email,
                password: userLoginPass.password
            })
                .then(res => {
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
        signUp({commit}, userData) {
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
        GET_USERS({commit}) {
            axios.get('https://radiant-ridge-41845.herokuapp.com/api/users')
                .then(res => {
                    commit('getAllUsers', res.data);
                })
                .catch(error => {
                    console.log(error,commit)
                })
        },
        GET_USER_TASKS({commit}) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/user_tasks', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    commit('GET_USER_TASKS', res.data);
                })
                .catch(error => {
                    console.log(error.response)
                })
            // axios.post('https://radiant-ridge-41845.herokuapp.com/api/user_private_tasks', {}, {
            //     headers: {
            //         'Authorization': `Bearer ${localStorage.getItem('token')}`
            //     }
            // })
            //     .then(res => {
            //         console.log(res.data)
            //         commit('GET_USER_TASKS', res.data);
            //     })
            //     .catch(error => {
            //         console.log(error.response)
            //     })
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
            axios.delete(`https://radiant-ridge-41845.herokuapp.com/api/task/${2}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    commit('deleteTask', taskId);
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        async createNewTask({dispatch}, newTask) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/task', {
                is_private: newTask.type ? 1: 0,
                done_time: newTask.timeF,
                task_name: newTask.title,
                assignee_id: newTask.executer_id,
                deadline: newTask.deadline,
                urgency: newTask.difficulty,
                estimated_time: newTask.time,
                task_description: newTask.description,
                project_id: newTask.project_id
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(() => {
                    dispatch('GET_USER_TASKS');
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        async editTask({dispatch}, newTask) {
            console.log(newTask)
            axios.patch('https://radiant-ridge-41845.herokuapp.com/api/task', {
                is_private: newTask.type ? 1: 0,
                done_time: newTask.timeF,
                task_name: newTask.title,
                assignee_id: newTask.executer_id,
                deadline: newTask.deadline,
                urgency: newTask.difficulty,
                estimated_time: newTask.time,
                task_description: newTask.description,
                project_id: newTask.project_id
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(() => {
                    dispatch('GET_USER_TASKS');
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        AUTO_AUTH({commit}) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/users', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    res.data.auth_token=localStorage.getItem('token');
                    commit('logIn', res.data);
                    router.push('/mainPage');
                })
                .catch(error => {
                    console.log(error.response)
                })
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
        },
        GET_ALL_USERS(state) {
            return state.users;
        }
    }
}