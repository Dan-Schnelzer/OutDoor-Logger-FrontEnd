<template>
  <body>
    <div id= "container">
    <div id="login" class="text-center">
      <form class="form-signin" @submit.prevent="login">
        <div id="PleaseSign">
        <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
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

        <button type="submit">Sign in</button>
        <router-link :to="{ name: 'register' }">Need an account?</router-link>
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
  background-size: cover;
  min-height: 100vh;
  margin-top: -2vh;
 
}

#PleaseSign{
  /* display: flex; */
  text-align: center;
}

#LoggingIn{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  /* flex-basis: 100%; */
}
/* *{
  margin: 0;
  padding: 0;
} */
</style>