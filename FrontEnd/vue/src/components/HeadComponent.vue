<template>
    <div class="header-component">
        <div id = "logo"> <p> This is space filler for logo </p>
            <!-- <router-link v-bind:to="{name: 'home'}"  > may need this later to place -->
                <!-- img goes here -->
        </div>

<div id="links">
      <div id="home">  <p> OutDoor Logger </p>
        <!-- <router-link
          v-bind:to="{ name: 'home' }"
          v-if="$store.state.token != ''"
          class="link"
          >Home
        </router-link> -->
      </div>
      <div id="logout"> <p> Logout </p>
        <!-- <router-link
          v-bind:to="{ name: 'logout' }"
          v-if="$store.state.token != ''"
          class="link"
          >Logout
        </router-link> -->
      </div>
    </div>


        </div>
</template>

<script>
    export default {
        name: "head-component",
    };
</script>

<style scoped>
.header-component {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: "logo links";
  border: none;
  border-bottom: solid 2px #b4b0ad;
  background-image: linear-gradient(white, #cad6ff);
  color: #464443;
}
</style>
