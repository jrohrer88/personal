<template>
    <navigation></navigation>
    <router-view></router-view>
</template>

<script>
    import navigation from './components/navigation';
    import store from './vuex/store';
    import {userSignedIn, userSignedOut} from './vuex/actions';
    import {getLoginStatus} from './vuex/getters';

    export default {
        replace: false,
        components: {
            navigation
        },
        vuex: {
            actions: {
                userSignedIn: userSignedIn,
                userSignedOut: userSignedOut
            },
            getters: {
                isLoggedIn: getLoginStatus
            }
        },
        store: store
    }
</script>

<style lang="scss">
  @import "scss/base.scss";
</style>
