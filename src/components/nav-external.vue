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
        </ul>
    </nav>
</template>

<style lang="scss">
    @import '../scss/base.scss';
    nav {
        background-color: $grey;
    }
</style>
