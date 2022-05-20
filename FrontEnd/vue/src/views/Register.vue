<template>
<div id="container">
  <div id="register" class="text-center">
      <h1 id="CreateH1" class="h3 mb-3 font-weight-normal">Create Account</h1>
    <form class="form-register" @submit.prevent="register">
      <div id="alert" class="alert alert-danger" role="alert" v-if="registrationErrors">
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
      <div id="Email">
      <label for="Email" class="sr-only">Email</label>
      <input
        type="email"
        id="email"
        class="form-control"
        placeholder="Email"
        v-model="user.email"
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
        email: '',
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
              this.registrationErrorMsg = 'Bad Request: Validation Errors (UserName and/or Email may already be taken)';
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
    background-image: url("../assets/Background-2.jpg");
  background-repeat: no-repeat;
  /* background-size: 100vw; */
  background-size: cover;
  min-height: 100vh;
  border: solid 1vh  rgb(36, 73, 194);
 
}
#alert{
  font-size: 3vh;
  color: rgb(134, 134, 134);
}
h1{
  font-size: 7vh;
  text-align: center;
  padding-top: 2vh;
   font-family: 'Lobster',  Arial, Helvetica cursive;
     text-shadow: 4px 4px 4px gray, 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
}
form {
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  padding-left: 10vw;
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
#confirmPassword{
  border-radius: 1vh;
  width: 15vw;
  height: 3vh;
 margin-left: 1.8vw;
box-shadow: 6px 6px 6px rgb(51, 50, 50);
margin-top: 1vh;
}
#ConfirmPass{
  margin-left: 6vw;
  padding: 1vh;
  font-weight: bolder;
  font-size: 3vh;
  font-family: 'Lobster', cursive;
}
#Email{
    margin-left: 6vw;
  padding: 1vh;
  font-weight: bolder;
  font-size: 3vh;
  font-family: 'Lobster', cursive;
}
#email{
  border-radius: 1vh;
  width: 15vw;
  height: 3vh;
 margin-left: 3.6vw;
box-shadow: 6px 6px 6px rgb(51, 50, 50);
margin-top: 1vh;
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
  text-decoration: none;
}


@media only screen and (max-width: 1300px) {
  #container {
  background-image: url("../assets/BackgroundSmall2.jpg");
   background-repeat: no-repeat;
  background-size: cover;
  border: solid .5vh  rgb(36, 73, 194);
  }
  #alert{
  font-size: 2vh;
  /* padding-bottom: 10vh;
  margin-top: -14vh; */
   margin-left: .5vw; 
  
}
  form {
  padding-top: 25vh;
  align-items: center;
}

 #username{
  width: 29vw;
  margin-left: 2vw;
 }
 #password{
   width: 29vw;
   margin-left: 3vw;
 }
 #Password{
   color: rgb(255, 255, 255);
   font-size: 5vw;
     text-shadow: 4px 4px 4px rgb(0, 0, 0), 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
 }
 #UserName{
   color: white;
   font-size: 5vw;
     text-shadow: 4px 4px 4px rgb(0, 0, 0), 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
 }
 #confirmPassword{
  width: 29vw;
  margin-left: 1.5vw;
}
#ConfirmPass{
  color: white;
   font-size: 5vw;
   text-shadow: 4px 4px 4px rgb(0, 0, 0), 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
}
#Email{
   color: white;
   font-size: 5vw;
    text-shadow: 4px 4px 4px rgb(0, 0, 0), 0 0 25px rgb(54, 54, 167), 0 0 5px rgb(71, 71, 100);
    margin-left: 10vw;
}
#email{
    width: 29vw;
    margin-left: 5vw;
}
#CreateAcct{
  width: 27vw;
  height: 5.5vh;
} 

 #HaveAcct{
  width: 27vw;
  height: 5.5vh;
}
h1{
  font-size: 9vw;
  margin-top: 3vh;
}

#ButtonS{
  margin-left: 5vw;
  margin-top: -1vh;
}
}

</style>
