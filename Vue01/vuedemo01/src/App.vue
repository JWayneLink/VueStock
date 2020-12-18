<template>
  <div id="app">
    <MainNavBar></MainNavBar>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import MainNavBar from './components/MainNavBar.vue'


  export default {
    name: 'App',
    components: {
      // 'HelloWorld': HelloWorld,
      'MainNavBar': MainNavBar,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>