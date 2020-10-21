import axios from "axios";
import router from "../router/router";
import user from './user'

export default {
    state: {
        projects: [],
        projectTasks: [],
        getProjectData: {},
        showProjectWindow: false
    },
    mutations: {
        showProject(state, idProject) {
            for(let i=0;i<state.projects.length;i++) {
                if(state.projects[i].id===idProject) {
                    state.getProjectData=state.projects[i];
                    this.dispatch('getProjectTasks',state.projects[i].id);
                    router.push('/project');
                    break;
                }
            }
        },
        getAllProjects(state, projects) {
            state.projects=projects;
        },
        getProjectTasks(state, projectsTasks) {
            state.projectTasks=[];
            for(let task in projectsTasks) {
                let nameExecuter='';
                let nameAuthor='';
                for(let j=0;j<user.state.users.length;j++) {
                    if(user.state.users[j].id===projectsTasks[task].creator_id) {
                        nameAuthor=user.state.users[j].username;
                    }
                    if(user.state.users[j].id===projectsTasks[task].assignee_id) {
                        nameExecuter=user.state.users[j].username;
                    }
                }
                let tmpTask = {
                    status: +projectsTasks[task].status,
                    subtasks: [],
                    type: projectsTasks[task].is_private,
                    timeF: projectsTasks[task].done_time ? projectsTasks[task].done_time: '',
                    title: projectsTasks[task].task_name,
                    executer: nameExecuter,
                    executer_id: projectsTasks[task].assignee_id,
                    author: nameAuthor,
                    author_id: projectsTasks[task].creator_id,
                    deadline: projectsTasks[task].deadline,
                    difficulty: +projectsTasks[task].urgency,
                    time: projectsTasks[task].estimated_time ? projectsTasks[task].estimated_time: '',
                    description: projectsTasks[task].task_description,
                    id: projectsTasks[task].id,
                    project_id: projectsTasks[task].project_id
                }
                state.projectTasks.push(tmpTask);
            }
        },
        addProject(state, newProject) {
            state.projects.push(newProject);
        },
        getProjectNull(state) {
            state.getProjectData={};
            state.projectTasks=[];
        },
        isShowProjectWindow(state) {
            state.showProjectWindow=!state.showProjectWindow;
        },
        showTaskWindowInProject(state,status) {
            for(let i=0;i<state.projectTasks.length;i++) {
                if(state.projectTasks[i].id===status) {
                    user.state.getTaskData=state.projectTasks[i];
                    break;
                }
            }
            user.state.showTaskWindow=true;
        }
    },
    actions: {
        getProjectTasks({commit}, projectId) {
            console.log(projectId)
            axios.get(`https://radiant-ridge-41845.herokuapp.com/api/project/${projectId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    console.log( res.data.tasks)
                    commit('getProjectTasks', res.data.tasks);
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        getAllProjects({commit}) {
            axios.get('https://radiant-ridge-41845.herokuapp.com/api/project')
                .then(res => {
                    commit('getAllProjects', res.data);
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
        }
    },
    getters: {
        GET_PROJECT_TASKS(state) {
            return state.projectTasks;
        },
        GET_PROJECT_DATA(state) {
            let project={}
            if(Object.keys(state.getProjectData).length === 0) {
                project = {
                    project_creator: user.state.user.username,
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
        },
        PROJECTS(state) {
            return state.projects;
        },
        LAST_PROJECTS(state) {
            const lastProjects=state.projects.filter((val,index)=> {
                return index>=state.projects.length-4;
            })
            return lastProjects;
        },
        SHOW_WINDOW_PROJECT(state) {
            return state.showProjectWindow;
        }
    }
}