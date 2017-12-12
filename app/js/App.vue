<template>
    <div>
        <bandit></bandit>
        <results></results>
    </div>
</template>

<script>
    import Bandit from './bandit/Bandit.vue';
    import Results from './results/Results.vue';

    export default {
        components: {
            'bandit': Bandit,
            'results': Results
        }
    }
</script>

<style>
</style>