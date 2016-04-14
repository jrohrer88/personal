<template>

<nav>
    <ul>
        <li>
            <a @click="logOut">Logout</a>
        </li>
        <li v-link-active>
            <a v-link="{ name: 'dash'}">Dashboard</a>
        </li>
        <li v-link-active>
            <a @click="showOptions = !showOptions">Create</a>
        </li>
        <div v-show="showOptions">
            <ul>
                <li><a>FaceBook Ad</a></li>
                <li><a>Twitter Ad</a></li>
                <li><a v-link="{ name: 'picblend'}">Ad Builder</a></li>
            </ul>
        </div>
    </ul>
</nav>

</template>

<script>
    import {userSignedOut} from '../vuex/actions';

    export default {
        data: function () {
            return {
                showOptions: false
            };
        },
        vuex: {
            actions: {
                logOut: userSignedOut
            }
        }
    }
</script>
