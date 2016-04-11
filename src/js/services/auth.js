// URL and endpoint constants
const API_URL = 'development.local:4000/';
const USER_URL = API_URL + 'App/User/';

function addAuth(router) {
    router.beforeEach(function(transition) {
        let localToken = window.localStorage.userToken || '';
        if (transition.to.auth) {
            if (localToken === '') {
                this.$http.get(USER_URL + '?Action=CheckToken' + '&UserToken=' + localToken)
                    .then(function(response) {
                        if (response.Message === '0') {
                            transition.redirect('/login');
                        } else {
                            transition.next();
                        }
                    });
            }
        } else {
            transition.next();
        }
    });
}

export default addAuth;
