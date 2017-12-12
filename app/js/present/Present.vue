<template xmlns:v-bind="http://fake.org/fake" xmlns:v-on="http://fake.org/fake">
    <div class="present animated bounceInLeft" v-bind:class="{'': !isOpen}" v-on:click="openPresent">
        <div class="present-bottom">
            <img src="img/present-bottom.svg" alt="">
        </div>
        <div class="present-top" ref="presentTop">
            <img src="img/present-top.svg" alt="">
        </div>
    </div>
</template>
<script>
    import { EventBus } from './../event-bus.js';

    export default {
        title  : 'Present',
        data   : function () {
            return {
                isOpen: false
            }
        },
        methods: {
            openPresent() {
                this.isOpen = true;
                TweenMax.to(this.$refs.presentTop, 4, {rotation: 200, transformOrigin:"right 50%", left: -20, ease: Elastic.easeOut.config(.75, .7), onComplete: () => {EventBus.$emit('present-opened');}}, {rotation: 180, transformOrigin:"right 50%"});
            }
        },
        mounted: function () {

        }
    }
</script>
<style lang="sass">
    .present {
        position: absolute;
        width: 400px;
        left: 40%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .present-top, .present-bottom {
        position: absolute;
    }

    .present-top img, .present-bottom img {
        width: 400px;
    }
</style>