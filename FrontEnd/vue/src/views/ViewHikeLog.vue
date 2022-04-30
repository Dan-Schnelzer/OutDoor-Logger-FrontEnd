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

        <router-link :to="{ name: 'hiking-new-log' }" class="nav-button">
        Create New Hiking Log</router-link>
    </nav>
   <article id="form-background">
          <!-- <div id="fishLog"> -->
           <div id="headLine">
         <h1 class="logLocation">{{  hikeLog.logLocation }} </h1>
                <p class="logDate">{{ hikeLog.logDate }}</p>
           </div>
           <div id="imageBig">
              <p class="imageURL">{{  hikeLog.imageURL }} :  images  </p>
              <!-- ***** this is what we will figure out later- loading the images here ****** -->
           </div>
          <div id="rightSide">
         <p class="hikeLogId"> Hike-Log Id : {{ hikeLog.hikingLogId }} </p>
        <p class="logProps"> Hike-Log State : </p>
        <p class="logData" > {{  hikeLog.logState }}  </p>
        <p class="logProps"> Weather Conditions : </p>
        <p class="logData" >{{  hikeLog.weather }}</p>
          </div>
          <div id="logDesc">
        <p id="logDescription"> Hike-Log Description : </p>
        <p class="logData">  {{  hikeLog.logDescription }}</p>
          <!-- </div> -->
        
         
          </div>
   </article>
  </div>
</template>

<script>
export default {
 name: 'view-hike-log',
 data(){
     return{};
 },

 created(){
    this.$store.dispatch("LOAD_HIKE_LOG", this.$route.params.id);
  },
  computed:{
      hikeLog(){
          return this.$store.state.hikeLog;
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


#form-background{
    grid-area: body;
 background: linear-gradient(rgb(31, 29, 29),blue, rgb(54, 156, 68), rgb(24, 22, 22));
     display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "headLine headLine headLine"
    "image image right-side"
    "image image right-side"
    "desc desc desc";
  column-gap: 10px;
}

#headLine{
  grid-area: headLine;
  /* min-width: 70%; */
}

#imageBig{
  grid-area: image;
 
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
}
#form-background {
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  /* padding: 30px;
  font-size: 18px;
  margin-bottom: 3vh; */
}
.hikeLogId {
  font-size: 3vh;
  font-weight: bold;
}
.logDate{
  font-size: 3vh;
  font-weight: bold;
  text-align: center;
  margin-top: 0vh;

}
.logLocation {
  font-size: 4vw;
  font-weight: bold;
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 0vh;

}
#logDescription {
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0vh;
}
.imageURL {
  font-size: 3vh;
  font-weight: bold;
}
.logProps {
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0vh;
}
.weather {
  font-size: 3vh;
  font-weight: bold;
}


</style>