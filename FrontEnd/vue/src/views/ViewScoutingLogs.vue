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

         <router-link :to="{ name: 'scouting-report-new-log' }" class="nav-button">
        Create New Scouting Report</router-link>
    </nav>
    <article id="form-background">
        <h1>My Scouting Reports</h1>

        <table id="logTable">
         <thead>
  <tr>
    <th>Log Id</th>
    <th>Date</th>
    <th>Location</th>
    <th></th>
  </tr>
         </thead>
        <tbody>
      <tr class="ScoutLogs" v-for="scoutLog in $store.state.scoutLogs" v-bind:key="scoutLog.id" >
        <td class="data" id="scoutLogId"> # : {{ scoutLog.scoutReportID }}</td>
        <td class="data" id="logDate">{{ scoutLog.reportDate }} </td>
         <td class="data" id="logLocation">{{  scoutLog.reportLocation }}</td>
        <td>  <router-link  :to = "{ name: 'view-scout-log', params: {id: scoutLog.scoutReportID}}"> <button id="viewLogButton"> View  Log </button></router-link> </td>
      </tr>
        </tbody>

    </table>
        
    </article>

</div>
</template>

<script>

export default {
name: 'view-scouting-logs',
components: {
 },
data(){
  return{
    scoutLog: [],
    scoutLogs: [],
  };
},
created(){
  this.$store.dispatch("LOAD_ALL_SCOUT_LOGS", this.$store.state.user.id);
},

};
</script>

<style scoped>

.view {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
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
  box-shadow: 6px 6px 6px rgb(2, 2, 2);
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
  box-shadow: 9px 9px  rgb(0, 0, 0);
}
.nav-button:hover {
  background-color: rgb(2, 33, 54);
  box-shadow: 18px 18px 18px rgb(0, 0, 0);
}
h1{
    text-align: center;
    color: white;
    font-size: 5vh;
    text-shadow:  10px 10px 10px rgb(0, 0, 0), 0 0 25px rgb(0, 0, 0), 0 0px 15px rgb(0, 0, 0);
}

#form-background{
    grid-area: body;
  background: linear-gradient(rgb(31, 29, 29),blue, rgb(54, 156, 68), rgb(24, 22, 22));
   border: 3px solid black;
    box-shadow: 10px 10px 10px rgb(0, 0, 0);
}


.scoutLogs {
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 30px;
  font-size: 18px;
  margin-bottom: 3vh;
}
#scoutLogId {
  font-size: 3vh;
  font-weight: bold;
}
#logDate{
  font-size: 2vh;
  font-weight: bold;
}
#logLocation {
  font-size: 2vh;
  font-weight: bold;
}

#logTable {
  width: 90%;
  border: 5px solid black;
   border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    /* font-family: sans-serif; */
     font-family: 'Lobster',  Arial, Helvetica cursive;
    min-width: 50vw;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: 3.5vw;
    margin-top: 10vh;
    background: linear-gradient(rgb(179, 174, 248), #4d3bf3);
    box-shadow: 12px 12px 12px rgb(0, 0, 0);
}
#logTable thead  tr {
    /* background-color: #009879; */
     background-image: url("../assets/Camo.jpg");
      background-size: 100%;
    color: #ffffff;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 4.5vh;
    text-shadow:  10px 10px 10px rgb(0, 0, 0), 0 0 25px rgb(0, 0, 0), 0 0px 15px rgb(0, 0, 0);
 
}
#logTable  th,
.data {
    padding-left: 1vw;
    min-width: 8vw;
    max-width: 36vw;
}
#logTable td{
   border-right: 5px solid black;
}
#logTable tbody  tr {
    border-bottom: 1px solid #dddddd;
    
}

#logTable tbody  tr:nth-of-type(even) {
    background-color: #746d6d;
}

#logTable tbody tr:last-of-type {
    border-bottom: 1vh solid #080050;
}
#viewLogButton{
  width: 100%;
  height: 5.5vh;
  box-shadow: 6px 6px 6px rgb(0, 0, 0);
  font-weight: bolder;
  font-size: 2vh;
  background: linear-gradient(white, white,rgb(20, 107, 10));
}
#viewLogButton:hover{
  background: gray;
  box-shadow: 10px 10px 10px rgb(0, 0, 0);
}


@media only screen and (max-width: 950px){
  .view {
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav"
     "body";
  column-gap: 10px;
}
nav {
flex-direction: row;
flex-wrap: wrap;
max-height: 15vh;
justify-content: space-evenly ;
padding: 0px;
}
#form-background{
 height: 82vh;

}
.nav-button {
  height: 10vw;
  padding: 1vw;
  font-size: 2.5vw;
  width: 20vw;
  margin: .2vh;
  margin-bottom: 0vw;
  margin-top: 0vw;
    box-shadow: 6px 6px  rgb(0, 0, 0);
}
#logTable td{
   border-right: 2px solid black;
}

#scoutLogId {
  font-size: 4vw;
}
#logDate{
  font-size: 3vw;
}
#logLocation {
  font-size: 3vw;
}

#logTable thead  tr {
  font-size: 6vw;
}
#logTable {
  min-width: 95%;
  margin-left: 2vw;
}
#viewLogButton{
  font-size: 3vw;
}
#logTable  th,
.data {
  min-width: 15vw;
}
h1{
  padding-top: 3vh;
  margin-bottom: -5vh;
  font-size: 3vh;
}
}

</style>