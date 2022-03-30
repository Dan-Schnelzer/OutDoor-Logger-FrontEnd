<template>
<body>
  
  <div id="app">
    <header>
    <head-component/>
    </header>
    <div id="nav">
      <!-- <router-link v-bind:to="{ name: 'home' }">Home</router-link>&nbsp;|&nbsp; -->
      <!-- <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link> -->
    </div>
    <router-view />
  </div>
  </body>
</template>

<script>
import HeadComponent from "./components/HeadComponent.vue";
export default {
  components: {
    HeadComponent,
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Source+Sans+Pro:wght@200&display=swap"); 
#app {
  height: 100 vh;
  /* background-image: url("./assets/dan-river.png"); */
}

body{
  background: radial-gradient(black,rgb(126, 120, 120),black);
}

</style>