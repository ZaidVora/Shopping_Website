import { createRouter, createWebHistory } from "vue-router";
//Landing Page
import HelloWorld from './components/Landing_page/HelloWorld.vue'
//Bag Page
import Bag from '@/components/Bag/BaG.vue'
import Checkout from '@/components/Bag/CheckOut.vue'
//Favourites Page
import FavouriTes from '@/components/Favourites/FavouriTes.vue'
//Profile Page
import ProFile from '@/components/Profile/ProFile.vue'
//Profile Page // other pages
import OrderS from './components/Profile/Other_pages/OrderS.vue'
import HelpSup from './components/Profile/Other_pages/HelpSup.vue'
import PaymentMet from './components/Profile/Other_pages/PaymentMet'
import ResetPass from './components/Profile/Other_pages/ResetPass.vue'
import TermsCon from './components/Profile/Other_pages/TermsCon.vue'
//Profile page /other pages/address
import AddresS from './components/Profile/Other_pages/Address/AddresS.vue'
//Profile page /other pages/address/diff address
import HomeAdd from './components/Profile/Other_pages/Address/Diff_address/HomeAdd.vue'
import OfficeAdd from './components/Profile/Other_pages/Address/Diff_address/OfficeAdd.vue'
import NewAdd from './components/Profile/Other_pages/Address/Diff_address/NewAdd.vue'
//user
import SignIn from './components/user/SignIn.vue'
import SignUp from './components/user/SignUp.vue'
import ForgotPass from './components/user/ForgotPass.vue'
import VeriFication from './components/user/VeriFication.vue'
import NewPass from './components/user/NewPass.vue'


const routes =[
    {
        name:'HelloWorld',
        component:HelloWorld,
        path:'/'
    },
    {
        path: '/bag',
        component: Bag,
      },
    {
        name:'FavouriTes',
        component:FavouriTes,
        path:'/FavouriTes'
    },
    {
        name:'ProFile',
        component:ProFile,
        path:'/ProFile'
    },
    {
       
        component:Checkout,
        path:'/Checkout'
    },
    {
        name:'OrderS',
        component:OrderS,
        path:'/OrderS'
    },
    {
        name:'ResetPass',
        component:ResetPass,
        path:'/ResetPass'
    },
    {
        name:'PaymentMet',
        component:PaymentMet,
        path:'/PaymentMet'
    },
    {
        name:'AddresS',
        component:AddresS,
        path:'/AddresS'
    },
    {
        name:'HomeAdd',
        component:HomeAdd,
        path:'/HomeAdd'
    },
    {
        name:'OfficeAdd',
        component:OfficeAdd,
        path:'/OfficeAdd'
    },
    {
        name:'NewAdd',
        component:NewAdd,
        path:'/NewAdd'
    },
    {
        name:'HelpSup',
        component:HelpSup,
        path:'/HelpSup'
    },
    {
        name:'TermsCon',
        component:TermsCon,
        path:'/TermsCon'
    },
    {
        name:'SignIn',
        component:SignIn,
        path:'/SignIn'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/SignUp'
    },
    {
        name:'ForgotPass',
        component:ForgotPass,
        path:'/ForgotPass'
    },
    {
        name:'VeriFication',
        component:VeriFication,
        path:'/VeriFication'
    },
    {
        name:'NewPass',
        component:NewPass,
        path:'/NewPass'
    }
]
const router= createRouter({
    history:createWebHistory(),
    routes
})
export default router