<template>
  <div class="home">
    <div id="Fishing">
      <h1 id="fish">Fishing Logs</h1>
      <router-link class="logButtons" v-bind:to ="{name: 'fishing-new-log'}">
        Create new Log </router-link>
        <router-link class="logButtons" v-bind:to ="{name: 'view-fishing-logs'}">
        View your logs </router-link>
    </div>

    <div id="Hunting">
      <h1 id="hunt">Hunting Logs</h1>
      <router-link class="logButtons" v-bind:to ="{name: 'hunting-new-log'}">
        Create new Log</router-link>
        <router-link class="logButtons" v-bind:to=" {name: 'view-hunting-logs'}">
                View your logs </router-link>
    </div>

    <div id="Scouting">
      <h1 id="scout">Scouting Reports</h1>
      <router-link class="logButtons" v-bind:to ="{name: 'scouting-report-new-log'}">
        Create new Log</router-link>
        <router-link class="logButtons" v-bind:to="{name: 'view-scouting-logs'}">
        View your logs  </router-link>
    </div>

    <div id="Hiking">
      <h1 id="hike">Hiking Logs</h1>
     <router-link class="logButtons" v-bind:to ="{name: 'hiking-new-log'}">
        Create new Log</router-link>
      <router-link class="logButtons" v-bind:to="{ name: 'view-hiking-logs'}">
        View your logs  </router-link> 
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
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "fishing hunting"
    "scouting hiking";
    column-gap: 1vh;
    row-gap: 1vh;
}

#Fishing{
  grid-area: fishing;
  border: .5vh solid black;
  background: rgb(9, 9, 80);
  background-image: url("../assets/Fishing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  box-shadow: 6px 6px 6px rgb(0, 0, 0);
}
#fish{
   color: rgb(12, 9, 9);
   font-size: 7vh;
    font-family: 'Lobster',  Arial, Helvetica cursive;
     text-shadow:  4px 4px 4px rgb(255, 255, 255), 0 0 25px #ffffff, 0 0 10px rgb(254, 254, 255);
     align-self: flex-start;
}
.logButtons{
 background-color: rgba(12, 109, 36, 0.808);
  color: #f7fafc;
  text-decoration: none;
  border-radius: 1vh;
  padding: 2vh;
  font-size: 17px;
  font-weight: bold;
  margin: 1vh;
  margin-bottom: 2vh;
  text-align: center;
  cursor: pointer;
  width: 60%;
  justify-self: flex-end;
  box-sizing: border-box;
  border:2px solid rgb(1, 51, 1);
  width: 10vw;
  box-shadow: 11px 11px 11px rgb(0, 0, 0);
  text-shadow: 4px 4px 4px black;
}
.logButtons:hover {
  background-color: rgb(2, 33, 54);
   box-shadow: 16px 16px 16px rgb(0, 0, 0);
}

#Hunting{
  grid-area: hunting;
   background-image: url("../assets/buck.jpg");
  background-size: cover;
  background-repeat: no-repeat;
   border: .5vh solid black;
   /* background: rgb(83, 78, 65); */
    display: flex;
  align-items: flex-end;
  justify-content: space-around;
  box-shadow: 6px 6px 6px rgb(0, 0, 0);
}
#hunt{
  color: rgb(12, 9, 9);
   font-size: 7vh;
    font-family: 'Lobster',  Arial, Helvetica cursive;
     text-shadow: 4px 4px 4px rgb(255, 255, 255), 0 0 25px rgb(254, 254, 255), 0 0 10px rgb(255, 255, 255);
      align-self: flex-start;
}

#Scouting{
  grid-area: scouting;
   border: .5vh solid black;
   /* background: rgb(85, 110, 85); */
   background-image: url("../assets/Scout.jpg");
  background-size: cover;
  background-repeat: no-repeat;
    display: flex;
  align-items: flex-end;
  justify-content: space-around;
  box-shadow: 6px 6px 6px rgb(0, 0, 0);
}
#scout{
  color: black;
  font-size: 7vh;
   font-family: 'Lobster',  Arial, Helvetica cursive;
     text-shadow:  4px 4px 4px rgb(255, 255, 255), 0 0 25px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
      align-self: flex-start;
}

#Hiking{
grid-area: hiking;
 border: .5vh solid black;
 /* background: rgb(94, 9, 9); */
 background-image: url("../assets/Hiking.jpg");
 /* background-size: 100%; */
background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  box-shadow: 6px 6px 6px rgb(0, 0, 0);
}
#hike{
  color: black;
  font-size: 7vh;
   font-family: 'Lobster',  Arial, Helvetica cursive;
     text-shadow:  4px 4px 4px rgb(255, 255, 255), 0 0 25px rgb(255, 255, 255), 0 0 10px rgb(253, 253, 255);
      align-self: flex-start;
}

@media only screen and (max-width: 950px){
  .home{
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    /* "header header" */
    "fishing"
     "hunting"
    "scouting"
     "hiking";
    column-gap: 1vh;
    row-gap: 1vh;
}
#fish{
   font-size: 3vh;
}
#hunt{
  font-size: 3vh;
}
#scout{
  font-size: 3vh;
}
#hike{
  font-size: 3vh;
}
.logButtons{
  font-size: 3vw;
  justify-self: flex-end;
  box-sizing: border-box;
  border:2px solid rgb(1, 51, 1);
  width: 20vw;
  box-shadow: 11px 11px 11px rgb(0, 0, 0);
  height: 7vh;
  padding-top: .8vh;
}
}
</style>