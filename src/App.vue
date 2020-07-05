<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Menu</router-link>
    </div>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  body{
    margin: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3239;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-enter {
  transform: translateX(100vw);
}

.slide-enter-active {
  transition: transform 0.25s ease;
}

.slide-leave {

}

.slide-leave-active {
  transition: transform 0.25s ease;
  transform: translateX(-100vw);
}
</style>
