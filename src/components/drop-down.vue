<style lang="scss">

.highlight {
    background-color: grey;
}

.drop-down {
    width: 15em;
    input {
        margin-bottom: 0;
        border-radius: 0;
        &:hover {
            cursor: pointer;
        }
    }
    ul {
        box-sizing: border-box;
        border: .15em solid #ddd;
        margin: 0;
        padding: 0;
        background-color: #eee;
        overflow-y: scroll;
        overflow-x: hidden;
        li {
            margin: 0;
            border-bottom: .15em solid #ddd;
            padding: .25em 0;
            &:before {
                content: "";
            }
        }
    }
    a {
        text-align: center;
        display: block;
    }
}

.expand-transition {
    transition: all .3s ease;
    background-color: #eee;
    max-height: 10em;
}

.expand-enter,
.expand-leave {
    opacity: 0;
    height: 0;
}

</style>

<template>

<div class="drop-down">
    <input type="text" readonly="true" value="{{currentValue}}" @click="listVisible = !listVisible">
    <ul class="options" v-show="listVisible" transition="expand">
        <li :class="{highlight: currentValue === option}" v-for="option in options">
            <a @click="setOption(option, $index)" href="#">{{option}}</a>
        </li>
    </ul>
</div>

</template>

<script>

export default {
    data: function() {
        return {
            currentIndex: 0,
            currentValue: '-- Select One --',
            listVisible: false
        }
    },
    props: ['options'],
    methods: {
        setOption: function(option, index) {
            this.currentIndex = index;
            this.currentValue = option;
            this.listVisible = false;
            var reference = this;
            var eventData = {
                reference: reference,
                value: reference.currentValue,
                index: reference.currentIndex
            };
            this.$dispatch('option-changed', eventData);
        }
    }
};

</script>
