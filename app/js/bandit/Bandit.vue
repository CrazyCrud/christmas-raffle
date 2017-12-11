<template>
    <div class="bandit">
        <div v-for="n in digits" ref="digits" class="bandit__number bandit-number">
            <div class="bandit-number__digits">
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
    </div>
</template>

<script>

    import {generateNumber} from './generateNumber';

    export default {
        name: 'Bandit',
        data: function () {
            return {
                digits: 3
            }
        },
        methods: {
            setNumber() {
                const number = generateNumber();
                const formattedNumber = String("000" + number).slice(-3);

                this.$refs.digits;
            }
        }
    }
</script>

<style lang="sass">
    .bandit {

    }

    .bandit__number {
        width: 100px;
        height: 150px;
        float: left;
        overflow: hidden;
        transition: opacity 1000ms 500ms;
    }

    .bandit-number__digits {
        position: relative;
        width: 100px;
        height: 150px;
        transform-origin: 50% 50% -231px;
        transform-style: preserve-3d;
        transition: transform 2000ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .bandit-number__digit {
        width: 100px;
        height: 150px;
        position: absolute;
        text-align: center;
        line-height: 150px;
        font-size: 150px;
        transform-origin: 50% 50% -231px;
        backface-visibility: hidden;
    }

    .bandit-number__digit:nth-child(1) { transform: rotateX(0deg); }
    .bandit-number__digit:nth-child(2) { transform: rotateX(-36deg); }
    .bandit-number__digit:nth-child(3) { transform: rotateX(-72deg); }
    .bandit-number__digit:nth-child(4) { transform: rotateX(-108deg); }
    .bandit-number__digit:nth-child(5) { transform: rotateX(-144deg); }
    .bandit-number__digit:nth-child(6) { transform: rotateX(-180deg); }
    .bandit-number__digit:nth-child(7) { transform: rotateX(-216deg); }
    .bandit-number__digit:nth-child(8) { transform: rotateX(-252deg); }
    .bandit-number__digit:nth-child(9) { transform: rotateX(-288deg); }
    .bandit-number__digit:nth-child(10) { transform: rotateX(-324deg); }
</style>