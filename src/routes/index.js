import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from './Home'
import InfoComponent from './Info'
import ReviewComponent from './Review'
import CmntyComponent from './Cmnty'
import NoticeComponent from './Notice'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeComponent},
        { path: '/Info', component: InfoComponent},
        { path: '/Review', component: ReviewComponent},
        { path: '/Cmnty', component: CmntyComponent},
        { path: '/Notice', component: NoticeComponent}
    ]
})