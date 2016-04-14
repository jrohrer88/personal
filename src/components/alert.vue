<style></style>

<template>
    <div class="{{classes}}" v-show="triggerAlert">
        <div class="col-md-10">
            <div v-for="data in dataList">{{data.message}}</div>
        </div>
        <div class="col-md-2">
            <div class="close" @click="triggerAlert = !triggerAlert">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['triggerAlert', 'dataList', 'classes']
    };
</script>
