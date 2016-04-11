<style lang="scss">
@import "../scss/_logic.scss";
.highlight {
    background-color: grey;
}

.drop-down {
    width: 100%;
    position:relative;
    & input {
        margin-bottom: 0;
        border-radius: 7px;
        color: color(secondary5, base);
        &:hover {
            cursor: pointer;
        }
    }
    & ul {
      position:absolute;
        box-sizing: border-box;
        margin-top: 5px;
        padding: 5px;
        background-color: color(secondary3, dark);
        overflow-y: scroll;
        overflow-x: hidden;
        border-radius: 7px;
        background: color(secondary3, base);
        color: color(secondary3, dark);
        width: 100%;
        z-index: 1000;
        & li {
            margin: 0;
            border-bottom: 1px solid color(secondary3, dark);
            padding: .6em 0;
            text-align: center;
            color: color(secondary5, base);
            &:before {
                content: "";
            }
            &:last-child {
              border-bottom: none;
            }
            &:hover{
              background: color(secondary3, dark);
              cursor: pointer;
            }
            &.highlight{
              background: color(secondary3, dark);
            }
        }
    }
}

.expand-transition {
    transition: all .3s ease;
    height: 250px;
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
        <li :class="{highlight: currentValue === option}" v-for="option in options" @click="setOption(option, $index)">
            {{option}}
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
