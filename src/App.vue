<template>
  <div
    id="app"
    class="h-screen bg-gray-200 flex flex-col"
  >
    <div
      v-show="this.$route.path !== '/game'"
      id="nav"
    >
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/game">
        Game
      </router-link> |
      <router-link to="/squeedoo">
        Squeedoo
      </router-link> |
      <router-link to="/highscore">
        Highscore
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/cards">
        Cards
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
