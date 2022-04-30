<template>
  <body>
    <div id= "container">
    <div id="login" class="text-center">
      <form class="form-signin" @submit.prevent="login">
        <div id="Out-Door">
          <h1>Welcome to the</h1>
        <h1 class="h3 ">Out-Door Logger</h1>
        </div>
        <div id="LoggingIn">
        <div class="alert alert-danger" role="alert" v-if="invalidCredentials">
          Invalid username and password!
        </div>
        <div
          class="alert alert-success"
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
        </div>
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
  background-image: url("../assets/Background.jpg");
  background-repeat: no-repeat;
  /* background-size: 100vw; */
  background-size: cover;
  min-height: 100vh;
  border: solid 1vh  rgb(36, 73, 194);
 
}

#Out-Door{
  /* display: flex; */
  text-align: center;
  padding: 3vh;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 2.5vh;
  color: rgb(0, 0, 0);
  text-shadow: 4px 4px 4px gray, 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
  font-family: 'Lobster',  Arial, Helvetica cursive;
}
.h3{
  font-size: 9vh;
  margin-top: -4vh;
}
#LoggingIn{
  /* display: flex; */
 
  justify-content: space-around;
  /* flex-basis: 100%; */
}

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
  font-size: 20px;
  font-family: 'Lobster', cursive;
}
#password{
  border-radius: 1vh;
  width: 15vw;
  height: 3vh;
 margin-left: 1vw;
box-shadow: 6px 6px 6px rgb(51, 50, 50);
}
#Password{
  margin-left: 6vw;
  padding: 1vh;
  font-weight: bolder;
  font-size: 20px;
  font-family: 'Lobster', cursive;
}
#ButtonS{
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 1vh;
  margin-left: 14vw;
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


@media only screen and (max-width: 800px) {
  #container {
  background-image: url("../assets/BackgroundSmall.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  border: solid 1vh  rgb(36, 73, 194);
  }
 #username{
  width: 20vw;
 }
 #password{
   width: 20vw;
 }
#SignIn{
  width: 20vw;
}

#needAccount{
  width: 20vw;
}


}

</style>
