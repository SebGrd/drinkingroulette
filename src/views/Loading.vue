<template>
    <div class="loading">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Drinking<br>Roulette</h1>

        <Loader class="loader" color="#45484B" size="80px"/>

        <p>Please drink with moderation</p>
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
            setTimeout(() => this.$router.push({ path: '/menu' }), 2000)
        }
    }
</script>

<style scoped>

    img{
        margin-top: 60px;
        width: 200px;
    }

    h1{
        margin-top: 20px;
        margin-bottom: 60px;
        font-weight: 300;
        font-size: 64px;
        line-height: 0.85;
        color: #45484B;
        text-shadow: #00000026;
    }

    p{
        color: #63676b;
    }

    .loader{
        margin-bottom: 40px;
    }

    .loading{
        text-align: center;

        min-height: 100vh;

        background-image: url("../assets/wavelayer.png");
        background-position: bottom;
        background-repeat: no-repeat;
    }
</style>
