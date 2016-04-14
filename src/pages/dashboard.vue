<template>
    <h1>Dashboard</h1>
    <router-view></router-view>
</template>

<script>
    import navInternal from '../components/nav-internal';

    export default {
        components: {
            navInternal
        }
    }
</script>
