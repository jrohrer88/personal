// modules
import Vue from 'vue';
import Router from 'vue-router';

// Vue's
import Root from './root';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Styleguide from './pages/styleguide';
import Dashboard from './pages/dashboard';
import Picblend from './pages/picblend';

// libraries
import draggable from './js/directives/draggable';

// App code
Vue.use(Router);

let router = new Router();

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
        }
    }
});

draggable(Vue);

router.start(Root, 'body');
