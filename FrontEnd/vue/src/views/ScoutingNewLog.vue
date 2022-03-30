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
        <h1>This is to create new Scouting report-form</h1>
        <div >
        </div>
    </article>

</div>
</template>

<script>
export default {
    name: "scouting-report-new-log"
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


</style>