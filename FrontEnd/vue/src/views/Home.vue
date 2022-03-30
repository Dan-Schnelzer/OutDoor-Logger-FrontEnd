<template>
  <div class="home">
    <div id="Fishing">
      <h1 id="fish">Fishing Logs</h1>
      <button ><router-link class="fishButton" v-bind:to ="{name: 'fishing-new-log'}">
        Create new Log </router-link>
      </button>
      <button >  <router-link class="fishButton" v-bind:to ="{name: 'view-fishing-logs'}">
        View your logs </router-link>
      </button> 
    </div>

    <div id="Hunting">
      <h1>Hunting Logs</h1>
      <button><router-link v-bind:to ="{name: 'hunting-new-log'}">
        Create new Log</router-link>
      </button>
      <button>  <router-link v-bind:to=" {name: 'view-hunting-logs'}">
                View your logs </router-link>
      </button> 
    </div>

    <div id="Scouting">
      <div id="Scout">
      <h1>Scouting Report</h1>
      </div>
      <button><router-link v-bind:to ="{name: 'scouting-report-new-log'}">
        Create new Log</router-link>
      </button>
      <button>  <router-link v-bind:to="{name: 'view-scouting-logs'}">
        View your logs  </router-link>
      </button> 
    </div>

    <div id="Hiking">
      <div id="Hike">
      <h1>Hiking Logs</h1>
      </div>
      <button><router-link v-bind:to ="{name: 'hiking-new-log'}">
        Create new Log</router-link>
      </button>
      <button>  <router-link v-bind:to="{ name: 'view-hiking-logs'}">
        View your logs  </router-link>
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
  background-image: url("../assets/Trout2.jpg");
  background-size: 100%;
  
}
#fish{
   /* justify-self: center;    was trying to center the text, going to need to move things */
   color: white;
}
.fishButton:hover{
  background-color: rgb(100, 100, 151);
}

#Hunting{
  grid-area: hunting;
   border: .5vh solid black;
   background: rgb(83, 78, 65);
}

#Scouting{
  grid-area: scouting;
   border: .5vh solid black;
   background: rgb(85, 110, 85);
}

#Hiking{
grid-area: hiking;
 border: .5vh solid black;
 /* background: rgb(94, 9, 9); */
 background-image: url("../assets/Hiking.jpg");
 background-size: 100%;

}
#Hike{
  color: rgb(253, 0, 0);
}
</style>