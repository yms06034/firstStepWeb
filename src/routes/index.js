import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from './Home'
import InfoComponent from './Info'
import ReviewComponent from './Review'
import CmntyComponent from './Cmnty'
import NoticeComponent from './Notice'
import Info_DetailComponent from './Info_Detail'
import Info_PostComponent from './Info_Post'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/Info', component: InfoComponent },
        { path: '/Review', component: ReviewComponent },
        { path: '/Cmnty', component: CmntyComponent },
        { path: '/Notice', component: NoticeComponent },
        { path: '/Info_Detail', component: Info_DetailComponent },
        { path: '/Info_Post', component: Info_PostComponent }
    ]
})