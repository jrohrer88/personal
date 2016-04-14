// modules
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import Vuex from 'vuex';

// Vue's
import Root from './root';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Styleguide from './pages/styleguide';
import Dashboard from './pages/dashboard';
import SubRoute from './pages/subRoute';
import NotFound from './pages/404';
import Login from './pages/login';
import Register from './pages/register';

// libraries
import draggable from './js/directives/draggable';
import auth from './js/services/auth';

Vue.config.debug = true;

// App code
Vue.use(Resource);
Vue.use(Router);
Vue.use(Vuex);

let router = new Router({
    hashbang: false,
    history: true,
    linkActiveClass: 'active'
});

export default router;

router.mode = 'html5';

router.map({
    '/': {
        name: 'home',
        component: Home
    },
    '/about': {
        name: 'about',
        component: About
    },
    '/contact': {
        name: 'contact',
        component: Contact
    },
    '/styleguide': {
        name: 'styleguide',
        component: Styleguide
    },
    '/dash': {
        name: 'dash',
        component: Dashboard,
        subRoutes: {
            '/sub-route': {
                name: 'sub-route',
                component: SubRoute
            }
        },
        auth: true
    },
    '/login': {
            name: 'login',
            component: Login
    },
    '/register': {
        name: 'register',
        component: Register
    },
    '/404': {
        name: '404',
        component: NotFound
    }
});

router.redirect({
    '*': '/404'
});

auth(router, Vue);
draggable(Vue);

router.start(Root, 'body');
