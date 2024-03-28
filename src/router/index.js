import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/SignupPage.vue'
import HomePage from '../pages/HomePage.vue'
import { auth } from '../firebase'
const routes = [
  { path: '/', component: LoginPage,meta:{auth:false}},
  {path:"/signup", component:SignupPage,meta:{auth:false}},
  {path:"/home", component:HomePage,meta:{auth:true}},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to,from,next)=>{
  const requiresAuth=to.matched.some(recored=>recored.meta.auth);
  const currentUser=auth.currentUser;

  if(requiresAuth && !currentUser){
    next("/");
  }else if(!requiresAuth && currentUser){
    next("/home");
  }else{
   next();
  }
})
export default router;