<style>
</style>

<template>
    <nav-internal v-if="loggedIn"></nav-internal>
    <nav-external v-if="!loggedIn"></nav-external>
</template>

<script>
    import {getLoginStatus} from '../vuex/getters';
    import navExternal from './nav-external';
    import navInternal from './nav-internal';

    export default {
        components: {
            navInternal,
            navExternal
        },
        vuex: {
            getters: {
                loggedIn: getLoginStatus
            }
        }
    }
</script>
