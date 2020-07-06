<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Loading</router-link>
            |
            <router-link to="/menu">Menu</router-link>
        </div>
        <transition name="slide" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

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
        top: 0;
        left: 0;
        right: 0;
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
