<template>
<div class=" z1 ">
    <div class="row m-2">
        <div class="col-md-6" style="border: 2px solid goldenrod; height: 42rem;">
            <div class="row ">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="heading text-center" style="margin-top: 7rem;">
                <h2 class="h4 fw-bolder ">Welcome back!</h2>
                <p class="text-muted h5 p1">Please enter credentials for sign in</p>
            </div>
            <div class="inputs flex-column d-flex mt-5">
                
                <input type="text" placeholder="Email" class="mb-3"> 
        
               
                    <input placeholder="Password" id="password" v-model="password" :type="showPassword ? 'text' : 'password'" />
                    <span class="toggle-icon" @click="toggleShowPassword">
                        {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                    </span>
                
            </div>

            <div class="random justify-content-between d-flex mt-3">
                <div class="rem">
                    <p class="h6">Remember me</p>
                </div>
                <div class="pass text-muted">
                   <router-link to="ForgotPass" style="text-decoration: none; color: black;"><p>Forgot Password?</p></router-link>

                </div>
            </div>
            <div class="btns flex-column d-flex mt-4">
               <router-link to="/" style="text-decoration: none;"><p class="s1 mb-3 text-center">Sign In</p></router-link>
                <button class="l1"><i class="bi bi-google"></i> Login with Google</button>
            </div>
            <div class="others text-center mt-3">
              <router-link to="SignUp" style="text-decoration: none;"><p class="text-muted">Don't have an account ? <span style="color: goldenrod;">Sign up now</span></p></router-link>
            </div>

        </div>
        <div class="col-md-3"></div>
    </div>
        </div>
        <div class="col-md-6 a1">
            <img src="https://tse1.mm.bing.net/th?id=OIP.q4f7vAzLpFTZ6E4UN0oE8QHaE8&pid=Api&P=0&h=220"  alt="" width="100%" height="100%">

        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            password: '',
            showPassword: false,
        };
    },
    methods: {
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
        },
    },
}
</script>

<style scoped>

.p1 {
    margin-top: -0.2rem;
}

input {
    border: 2px solid goldenrod;
    border-radius: 10px;
    padding: 6px 4px 6px 14px;
}

.s1 {
    background-color: rgb(182, 132, 8);
    color: white;
    padding: 6px 0;
    border: none;
    border-radius: 7px;
}

.l1 {
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 6px 0;
    border-radius: 7px;
}


.password-input {
  position: relative;
}

.toggle-icon {
  position: absolute;
  top: 43.5vh;
  right: 64vw;
  transform: translateY(-50%);
  cursor: pointer;
}
@media (max-width: 789px) {
    .toggle-icon {
  position: absolute;
  top: 40%;
  right: 8.5%;
  transform: translateY(-50%);
  cursor: pointer;
}
@media (max-width: 789px) {
  .a1{
    margin-top: 1rem;
  }
}
}
</style>
