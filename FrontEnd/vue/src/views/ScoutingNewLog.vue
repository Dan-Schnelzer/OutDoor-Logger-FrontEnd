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
          <form>
            <h1>Create a new Scouting Report</h1>
            <label class="labels" for="date">Choose the Date :</label>
            <input
              type="date"
              id="date"
              name="date"
              v-model="newScoutLog.reportDate"
              required = true
            />
            <label class="labels" for="location">Scouting Location :</label>
            <textarea
              id="location"
              name="location"
              rows="2"
              cols="50"
              class="input"
              v-model="newScoutLog.reportLocation"
              placeholder="Scouting Locations   (max 200 characters)"
              maxlength="200"
            ></textarea>
            <label class="labels" for="time">Scout Report Time :</label>
            <textarea
              rows="4"
              cols="50"
              id="time"
              name="time"
              placeholder="Time of Day  (max 50 characters)"
              class="input"
              v-model="newScoutLog.reportTime"
              maxlength="50"
            ></textarea>
            <label class="labels" for="weather">Weather Conditions :</label>
            <textarea
              id="weather"
              name="weather"
              rows="2"
              cols="50"
              class="input"
              v-model="newScoutLog.weather"
              placeholder="Scouting Weather  (max 100 characters)"
              maxlength="100"
            ></textarea>
            <label class="labels" for="description">Scouting Report Description :</label>
            <textarea
              rows="5"
              cols="50"
              id="description"
              name="description"
              placeholder="Required*  What is scouting description?    (max 2000 characters)"
              class="input"
              v-model="newScoutLog.scoutDescription"
              maxlength="2000"
              required= true
            ></textarea>
            <div id="save-buttons">
              <button id="save" v-on:click.prevent="createScoutLog">Save</button>
            </div>
          </form>
        </div>
    
    </article>

</div>
</template>

<script>
export default {
    name: "scouting-report-new-log",
    data(){
      return{
        newScoutLog: {
           userID: this.$store.state.user.id,
        reportDate: "",
        reportLocation: "",
        scoutDescription: "",
        imageURL: "This would be image url",
        reportTime: "",
        weather: "",
        },
      };
    },
    methods:{
      createScoutLog(){
         if (this.newScoutLog.reportDate != "" && this.newScoutLog.scoutDescription != ""){
      const newScoutLog = {
        ...this.newScoutLog,
      };
      this.$store.dispatch("CREATE_NEW_SCOUT_LOG", newScoutLog);
      this.$router.push( { name: "home" });
    }
    else  window.confirm("* Date and Description required *");
    }
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
     font-size: 4vh;
    text-decoration: underline;
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
#save-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 4vh;
  margin-top: 4vh;
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