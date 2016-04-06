<template>
    <nav-external></nav-external>
    <router-view></router-view>
</template>

<script>
    import navExternal from './components/nav-external.vue';

    export default {
        replace: false,
        components: {
            navExternal
        }
    }
</script>
