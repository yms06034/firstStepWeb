import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from './Home'
import InfoComponent from './Info'
import Info_DetailComponent from './Info_Detail'
import Info_PostComponent from './Info_Post'
import ReviewComponent from './Review'
import Review_DetailComponent from './Review_Detail'
import Review_PostComponent from './Review_Post'
import CmntyComponent from './Cmnty'
import NoticeComponent from './Notice'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior(){
      return { top: 0 }
  },
  routes: [
    { path: '/', component: HomeComponent , meta: { scrollToTop: true }},
    { path: '/Info', component: InfoComponent , meta: { scrollToTop: true }},
    { path: '/Info_Detail', component: Info_DetailComponent , meta: { scrollToTop: true }},
    { path: '/Info_Post', component: Info_PostComponent , meta: { scrollToTop: true }},
    { path: '/Review', component: ReviewComponent , meta: { scrollToTop: true }},
    { path: '/Review_Detail', component: Review_DetailComponent , meta: { scrollToTop: true }},
    { path: '/Review_Post', component: Review_PostComponent , meta: { scrollToTop: true }},
    { path: '/Cmnty', component: CmntyComponent , meta: { scrollToTop: true }},
    { path: '/Notice', component: NoticeComponent , meta: { scrollToTop: true }},
  ]
})