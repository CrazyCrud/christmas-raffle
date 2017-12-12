<template>
    <div>
        <bandit></bandit>
        <results></results>
    </div>
</template>

<script>
    import {Audioplayer} from './audio';
    import Bandit from './bandit/Bandit.vue';
    import Results from './results/Results.vue';

    export default {
        components: {
            'bandit': Bandit,
            'results': Results
        },
        mounted: function() {
            new Audioplayer().playBackground();
        }
    }
</script>

<style>
</style>