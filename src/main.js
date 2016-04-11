// modules
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

// Vue's
import Root from './root';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Styleguide from './pages/styleguide';
import Dashboard from './pages/dashboard';
import Picblend from './pages/picblend';
import NotFound from './pages/404';
import Login from './pages/login';

// libraries
import draggable from './js/directives/draggable';
import auth from './js/services/auth';

Vue.config.debug = true;

// App code
Vue.use(Resource);
Vue.use(Router);

let router = new Router({
    hashbang: false,
    history: true,
    linkActiveClass: 'active'
});

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
            '/picblend': {
                name: 'picblend',
                component: Picblend
            }
        },
        auth: true
    },
    '/login': {
            name: 'login',
            component: Login
    },
    '/404': {
        name: '404',
        component: NotFound
    }
});

router.redirect({
    '*': '/404'
});

auth(router);
draggable(Vue);

router.start(Root, 'body');
