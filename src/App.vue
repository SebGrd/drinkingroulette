<template>
    <div id="app">
<!--        <div id="nav">-->
<!--            <router-link to="/">Loading</router-link>-->
<!--            |-->
<!--            <router-link to="/menu">Menu</router-link>-->
<!--            |-->
<!--            <router-link to="/drinks-selection">Selection</router-link>-->
<!--            |-->
<!--            <router-link to="/roulette">Roulette</router-link>-->
<!--        </div>-->
        <transition name="slide" mode="out-in">
            <router-view
                    :softs="softs" :alcohols="alcohols" :alcoholRate="alcoholRate"
                    @save-alcohols="saveAlcohols"
                    @save-softs="saveSofts"
            />
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                alcoholRate: 60,
                softs: [],
                alcohols: []
            }
        },
        methods: {
            saveAlcohols: function (alcohols) {
                localStorage.alcohols = JSON.stringify(alcohols)
                this.alcohols = alcohols
            },
            saveSofts: function (softs) {
                localStorage.softs = JSON.stringify(softs)
                this.softs = softs
            }
        },
        mounted() {
            if (localStorage.alcohols) {
                this.alcohols = JSON.parse(localStorage.alcohols)
            }
            if (localStorage.softs) {
                this.softs = JSON.parse(localStorage.softs)
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');
    @import './assets/css/style.css';

    body {
        margin: 0;
    }

    #app {
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3239;
        min-height: 100vh;
        overflow: hidden;
    }

    #nav {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        background: rgba(0, 0, 0, 0.1);

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .slide {
        &-enter {
            transform: translateX(100vw);

            &-active {
                transition: transform 0.25s ease;
            }
        }

        &-leave {
            &-active {
                transition: transform 0.25s ease;
                transform: translateX(-100vw);
            }
        }
    }


</style>
