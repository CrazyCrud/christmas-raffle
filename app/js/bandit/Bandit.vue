<template xmlns:v-bind="http://fake.org/fake" xmlns:v-on="http://fake.org/fake">
    <div v-bind:class="{'bandit--hidden': !isVisible}" class="bandit" ref="bandit">
        <div class="bandit__numbers-container">
            <number v-for="n in digits" :key="n" v-bind:order="n">
            </number>
        </div>
    </div>
</template>

<script>
    import {EventBus} from './../event-bus.js';
    import {Store} from '../store/store';
    import {Audioplayer} from '../audio';
    import Number from './Number.vue';
    import {generateNumber} from './generateNumber';

    export default {
        name      : 'Bandit',
        components: {
            'number': Number
        },
        data      : function () {
            return {
                digits   : 3,
                winner   : '000',
                isVisible: false,
                isReady: false
            }
        },
        methods   : {
            setNumber() {
                let number;
                do {
                    number = generateNumber();
                } while (Store.state.winners.includes(number));

                this.winner = String("000" + number).slice(-3);
                EventBus.$emit('new-winner', this.winner);
            },
            slideIn() {

            }
        },
        mounted   : function () {
            EventBus.$on('bandit-completed', () => {
                Store.addValue(parseInt(this.winner));
                Audioplayer.playCrowd();
            });

            EventBus.$on('start-spinning', () => {
                if(this.isReady){
                    Audioplayer.playSlotMachine();
                    this.setNumber();
                }
            });

            EventBus.$on('present-opened', () => {
                console.log('present opened');
                this.isVisible = true;
                TweenMax.to(this.$refs.bandit, 4, {ease: Back.easeOut.config(1.7), top:"20%", repeat:0, onComplete: () => {
                    this.isReady = true;
                }});
            });
        }
    }
</script>

<style lang="sass">
    .bandit {
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%);
        box-shadow: 2px 2px 20px black;
    }

    .bandit--hidden {
        display: none;
    }

    .bandit__numbers-container {
        display: flex;
        border: 1px solid black;
    }
</style>