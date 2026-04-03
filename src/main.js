import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';


// ____________________fontawsome Styles_________________
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { 
            faUserSecret,
            faArrowLeft,
            faArrowRight,
            faArrowRightFromBracket,
            faEnvelope,
            faBell,
            faCircleUser,
            faMagnifyingGlass

           
        
        } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// _________________________call automaticcally____________________
import Bodyleft from './components/bodyleft/Bodyleft.vue';
// _________________________sum files____________________
import View from './components/bodyleft/View/View.vue';
// import Register from './components/register/SignIn.vue';
import Products from './components/bodyleft/Products/Products.vue';
import Settings from './components/bodyleft/settings/Settings.vue';
import SignIn from './components/register/SignIn.vue';
import SignUp from './components/register/SignUp.vue';
import User from './components/bodyleft/users/User.vue';
const app =createApp(App);


const router = createRouter({
    history:createWebHistory(),
    routes:[
        
        {path:'/',redirect:'/signin'},
        {path:'/view',component:View},
        {path:'/products',component:Products},
        {path:'/settings',component:Settings},
        {path:'/user',component:User},
        {path:'/signin',component:SignIn},
        {path:'/signup',component:SignUp},
        
       
    ]
})

library.add(
                faUserSecret,
                 faFacebook,
                 faArrowLeft,
                 faArrowRight,
                 faArrowRightFromBracket,
                faEnvelope,
                faBell,
                faCircleUser,
                faMagnifyingGlass
                  
            );
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.component("Bodyleft",Bodyleft);
app.mount('#app')
