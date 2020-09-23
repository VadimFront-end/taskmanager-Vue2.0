import Vue from 'vue'
import Router from 'vue-router'
import tmLogin from '../components/tm-login'
import tmRegistration from '../components/tm-registration'
import tmChangePassword from '../components/tm-change-password'
import tmMainPage from '../components/tm-main-page'
import tmMyTasks from '../components/tm-my-tasks'
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
        }
    ]
})

export default router;