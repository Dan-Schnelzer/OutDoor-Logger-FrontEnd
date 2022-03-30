<template>
    <div class="header-component">
        <div id = "logo"> <p> This is space filler for logo </p>
        <p> OutDoor Logger </p>
            <!-- <router-link  v-bind:to="{name: 'home'}"  > Home </router-link> -->
                <!-- img goes here -->
        </div>

<div id="links">
      <div id="home">  
        <router-link id="homeLink"
          v-bind:to="{ name: 'home' }"
          v-if="$store.state.token != ''"
          class="link"
          >Home
        </router-link>
      </div>
      <div id="logout"> 
        <router-link id="logout"
          v-bind:to="{ name: 'logout' }"
          v-if="$store.state.token != ''"
          class="link"
          >Logout
        </router-link>
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
  border-bottom: solid 4px #b4b0ad;
  background-image: linear-gradient( #02144d,rgb(201, 196, 196),#02144d);
  color: #464443;
  
}
p{
  color: white;
  
}

#homeLink{
  color: white;
  padding: 2vh;
  
}

#logout{
  color: white;
  padding: 2vh;
}
</style>
