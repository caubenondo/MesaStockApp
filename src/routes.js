
import Home from './components/Home.vue'
// import Menu from './components/Menu.vue'
const Menu = () => import('./components/Menu.vue')
// above code is lazyload

// import Admin from './components/Admin.vue'
const Admin =()=> import('./components/Admin.vue')

// import About from './components/About.vue'
const About = () => import('./components/About.vue')


import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
    { path: '/', name: 'homeLink', components: {
        // router-view that has no name
        default: Home,
        // name to call in template router-view when route == '/' : name that is imported to this js
        "Ordering-Guide": OrderingGuide,
        'History': History,
        "Contact":Contact
    } },
    { path: '/menu', name: 'menuLink', component: Menu },
    {
        path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) => {
            alert('this is the retrict area');
            next();
        }
    },
    { path: '*', redirect: '/' },
    {
        path: '/about', name: 'aboutLink', component: About, children: [
            { path: '/contact', name: 'contactLink', component: Contact },
            { path: '/history', name: 'historyLink', component: History },
            { path: '/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
        ]
    }
]