<template>
    <div class="results">
        <h3 class="results__headline">Die Gewinner</h3>
        <ul class="results__list">
            <li class="results__item" v-for="winner in sharedState.winners">{{winner}}</li>
        </ul>
    </div>
</template>
<script>
    import {Store} from '../store/store';

    export default {
        name   : 'Results',
        data   : function () {
            return {
                sharedState: Store.state
            }
        },
        methods: {}
    }
</script>
<style lang="sass">
    .results {
        width: 360px;
        min-height: 360px;
        position: absolute;
        right: -80px;
        top: -80px;
        border-radius: 260px;
        background: rgba(10, 10, 10, 0.6);
        padding: 10px 20px;
        padding-top: 80px;
        color: white;
        text-align: center;
    }

    .results__headline {
        text-transform: uppercase;
    }

    .results__list {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 2rem;
        font-family: 'Courgette', cursive;
     }

    .results__item {
        line-height: 3.8rem;
    }
</style>