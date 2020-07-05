<template>
    <div class="home">
        <transition name="fade">
            <img alt="Vue logo" src="../assets/logo.png">
        </transition>

        <Loader color="black" size="80px"/>

    </div>
</template>

<script>
    import Loader from '@/components/Loader.vue'

    export default {
        name: 'Index',
        components: {
            Loader
        },
        created() {
            // setTimeout(() => this.$router.push({ path: '/about' }), 2000)
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
