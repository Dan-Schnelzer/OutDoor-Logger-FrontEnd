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
        Create New Fishing Log</router-link>

         <router-link id="edit" class="nav-button" :to="{ name:'edit-fish-log', params: {id: fishLog.fishLogId}  }">
             EDIT FISH <br> * LOG *   </router-link>
    </nav>
   <article id="form-background">
          <!-- <div id="fishLog"> -->
           <div id="headLine">
         <h1 class="logLocation">{{  fishLog.logLocation }} </h1>
                <p class="logDate">{{ fishLog.logDate }}</p>
           </div>
           <div id="imageBig">
              <p class="imageURL">{{  fishLog.imageURL }} :  images  </p>
              <!-- ***** this is what we will figure out later- loading the images here ****** -->
           </div>
          <div id="rightSide">
         <p class="fishLogId"> Fish-Log Id : {{ fishLog.fishLogId }} </p>
        <p class="logProps"> Fishing Trip : </p>
        <p class="logData" > {{  fishLog.fishingTrip }}  </p>
        <p class="logProps"> Bait Used : </p>
        <p class="logData"> {{  fishLog.bait }} </p>
        <p class="logProps"> Weather Conditions : </p>
        <p class="logData" >{{  fishLog.weather }}</p>
          </div>
          <div id="logDesc">
        <p id="logDescription"> Fish-Log Description : </p>
        <p class="logData">  {{  fishLog.logDescription }}</p>
          <!-- </div> -->
         
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
  border: 3px solid rgb(0, 0, 0);
   background-image: url("../assets/Camo.jpg");
  background-size: 100%;
  box-shadow: 6px 6px 6px rgb(0, 0, 0);
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
  box-shadow: 12px 12px 12px rgb(0, 0, 0);
}
.nav-button:hover {
  background-color: rgb(2, 33, 54);
  box-shadow: 18px 18px 18px rgb(0, 0, 0);
}


#form-background{
    grid-area: body;
     display: grid;
      /* background: white; */
       background-image: url("../assets/backG7.jpg");
       background-size: 100%;
  border: solid 3px black;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "headLine headLine headLine"
    "image image right-side"
    "image image right-side"
    "desc desc desc";
  column-gap: 10px;
  box-shadow: 10px 10px 10px rgb(0, 0, 0);
}

#headLine{
  grid-area: headLine;
  /* min-width: 70%; */
}

#imageBig{
  grid-area: image;
 border: 3px solid black;
}

#rightSide{
  grid-area: right-side;
  justify-self: center;
  
}
#logDesc{
  grid-area: desc;
  margin-left: 3vh;
}

.logData{
  font-size: 3vh;
   font-family: 'Lobster',  Arial, Helvetica cursive;
   margin-top: 0vh;
    text-shadow: 1px 1px 1px rgb(255, 255, 255);
}

.fishLogId {
  font-size: 4vh;
  font-weight: bold;
}
.logDate{
  font-size: 5vh;
  font-weight: bold;
  text-align: center;
  margin-top: 0vh;

}
.logLocation {
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 0vh;

}
#logDescription {
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 0vh;
}
.imageURL {
  font-size: 3vh;
  font-weight: bold;
}
.logProps {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0vh;
}

#edit{
  text-decoration: underline;
}

</style>