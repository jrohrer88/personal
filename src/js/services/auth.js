// check authorization
const API_URL = 'http://development.local:4000/';
const USER_URL = API_URL + 'App/User/';

function addAuth(router, Vue) {
    // check auth routes
    router.beforeEach(function(transition) {
        let localToken = window.localStorage.userToken || '';

        if (transition.to.auth || transition.to.name === 'home') {
            console.log('transitioning to auth route');
            if (localToken && localToken !== '') {
                Vue.http.get(USER_URL + '?Action=CheckToken' + '&UserToken=' + localToken)
                    .then(function(response) {
                        if (response.Message === '0') {
                            console.log('not authorized');
                            if (router.app.isLoggedIn) {
                                router.app.userSignedOut();
                            }
                            transition.redirect('/login');
                        } else {
                            console.log('authorized!');
                            if (!router.app.isLoggedIn) {
                                router.app.userSignedIn();
                            }
                            if (transition.to.name === 'home') {
                                transition.redirect('/dash');
                            } else {
                                transition.next();
                            }
                        }
                    });
            } else {
                console.log('no local token');
                if (transition.to.name === 'home') {
                    transition.next();
                } else {
                    transition.redirect('/login');
                }
            }
        } else {
            console.log('transitioning to regular route');
            transition.next();
        }
    });
}

export default addAuth;
