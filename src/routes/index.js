import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from './Client/Home'
import InfoComponent from './Client/Info/Info'
import Info_DetailComponent from './Client/Info/Info_Detail'
import Info_PostComponent from './Client/Info/Info_Post'
import ReviewComponent from './Client/Review/Review'
import Review_DetailComponent from './Client/Review/Review_Detail'
import Review_PostComponent from './Client/Review/Review_Post'
import CmntyComponent from './Client/Cmnty/Cmnty'
import Cmnty_DetailComponent from './Client/Cmnty/Cmnty_Detail'
import Cmnty_PostComponent from './Client/Cmnty/Cmnty_Post'
import NoticeComponent from './Client/Notice/Notice'
import Notice_DetialComponent from './Client/Notice/Notice_Detail'
import LoginComponent from './Client/Signin/Login'
import FindpasswordComponent from './Client/Signin/Findpassword'

export default createRouter({
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        { path: '/Client/', component: HomeComponent },
        { path: '/Client/Info/Info', component: InfoComponent },
        { path: '/Client/Info/Info_Detail', component: Info_DetailComponent },
        { path: '/Client/Info/Info_Post', component: Info_PostComponent },
        { path: '/Client/Review/Review', component: ReviewComponent },
        { path: '/Client/Review/Review_Detail', component: Review_DetailComponent },
        { path: '/Client/Review/Review_Post', component: Review_PostComponent },
        { path: '/Client/Cmnty/Cmnty', component: CmntyComponent },
        { path: '/Client/Cmnty/Cmnty_Detail', component: Cmnty_DetailComponent },
        { path: '/Client/Cmnty/Cmnty_Post', component: Cmnty_PostComponent },
        { path: '/Client/Notice/Notice', component: NoticeComponent },
        { path: '/Client/Notice/Notice_Detail', component: Notice_DetialComponent },
        { path: '/Client/Signin/Login', component: LoginComponent },
        { path: '/Client/Signin/Findpassword', component: FindpasswordComponent },
    ]
})