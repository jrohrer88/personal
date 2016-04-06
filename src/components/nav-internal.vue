<template>

<nav>
    <ul>
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
    export default {
        data: function () {
            return {
                showOptions: false
            };
        }
    }
</script>
