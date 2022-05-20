<template>
  <body>
    <div id= "container">
    <div id="login" class="text-center">
        <div id="Out-Door">
          <h1>Welcome to the</h1>
        <h1 class="h3 ">Out-Door Logger</h1>
        </div>
      <form class="form-container" @submit.prevent="login">
        <!-- <div id="LoggingIn"> -->
        <div class="alert" role="alert" v-if="invalidCredentials">
          Invalid username and password!
        </div>
        <div
          class="alert"
          role="alert"
          v-if="this.$route.query.registration"
        >
          Thank you for registering, please sign in.
        </div>
        <div id ="UserName">
        <label for="username" class="sr-only">Username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="Username"
          v-model="user.username"
          required
          autofocus
        />
        </div>
        <div id="Password">
                  <label for="password" class="sr-only">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="Password"
          v-model="user.password"
          required
        />
        </div>
        <div id="ButtonS">
        <button id="SignIn" type="submit">Sign in</button>
       <button id="needAccount"> <router-link id="NeedAcct" :to="{ name: 'register' }">Need an account?</router-link> </button>
       </div>
        <!-- </div> -->
      </form>
    </div>
    </div>
  </body>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
  },
};
</script>
<style scoped>

#container {
  background-image: url("../assets/Background-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  border: solid .5vh  rgb(36, 73, 194);
}
.alert{
  font-size: 3vh;
}
#Out-Door{
  text-align: center;
  padding: 3vh;
  font-size: 2.5vh;
  color: rgb(0, 0, 0);
  text-shadow: 4px 4px 4px gray, 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
  font-family: 'Lobster',  Arial, Helvetica cursive;
}
.h3{
  font-size: 9vh;
  margin-top: -4vh;
}

form {
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  padding-left: 10vw;
}
/* #LoggingIn{
  display: flex; 
 
  justify-self: flex-end; 
  flex-basis: 100%;
 } */

#username{
  border-radius: 1vh;
  width: 15vw;
  height: 3vh;
 margin-left: 1vw;
 box-shadow: 6px 6px 6px rgb(51, 50, 50);
}
#UserName{
  margin-left: 6vw;
  padding: 1vh;
  font-weight: bolder;
  font-size: 3vh;
  font-family: 'Lobster', cursive;
}
#password{
  border-radius: 1vh;
  width: 15vw;
  height: 3vh;
 margin-left: 1.3vw;
box-shadow: 6px 6px 6px rgb(51, 50, 50);
}
#Password{
  margin-left: 6vw;
  padding: 1vh;
  font-weight: bolder;
  font-size: 3vh;
  font-family: 'Lobster', cursive;
}
#ButtonS{
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 1vh;
  padding-top: 5vh;
  margin-left: 13vw;
}
#SignIn{
  height: 4vh;
  margin: 1vh;
  width: 10vw;
  border-radius: 1vh;
  background-color: rgba(63, 156, 38, 0.856);
  font-weight: bolder;
  color: white;
  box-shadow: 4px 4px 4px rgb(51, 50, 50);
}
#SignIn:hover{
  background-color: rgb(1, 59, 1);
  box-shadow: 8px 8px 4px rgb(51, 50, 50);
}
#needAccount{
   height: 4vh;
  margin: 1vh;
  width: 10vw;
  border-radius: 1vh;
  background-color: rgba(63, 156, 38, 0.856);
  color: white;
  font-weight: bolder;
  box-shadow: 4px 4px 4px rgb(51, 50, 50);
}
#needAccount:hover{
   background-color: rgb(1, 59, 1);
   box-shadow: 8px 8px 4px rgb(51, 50, 50);
}
#NeedAcct{
  color: white;
  text-decoration: none;
}  


@media only screen and (max-width: 1300px) {
  #container {
  background-image: url("../assets/BackgroundSmall2.jpg");
   background-repeat: no-repeat;
  background-size: cover;
  
  border: solid .5vh  rgb(36, 73, 194);
  }
  form {
  padding-top: 15vh;
  align-items: center;
}
.alert{
  font-size: 2vh;
  color: rgb(134, 134, 134);
}
 #username{
  width: 29vw;
 }
 #password{
   width: 29vw;
 }
 #Password{
   color: rgb(255, 255, 255);
   font-size: 5vw;
    text-shadow: 7px 9px 10px  black;
   
 }
 #UserName{
   color: white;
   font-size: 5vw;
    text-shadow: 7px 9px 10px  black;
 }
#SignIn{
  width: 27vw;
  height: 5.5vh;
} 

 #needAccount{
  width: 27vw;
  height: 5.5vh;
}
h1{
  font-size: 9vw;
  margin-top: 0vh;
}
.h3{
  font-size: 11vw;
}
#ButtonS{
  margin-left: 5vw;
  margin-top: -3vh;
}
}

</style>
