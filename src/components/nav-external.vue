<template>
    <nav>
        <ul>
            <li v-link-active>
                <a v-link="{ name: 'home', exact: true}">Home</a>
            </li>
            <li v-link-active>
                <a v-link="{ name: 'about'}">About</a>
            </li v-link-active>
            <li v-link-active>
                <a v-link="{ name: 'contact'}">Contact</a>
            </li>
            <li v-link-active>
                <a v-link="{ name: 'styleguide'}">Style Guide</a>
            </li>
            <li v-link-active>
                <a v-link="{ name: 'login'}">Login</a>
            </li>
            <li v-link-active>
                <a v-link="{ name: 'register'}">Register</a>
            </li>
            <li v-link-active>
                <a v-link="{ name: 'dash'}">DashBoard</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    @import '../scss/_logic.scss';
</style>

<script>

    export default {
    }

</script>
