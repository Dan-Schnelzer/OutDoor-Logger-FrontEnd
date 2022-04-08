<template>
  <div class="view">
    <nav>
      <router-link :to="{ name: 'view-fishing-logs' }" class="nav-button"     
        >View Fishing Logs</router-link>
                                                
      <router-link :to="{ name: 'view-hunting-logs' }" class="nav-button">
        View Hunting Logs</router-link>
      
      <router-link :to="{ name: 'view-scouting-logs' }" class="nav-button">
        View Scouting Reports</router-link>
      
      <router-link :to="{ name: 'view-hiking-logs' }" class="nav-button">
        View Hiking Logs</router-link>

        <router-link :to="{ name: 'fishing-new-log' }" class="nav-button">
        Create New Fishing Log?</router-link>
    </nav>
   <article id="form-background">
          <div id="fishLog">
            <p>should be reading this</p>
         <p class="fishLogId">{{ fishLog.fishLogId }} :   logId</p>
        <p class="logDate">{{ fishLog.logDate }} :  Date</p>
         <p class="logLocation">{{  fishLog.logLocation }} :   Location</p>
        <p class="logDescription">{{  fishLog.logDescription }} :   log Description</p>
         <p class="imageURL">{{  fishLog.imageURL }} :  images  </p>
           <p class="bait">{{  fishLog.bait }} :   bait was</p>
        <p class="weather">{{  fishLog.weather }} :   weather</p>
         <p class="fishingTrip">{{  fishLog.fishingTrip }} :  fishingTrip  </p>
          </div>
   </article>
  </div>
</template>

<script>
export default {
 name: 'view-fish-log',
 data(){
     return{};
 },
//   fishLog: [],
 created(){
    this.$store.dispatch("LOAD_FISH_LOG", this.$route.params.id);
  },
  computed:{
      fishLog(){
          return this.$store.state.fishLog;
      },
  }
 
}
</script>

<style scoped>
.view {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-areas:
    "nav body";
  column-gap: 10px;
}

nav {
  grid-area: nav;
  /* padding-top: 184.5px; */
  padding-bottom: 20px;
  /* overflow-x: hidden; */
  /* background: linear-gradient(rgb(94, 46, 8), rgb(201, 97, 7)); */
  /* background-image: url("../assets/lighter-blue-green-background.png"); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid rgb(44, 19, 8);
   background-image: url("../assets/Camo.jpg");
  background-size: 100%;
  box-shadow: 6px 6px 6px rgb(51, 50, 50);
}

.nav-button {
  background-color: rgb(12, 109, 36);
  color: #f7fafc;
  text-decoration: none;
  border-radius: 1vh;
  padding: 3vh;
  font-size: 17px;
  font-weight: bold;
  margin: 1vh;
  text-align: center;
  cursor: pointer;
  width: 60%;
  justify-self: flex-end;
  box-sizing: border-box;
  border:2px solid rgb(51, 255, 0);
  width: 78%;
  box-shadow: 8px 8px 8px rgb(0, 0, 0);
}
.nav-button:hover {
  background-color: rgb(2, 33, 54);
  box-shadow: 16px 16px 16px rgb(0, 0, 0);
}
h1{
    text-align: center;
    color: white;
}

#form-background{
    grid-area: body;
    background: linear-gradient(  rgb(247, 138, 13), blue, rgb(54, 156, 68), rgb(31, 29, 29) );
    
}

#fishLog {
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 30px;
  font-size: 18px;
  margin-bottom: 3vh;
}
.fishLogId {
  font-size: 3vh;
  font-weight: bold;
}
.logDate{
  font-size: 3vh;
  font-weight: bold;
}
.logLocation {
  font-size: 3vh;
  font-weight: bold;
}
.logDescription {
  font-size: 3vh;
  font-weight: bold;
}
.imageURL {
  font-size: 3vh;
  font-weight: bold;
}
.bait {
  font-size: 3vh;
  font-weight: bold;
}
.weather {
  font-size: 3vh;
  font-weight: bold;
}
.fishingTrip {
  font-size: 3vh;
  font-weight: bold;
}

</style>