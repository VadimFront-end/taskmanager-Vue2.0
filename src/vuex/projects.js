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
            state.projectTasks=projectsTasks;
        },
        addProject(state, newProject) {
            state.projects.push(newProject);
        },
        getProjectNull(state) {
            state.getProjectData={};
        },
        isShowProjectWindow(state) {
            state.showProjectWindow=!state.showProjectWindow;
        }
    },
    actions: {
        getProjectTasks({commit}, projectId) {
            console.log(projectId)
            axios.get(`http://radiant-ridge-41845.herokuapp.com/api/project/1`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    commit('getProjectTasks', res.data);
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        getAllProjects({commit}) {
            axios.get('https://radiant-ridge-41845.herokuapp.com/api/project')
                .then(res => {
                    // console.log(res.data)
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