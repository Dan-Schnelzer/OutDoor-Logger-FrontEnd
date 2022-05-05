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
    </nav>
    <article id="form-background">
        <div id="form-container">
            <h1>Create a new Hiking Log</h1>
          <form v-if="this.$store.state.user.id == this.hikeLog.userId" >
            <label class="labels" for="date">Choose the Date :</label>
            <input
              type="date"
              id="date"
              name="date"
              v-model="hikeLog.logDate"
              required = true
            />
            <label class="labels" for="location">Hiking Location :</label>
            <textarea
              id="location"
              name="location"
              rows="2"
              cols="50"
              class="input"
              v-model="hikeLog.logLocation"
              placeholder="Hiking Locations   (max 200 characters)"
              maxlength="200"
            ></textarea>
            <label class="labels" for="bait">Which State did you Hike in? :</label>
            <textarea
              rows="4"
              cols="50"
              id="state"
              name="state"
              placeholder="Required*  Hiking State  (max 30 characters)"
              class="input"
              v-model="hikeLog.logState"
              maxlength="30"
              required = true
            ></textarea>
            <label class="labels" for="weather">Weather Conditions :</label>
            <textarea
              id="weather"
              name="weather"
              rows="2"
              cols="50"
              class="input"
              v-model="hikeLog.weather"
              placeholder="Hiking Weather  (max 50 characters)"
              maxlength="50"
            ></textarea>
            <label class="labels" for="description">Hiking Log Description :</label>
            <textarea
              rows="5"
              cols="50"
              id="description"
              name="description"
              placeholder="Required*  What is log description?    (max 2000 characters)"
              class="input"
              v-model="hikeLog.logDescription"
              maxlength="2000"
              required= true
            ></textarea>
            <div id="buttons">
              <button id="save" v-on:click.prevent="editHikeLog">Save</button>
              <button id="delete" v-on:click.prevent="deleteHikeLog(hikeLog.hikingLogId)"> Delete </button>
            </div>
          </form>
        </div>

    </article>

</div>
</template>

<script>
import HikingLogService from "../services/HikingLogService.js"
export default {
 name: 'edit-hike-log',
    data(){
        return{
            hikeLog: {},
        };
    },
    methods: {
        deleteHikeLog(hikeLogId){
           if (window.confirm("Are you sure you want to delete?")){
        this.$store.dispatch("DELETE_HIKE_LOG", hikeLogId);
        this.$router.push( { name: "home" } );
      } 
        },
        editHikeLog(){
           if (this.hikeLog.logDate != "" && this.hikeLog.logDescription != ""){
      const editedHikeLog = { ...this.hikeLog};
      this.$store.dispatch("EDIT_HIKE_LOG", editedHikeLog);
    }else  window.confirm("* Date and Description required *");
    } 
    },
     computed: {},
  created(){
    HikingLogService.getHikeLogById( (this.$route.params.id)   ).then( (Response) => {
      this.hikeLog = Response.data;
    });
  },

}
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
h1{
    text-align: center;
    color: white;
}

#form-background{
    grid-area: body;
     background: linear-gradient(rgb(31, 29, 29),blue, rgb(54, 156, 68), rgb(24, 22, 22));
     border: 3px solid black;
    box-shadow: 10px 10px 10px rgb(0, 0, 0);
}

#form-container {
  grid-area: body;
  min-height: 60vh;
  /* background-image: url("../assets/lighter-blue-green-background.png"); */
}
form {
  display: flex;
  flex-direction: column;
  padding: 4vh 10vh;
}
button {
  border: none;
  color: white;
  background-color: rgba(0, 167, 88, 255);
  padding: 1.5vh 5vh;
  border-radius: 10px;
}
button:hover {
   background-color: rgb(27, 206, 4);
   box-shadow: 10px 10px 10px rgb(0, 0, 0);
}
#buttons {
  display: flex;
  justify-content: flex-end;
  gap: 4vh;
  margin-top: 4vh;
}
#delete{
  background-color: rgb(173, 49, 49);
}
#delete:hover{
  background-color: red;
}
.input {
  width: 100%;
  right: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  padding: 12px 20px 12px 12px;
  margin: 1vh 3vh 2vh 0vh;
  box-shadow: 10px 10px 10px rgb(0, 0, 0);
}
.input:focus {
  outline: none;
  border-color: black;
}
::placeholder {
  color: rgb(97, 95, 95);
}
#date{
  max-width: 20vw;
  min-height: 4vh;
  margin-bottom:  2vh;
  box-shadow: 10px 10px 10px rgb(0, 0, 0);
}
.labels{
  color: white;
  font-size: 3vh;
       font-family: 'Lobster',  Arial, Helvetica cursive;
}
</style>