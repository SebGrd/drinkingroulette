<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Loading</router-link>
            |
            <router-link to="/menu">Menu</router-link>
            |
            <router-link to="/drinks-selection">Selection</router-link>
        </div>
        <transition name="slide" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import uuid from 'uuid'

    export default {
        name: 'App',
        data() {
            return {
                alcoholRate: 60,
                softs:
                    [{
                        id: 0,
                        name: 'Coca'
                    }, {
                        id: 1,
                        name: 'Orangina'
                    }, {
                        id: 2,
                        name: 'Jus d\'orange'
                    }],
                alcohol:
                    [{
                        id: 0,
                        name: 'Vodka'
                    }, {
                        id: 1,
                        name: 'Whisky'
                    }, {
                        id: 2,
                        name: 'Get27'
                    }, {
                        id: 3,
                        name: 'Rhum'
                    }]
            }
        },
        methods: {
            addSoft: function (name) {
                this.softs = [{id: uuid.v4(), name}, ...this.softs]
            },
            addAlcohol: function (name) {
                this.softs = [{id: uuid.v4(), name}, ...this.alcohol]
            }
        },
        mounted() {
            console.log(this.softs)
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
