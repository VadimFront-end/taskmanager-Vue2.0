import axios from 'axios'
import router from '../router/router'

export default {
    state: {
        user: {},
        tasks: [
            {
                status: 1,
                type: false,
                timeF: '00:50',
                title: 'Сделать создание задач',
                executer: 'user',
                deadline: '29.10.2020',
                difficulty: 1,
                time: '02:00',
                author: 'Vadim',
                description: 'Мы должны бороться с религией. Это - азбука всего материализма и, следовательно, марксизма. Но марксизм не есть материализм, остановившийся на азбуке. Марксизм идет дальше. Он говорит: надо уметь бороться с религией, а для этого надо материалистически объяснить источник веры и религии у масс',
                id: 0,
                subtasks: [{title: 'Subtask1',status: true},{title: 'Subtask2',status: false},{title: 'Subtask3',status: false},{title: 'Subtask4',status: true}]
            },
            {
                status: 3,
                type: true,
                timeF: '02:50',
                title: 'Сделать создание задач 1',
                executer: 'user',
                deadline: '05.10.2020',
                difficulty: 2,
                time: '03:00',
                author: 'Madim',
                description: 'Мы должны бороться с религией. Это - азбука всего материализма и, следовательно, марксизма. Но марксизм не есть материализм, остановившийся на азбуке. Марксизм идет дальше. Он говорит: надо уметь бороться с религией, а для этого надо материалистически объяснить источник веры и религии у масс',
                id: 1,
                subtasks: [{title: 'Subtask1',status: true},{title: 'Subtask2',status: false},{title: 'Subtask3',status: false}]
            },
            {
                status: 1,
                type: false,
                timeF: '05:50',
                title: 'Сделать создание задач 2',
                executer: 'user',
                deadline: '29.10.2020',
                difficulty: 3,
                time: '03:00',
                author: 'Nadim',
                description: 'Мы должны бороться с религией. Это - азбука всего материализма и, следовательно, марксизма. Но марксизм не есть материализм, остановившийся на азбуке. Марксизм идет дальше. Он говорит: надо уметь бороться с религией, а для этого надо материалистически объяснить источник веры и религии у масс',
                id: 2,
                subtasks: [{title: 'Subtask1',status: true},{title: 'Subtask2',status: false},{title: 'Subtask3',status: false},{title: 'Subtask4',status: true},{title: 'Subtask5',status: true},{title: 'Subtask6',status: true}]
            },
            {
                status: 3,
                type: false,
                timeF: '00:50',
                title: 'Сделать создание задач 3',
                executer: 'user',
                deadline: '29.09.2020',
                difficulty: 1,
                time: '02:00',
                author: 'Iadim',
                description: 'Мы должны бороться с религией. Это - азбука всего материализма и, следовательно, марксизма. Но марксизм не есть материализм, остановившийся на азбуке. Марксизм идет дальше. Он говорит: надо уметь бороться с религией, а для этого надо материалистически объяснить источник веры и религии у масс',
                id: 3,
                subtasks: [{title: 'Subtask1',status: true},{title: 'Subtask2',status: false},{title: 'Subtask3',status: false}]
            },
            {
                status: 2,
                type: false,
                timeF: '00:40',
                title: 'Сделать создание задач 4',
                executer: 'user',
                deadline: '10.10.2020',
                difficulty: 1,
                time: '20:00',
                author: 'Oadim',
                description: 'Мы должны бороться с религией. Это - азбука всего материализма и, следовательно, марксизма. Но марксизм не есть материализм, остановившийся на азбуке. Марксизм идет дальше. Он говорит: надо уметь бороться с религией, а для этого надо материалистически объяснить источник веры и религии у масс',
                id: 4,
                subtasks: [{title: 'Subtask',status: true},{title: 'Subtask50',status: false},{title: 'Subtask200',status: false}]
            },
            {
                status: 1,
                type: false,
                timeF: '04:10',
                title: 'Сделать создание задач 5',
                executer: 'user',
                deadline: '29.10.2020',
                difficulty: 2,
                time: '05:05',
                author: 'Zadim',
                description: 'Мы должны бороться с религией. Это - азбука всего материализма и, следовательно, марксизма. Но марксизм не есть материализм, остановившийся на азбуке. Марксизм идет дальше. Он говорит: надо уметь бороться с религией, а для этого надо материалистически объяснить источник веры и религии у масс',
                id: 5
            }
        ],
        projects: [],
        users: [],
        id: null,
        error: false,
        showTaskWindow: false,
        showProjectWindow: false,
        getTaskData: {},
        getProjectData: {}
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
            newTask.id=state.tasks.length;
            state.tasks.push(newTask);
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
        showProject(state, idProject) {
            for(let i=0;i<state.projects.length;i++) {
                if(state.projects[i].id===idProject) {
                    state.getProjectData=state.projects[i];
                    router.push('/project');
                    break;
                }
            }
        },
        getAllProjects(state, projects) {
            state.projects=projects;
        },
        getAllUsers(state, users) {
            state.users=users;
        },
        addProject(state, newProject) {
            state.projects.push(newProject);
        },
        getProjectNull(state) {
            state.getProjectData={};
        },
        isShowProjectWindow(state) {
            state.showProjectWindow=!state.showProjectWindow;
        },
        GET_USER_TASKS(state, tasks) {
            state.tasks=[];
            for(let i=0;i<tasks.length;i++) {
                let tmpTask = {
                    status: tasks[i].status,
                    type: tasks[i].is_private,
                    timeF: tasks[i].done_time,
                    title: tasks[i].task_name,
                    executer: tasks[i].assignee_id,
                    deadline: tasks[i].deadline,
                    difficulty: tasks[i].urgency,
                    time: tasks[i].estimated_time,
                    author: tasks[i].creator_id,
                    description: tasks[i].task_description,
                    id: tasks[i].id,
                    project_id: tasks[i].project_id
                }
                state.tasks.push(tmpTask);
            }
            console.log(state.tasks)
        }
    },
    actions: {
        signIn({commit}, userLoginPass) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/users/login', {
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
        getAllProjects({commit}) {
            axios.get('https://radiant-ridge-41845.herokuapp.com/api/project')
                .then(res => {
                    console.log(res.data)
                    commit('getAllProjects', res.data);
                })
                .catch(error => {
                    console.log(error,commit)
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
        addProject({commit}, newProject) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/project', {
                project_name: newProject.project_name,
                project_description: newProject.project_description,
                project_deadline: newProject.project_deadline,
                project_status: newProject.project_status
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    commit('addProject', res.data);
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        // GET_USER_TASKS({commit}) {
        //     axios.post('https://radiant-ridge-41845.herokuapp.com/api/user_tasks', {}, {
        //         headers: {
        //             'Authorization': `Bearer ${localStorage.getItem('token')}`
        //         }
        //     })
        //         .then(res => {
        //             console.log(res.data)
        //             commit('GET_USER_TASKS', res.data);
        //         })
        //         .catch(error => {
        //             console.log(error.response)
        //         })
        //     axios.post('https://radiant-ridge-41845.herokuapp.com/api/user_private_tasks', {}, {
        //         headers: {
        //             'Authorization': `Bearer ${localStorage.getItem('token')}`
        //         }
        //     })
        //         .then(res => {
        //             console.log(res.data)
        //             commit('GET_USER_TASKS', res.data);
        //         })
        //         .catch(error => {
        //             console.log(error.response)
        //         })
        // },
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
            // axios.post('https://radiant-ridge-41845.herokuapp.com/api/task', {
            //     is_private: newTask.type ? 1: 0,
            //     done_time: newTask.timeF,
            //     task_name: newTask.title,
            //     assignee_id: 0,
            //     deadline: newTask.deadline,
            //     urgency: newTask.difficulty,
            //     estimated_time: newTask.time,
            //     task_description: newTask.description,
            //     project_id: 0
            // }, {
            //     headers: {
            //         'Authorization': `Bearer ${localStorage.getItem('token')}`
            //     }
            // })
            //     .then(res => {
            //         console.log(res.data)
            //
            //     })
            //     .catch(error => {
            //         console.log(error.response)
            //     })
        },
        async editTask({commit}, newTask) {
            commit('editTask', newTask);
        },
        AUTO_AUTH({commit}) {
            axios.post('https://radiant-ridge-41845.herokuapp.com/api/users', {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                })
                .then(res => {
                    // res.data.auth_token=localStorage.getItem('token');
                    console.log(res.data)
                    commit('logIn', res.data);
                    router.push('/mainPage');
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
        LAST_PROJECTS(state) {
            const lastProjects=state.projects.filter((val,index)=> {
                return index>=state.projects.length-4;
            })
            return lastProjects;
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
        PROJECTS(state) {
            return state.projects;
        },
        GET_ALL_USERS(state) {
            return state.users;
        },
        SHOW_WINDOW_PROJECT(state) {
            return state.showProjectWindow;
        },
        GET_PROJECT_DATA(state) {
            let project={}
            if(Object.keys(state.getProjectData).length === 0) {
                project = {
                    project_creator: state.user.username,
                    project_name: '',
                    id: NaN,
                    project_description: '',
                    project_deadline: '',
                    project_status: '1'
                };
            }
            else {
                project = {
                    project_creator: state.getProjectData.project_creator,
                    project_name: state.getProjectData.project_name,
                    id: state.getProjectData.id,
                    project_description: state.getProjectData.project_description,
                    project_deadline: state.getProjectData.project_deadline,
                    project_status: state.getProjectData.project_status
                }
            }
            return project;
        }
    }
}