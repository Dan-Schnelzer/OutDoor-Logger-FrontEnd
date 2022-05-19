<template>
    <div class="header-component">
        <div> 
         <img id="logo" src="../assets/OutLogo2.png">
        </div>
        <div>
        <p> The Out-Door Logger </p>
            <!-- <router-link  v-bind:to="{name: 'home'}"  > Home </router-link> -->
                <!-- img goes here -->
        </div>

<div id="links">
      
        <router-link id="homeLink"
          v-bind:to="{ name: 'home' }"
          v-if="$store.state.token != ''"
          class="link"
          >Home
        </router-link>
    
     
        <router-link id="logout"
          v-bind:to="{ name: 'logout' }"
          v-if="$store.state.token != ''"
          class="link"
          >Logout
        </router-link>
      
    </div>


        </div>
</template>

<script>
    export default {
        name: "head-component",
    };
</script>

<style scoped>
.header-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  border: none;
  border-bottom: solid 4px #b4b0ad;
  background-image: linear-gradient( #02144d,rgb(201, 196, 196),#02144d);
   background-image: url("../assets/Wooden.jpg");
   background-size: 45%;
  color: #464443;
   box-shadow: 10px 10px 10px rgb(0, 0, 0);
  min-height: 13vh;
  max-height: 13vh;
  border-radius: 10px;
  width: 100%;
}
p{
  color: white;
  font-size: 3vw;
  padding: 0vh 0vh 0vh 0vh;
  margin: 0vh 0vh 0vh 0vh;
   font-family: 'Lobster',  Arial, Helvetica cursive;
   text-shadow: 7px 9px 10px  black;
   background-image: url("../assets/flagBack.jpg");
   background-size: cover;
   min-width: 30vw;
   text-align: center;
   padding: 1vh 2vh  2vh 1vh;
   -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
      outline: 2px solid rgb(105, 96, 96) ;
      box-shadow: 10px 10px 10px rgb(0, 0, 0);
}

#homeLink{
  color: white;
  padding-right: 2vw;
  font-size: 3vh;
  
}
#links{
  display: flex;
  padding-right: 2vw;
  
}
#logout{
  color: white;
 
  font-size: 3vh;
  /* BE SURE TO CHANGE THIS WHEN MAKING SCREEN FOR PHONES... THE SIZE NEEDS TO BE VW AND NOT VH ******** */
}
#logo{
  max-width: 7vw;
  /* max-width: 50%; */
  border-radius: 10px;
  margin-left: 4vw;
  margin-top: .5vh;
  outline: 2px solid rgb(105, 96, 96) ;
  box-shadow: 10px 10px 10px rgb(0, 0, 0);
}
@media only screen and (max-width: 950px){
  .header-component {
    max-height: 10vh;
    min-height: 10vh;
  }
  #homeLink{
  font-size: 2vh;
}
#logout{
  font-size: 2vh;
  /* BE SURE TO CHANGE THIS WHEN MAKING SCREEN FOR PHONES... THE SIZE NEEDS TO BE VW AND NOT VH ******** */
}
#logo{
  max-width: 13vw;
}
#links{
  display: flex;
  flex-direction: column;
  padding-right: 2vw;
}
p{
  font-size: 5vw;
  padding-top: 1.5vh;
    outline: 1px solid rgb(255, 255, 255) ;
    
}
}
@media only screen and (max-width: 500px){
  #logo{
  max-width: 18vw;
}
}

</style>
