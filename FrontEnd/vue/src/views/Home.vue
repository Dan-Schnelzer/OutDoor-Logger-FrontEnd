<template>
  <div class="home">
    <div id="Fishing">
      <h1>Fishing Logs</h1>
      <button><router-link v-bind:to ="{name: 'fishing-new-log'}">
        Create new Log </router-link>
      </button>
      <button>  
        View your logs 
      </button> 
    </div>

    <div id="Hunting">
      <h1>Hunting Logs</h1>
      <button><router-link v-bind:to ="{name: 'hunting-new-log'}">
        Create new Log</router-link>
      </button>
      <button>  
        View your logs 
      </button> 
    </div>

    <div id="Scouting">
      <h1>Scouting Report</h1>
      <button><router-link v-bind:to ="{name: 'scouting-report-new-log'}">
        Create new Log</router-link>
      </button>
      <button>  
        View your logs 
      </button> 
    </div>

    <div id="Hiking">
      <h1>Hiking Logs</h1>
      <button><router-link v-bind:to ="{name: 'hiking-new-log'}">
        Create new Log</router-link>
      </button>
      <button>  
        View your logs 
      </button> 
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
  background: rgb(9, 9, 80);
}

#Hunting{
  grid-area: hunting;
   border: .5vh solid black;
   background: rgb(177, 116, 3);
}

#Scouting{
  grid-area: scouting;
   border: .5vh solid black;
   background: rgb(8, 145, 8);
}

#Hiking{
grid-area: hiking;
 border: .5vh solid black;
 background: rgb(94, 9, 9);
}
</style>