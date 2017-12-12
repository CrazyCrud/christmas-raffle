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
        width: 260px;
        min-height: 300px;
        position: absolute;
        right: 5%;
        top: 5%;
        background: pink;
        padding: 10px 20px;
    }

    .results__headline {
        text-transform: uppercase;
    }

    .results__list {
        list-style: none;
        font-size: 2rem;
        font-family: 'Courgette', cursive;
     }

    .results__item {
        line-height: 3.8rem;
    }
</style>