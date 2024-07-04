<template>
   <div class=" z1 " >
    <div class="row m-2">
        <div class="col-md-6 " style="border: 2px solid goldenrod; height: 42rem;">
            <div class="row ">
        <div class="col-md-3"></div>
        <div class="col-md-6 z1 " >
            <div class="heading text-center" style="margin-top: 11rem;">
                <h2 class="h4 fw-bolder ">Set New Password</h2>
                <p class="text-muted h5 p1">Please enter new password</p>
            </div>
            <div class="inputs flex-column d-flex mt-5">                                 
                <input type="text" placeholder="Password " class="mb-3">                   
                <input type="text" placeholder="Confirm Password " class="mb-3">                   
            </div>

            
            <div class="btns flex-column d-flex mt-4">
              <router-link to="SignIn" style="text-decoration: none; color: black;"><p class="s1 mb-3 text-center">Submit</p></router-link> 
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
    export default{
        name:'NewPass'
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

@media (max-width: 789px) {
  .a1{
    margin-top: 1rem;
  }
}
</style>