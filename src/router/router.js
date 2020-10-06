import Vue from 'vue'
import Router from 'vue-router'
import tmLogin from '../components/auth/tm-login'
import tmRegistration from '../components/auth/tm-registration'
import tmChangePassword from '../components/auth/tm-change-password'
import tmMainPage from '../components/tm-main-page'
import tmMyTasks from '../components/tm-my-tasks'
import tmProject from '../components/tm-project'
import tmProjects from '../components/tm-projects'
import store from '../vuex/store'
Vue.use(Router);

let router=new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'auth',
            component: tmLogin
        },
        {
            path: '/registration',
            name: 'registration',
            component: tmRegistration
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: tmChangePassword
        },
        {
            path: '/mainPage',
            name: 'mainPage',
            component: tmMainPage,
            beforeEnter(to,from,next) {
                store.state.user.id ? next() : next('/');
            }
        },
        {
            path: '/MyTasks',
            name: 'tmMyTasks',
            component: tmMyTasks,
            beforeEnter(to,from,next) {
                store.state.user.id ? next() : next('/');
            }
        },
        {
            path: '/projects',
            name: 'tmProjects',
            component: tmProjects,
            beforeEnter(to,from,next) {
                store.state.user.id ? next() : next('/');
            }
        },
        {
            path: '/project',
            name: 'tmProject',
            component: tmProject,
            beforeEnter(to,from,next) {
                store.state.user.id ? next() : next('/');
            }
        }
    ]
})

export default router;