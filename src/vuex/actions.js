export const userSignedIn = function({dispatch, state}) {
    dispatch('CHANGELOGIN', true);
};

export const userSignedOut = function({dispatch, state}) {
    delete window.localStorage.userToken;
    dispatch('CHANGELOGIN', false);
};
