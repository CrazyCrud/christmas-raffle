<template>
    <div>
        <bandit></bandit>
        <results></results>
        <present></present>
    </div>
</template>

<script>
    import {Audioplayer} from './audio';
    import Present from './present/Present.vue';
    import Bandit from './bandit/Bandit.vue';
    import Results from './results/Results.vue';

    export default {
        components: {
            'bandit': Bandit,
            'results': Results,
            'present': Present
        },
        mounted: function() {
            Audioplayer.playBackground();
        }
    }
</script>

<style>
</style>