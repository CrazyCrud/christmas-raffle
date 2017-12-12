<template xmlns:v-bind="http://fake.org/fake">
    <div class="bandit__number bandit-number">
        <div class="bandit-number__digits" ref="digits">
            <div class="bandit-number__digit">0</div>
            <div class="bandit-number__digit">1</div>
            <div class="bandit-number__digit">2</div>
            <div class="bandit-number__digit">3</div>
            <div class="bandit-number__digit">4</div>
            <div class="bandit-number__digit">5</div>
            <div class="bandit-number__digit">6</div>
            <div class="bandit-number__digit">7</div>
            <div class="bandit-number__digit">8</div>
            <div class="bandit-number__digit">9</div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from './../event-bus.js';

    export default {
        name   : 'Number',
        data   : function () {
            return {
                number: 0,
                angle : 0,
                spins : 5
            }
        },
        methods: {
            spinNumber() {
                this.angle = 36 * this.number;
                TweenMax.to(this.$refs.digits, 6, {
                    rotationX: (this.spins * 360) + this.angle, ease: Power1.easeInOut, repeat: 0, onComplete: () => {
                        TweenMax.to(this.$refs.digits, 0, {rotationX: this.angle});
                        EventBus.$emit('bandit-completed');
                    }
                });
            }
        },
        props  : {
            order : [Number]
        },
        mounted: function () {
            EventBus.$on('new-winner', (winner) => {
                this.number = parseInt(winner.charAt(this.order - 1));
                this.spinNumber();
            });
        }
    }
</script>

<style lang="sass">
    .bandit__number {
        width: 100px;
        height: 150px;
        float: left;
        overflow: hidden;
        transition: opacity 1000ms 500ms;
        border: 2px solid black;
    }

    .bandit-number__digits {
        position: relative;
        width: 100px;
        height: 150px;
        background: white;
        transform-origin: 50% 50% -231px;
        transform-style: preserve-3d;
    }

    .bandit-number__digit {
        width: 100px;
        height: 150px;
        position: absolute;
        background: white;
        text-align: center;
        line-height: 130px;
        font-size: 150px;
        transform-origin: 50% 50% -231px;
        backface-visibility: hidden;
    }

    .bandit-number__digit:nth-child(1) {
        transform: rotateX(0deg);
    }

    .bandit-number__digit:nth-child(2) {
        transform: rotateX(-36deg);
    }

    .bandit-number__digit:nth-child(3) {
        transform: rotateX(-72deg);
    }

    .bandit-number__digit:nth-child(4) {
        transform: rotateX(-108deg);
    }

    .bandit-number__digit:nth-child(5) {
        transform: rotateX(-144deg);
    }

    .bandit-number__digit:nth-child(6) {
        transform: rotateX(-180deg);
    }

    .bandit-number__digit:nth-child(7) {
        transform: rotateX(-216deg);
    }

    .bandit-number__digit:nth-child(8) {
        transform: rotateX(-252deg);
    }

    .bandit-number__digit:nth-child(9) {
        transform: rotateX(-288deg);
    }

    .bandit-number__digit:nth-child(10) {
        transform: rotateX(-324deg);
    }
</style>