<template xmlns:v-on="http://fake.org/fake">
    <div class="bandit">
        <div clasS="bandit__numbers-container">
            <number v-for="n in digits" :key="n" v-bind:order="n">
            </number>
        </div>
        <button class="bandit__button" v-on:click="setNumber">Pick Winner</button>
    </div>
</template>

<script>
    import { EventBus } from './../event-bus.js';
    import Number from './Number.vue';
    import {generateNumber} from './generateNumber';

    export default {
        name      : 'Bandit',
        components: {
            'number': Number
        },
        data      : function () {
            return {
                digits: 3,
                winner: '000'
            }
        },
        methods   : {
            setNumber() {
                const number = generateNumber();
                this.winner  = String("000" + number).slice(-3);
                EventBus.$emit('new-winner', this.winner);
            }
        }
    }
</script>

<style lang="sass">
    .bandit {
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        font-family: 'Courgette', cursive;
    }

    .bandit__button {
        z-index: 1000;
    }

    .bandit__numbers-container {
        display: flex;
    }
</style>