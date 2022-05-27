import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from './Home'
import InfoComponent from './Info'



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeComponent},
        { path: '/Info', component: InfoComponent}
    ]
})