<template xmlns:v-on="http://fake.org/fake">
    <div class="bandit">
        <number v-for="n in digits" :key="n" v-bind:winner="winner.charAt(n - 1)">
        </number>
        <button class="bandit__button" v-on:click="setNumber">Pick Winner</button>
    </div>
</template>

<script>
    import Number from './Number.vue';
    import {generateNumber} from './generateNumber';

    export default {
        name: 'Bandit',
        components: {
            'number': Number
        },
        data: function () {
            return {
                digits: 3,
                winner: '000'
            }
        },
        methods: {
            setNumber() {
                const number = generateNumber();
                this.winner = String("000" + number).slice(-3);

            }
        }
    }
</script>

<style lang="sass">
    .bandit {

    }

    .bandit__button {
        z-index: 1000;
    }
</style>