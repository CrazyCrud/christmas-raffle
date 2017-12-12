<template xmlns:v-on="http://fake.org/fake">
    <div class="bandit">
        <div clasS="bandit__numbers-container">
            <number v-for="n in digits" :key="n" v-bind:order="n">
            </number>
        </div>
    </div>
</template>

<script>
    import { EventBus } from './../event-bus.js';
    import {Store} from '../store/store';
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
                let number;
                do {
                    number = generateNumber();
                } while(Store.state.winners.includes(number));

                this.winner  = String("000" + number).slice(-3);
                EventBus.$emit('new-winner', this.winner);
            }
        },
        mounted: function () {
            EventBus.$on('bandit-completed', () => {
                Store.addValue(parseInt(this.winner));
            });

            EventBus.$on('start-spinning', () => {
                this.setNumber();
            });
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
        box-shadow: 2px 2px 20px black;
    }

    .bandit__button {
        z-index: 1000;
    }

    .bandit__numbers-container {
        display: flex;
        border: 1px solid black;
    }
</style>