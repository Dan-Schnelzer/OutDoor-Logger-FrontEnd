<template>
<div id="container">
  <div id="register" class="text-center">
    <form class="form-register" @submit.prevent="register">
      <h1 id="CreateH1" class="h3 mb-3 font-weight-normal">Create Account</h1>
      <div class="alert alert-danger" role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
      <div id="UserName">
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
      <div itemid="ConfirmPass">
        <label id="ConfirmPass" for="confirmPassword">Confirm</label>
      <input
        type="password"
        id="confirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        v-model="user.confirmPassword"
        required
      />
      </div>
      <div id="ButtonS">
      <button id="CreateAcct" class="btn btn-lg btn-primary btn-block" type="submit">
        Create Account
      </button>
      <button id="HaveAcct">
      <router-link id="haveAcct" :to="{ name: 'login' }">Have an account?</router-link>
      </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import authService from '../services/AuthService';

export default {
  name: 'register',
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },
  },
};
</script>

<style scoped>
#container {
  background-image: url("../assets/Background.jpg");
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 100vh;
  border: solid 1vh  rgb(59, 34, 204);
  /* margin-top: -2vh; */
 
}
#CreateH1{
  padding: 7vh;
  padding-left: 14vw;
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
#confirmPassword{
  border-radius: 1vh;
  width: 15vw;
  height: 3vh;
 margin-left: 1vw;
box-shadow: 6px 6px 6px rgb(51, 50, 50);
margin-top: 1vh;
}
#ConfirmPass{
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
  padding: 2vh;
  margin-left: 13vw;
}
#CreateAcct{
  height: 4vh;
  margin: 1vh;
  width: 10vw;
  border-radius: 1vh;
  background-color: rgba(63, 156, 38, 0.856);
  font-weight: bolder;
  color: white;
  box-shadow: 4px 4px 4px rgb(51, 50, 50);
}
#CreateAcct:hover{
  background-color: rgb(1, 59, 1);
  box-shadow: 8px 8px 4px rgb(51, 50, 50);
}
#HaveAcct{
   height: 4vh;
  margin: 1vh;
  width: 10vw;
  border-radius: 1vh;
  background-color: rgba(63, 156, 38, 0.856);
  color: white;
  font-weight: bolder;
  box-shadow: 4px 4px 4px rgb(51, 50, 50);
}
#HaveAcct:hover{
   background-color: rgb(1, 59, 1);
   box-shadow: 8px 8px 4px rgb(51, 50, 50);
}
#haveAcct{
  color: white;
}

</style>
