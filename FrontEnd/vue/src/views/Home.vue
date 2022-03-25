<template>
  <div class="home">
    <div id="Fishing">
      <h1>Fishing Logs</h1>
      <button>
        Create new Log
      </button>
      <button>  <router-link v-bind:to ="{name: 'fishing-new-log'}">
        View your logs </router-link>
      </button> 
    </div>

    <div id="Hunting">
      <h1>Hunting Logs</h1>
    </div>

    <div id="Scouting">
      <h1>Scouting Report</h1>
    </div>

    <div id="Hiking">
      <h1>Hiking Logs</h1>
    </div>





   
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
 
.home{
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    /* "header header" */
    "fishing hunting"
    "scouting hiking";
    column-gap: 1vh;
    row-gap: 1vh;
}

#Fishing{
  grid-area: fishing;
  border: .5vh solid black;
}

#Hunting{
  grid-area: hunting;
   border: .5vh solid black;
}

#Scouting{
  grid-area: scouting;
   border: .5vh solid black;
}

#Hiking{
grid-area: hiking;
 border: .5vh solid black;
}
</style>