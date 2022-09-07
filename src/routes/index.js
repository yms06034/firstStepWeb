import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from './Home'
import InfoComponent from './Info'
import Info_DetailComponent from './Info_Detail'
import Info_PostComponent from './Info_Post'
import ReviewComponent from './Review'
import Review_PostComponent from './Review_Post'
import CmntyComponent from './Cmnty'
import NoticeComponent from './Notice'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/Info', component: InfoComponent },
        { path: '/Info_Detail', component: Info_DetailComponent },
        { path: '/Info_Post', component: Info_PostComponent },
        { path: '/Review', component: ReviewComponent },
        { path: '/Review_Post', component: Review_PostComponent },
        { path: '/Cmnty', component: CmntyComponent },
        { path: '/Notice', component: NoticeComponent },
    ]
})