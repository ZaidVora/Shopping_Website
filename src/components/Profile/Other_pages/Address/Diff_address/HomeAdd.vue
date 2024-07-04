<template>
     <div :style="{backgroundColor:bgcolor}">
    <HeaDer />
    <div class="p-1">
        <div class="container">
            <div class="content mt-3">
                <SideBar class="sidebar" />
                <div>
                    <div class="types  p-3 mb-5" style="background-color: white;" >
                        <div class="head ">
                              <h1 class="fs-3 fw-bold  mt-2" style=" color: #B2632B"><router-link to="AddresS" style="color: black;"><span><i class="bi bi-arrow-left me-1"></i></span></router-link> Home Address</h1>
                        </div>
                        <div class="small mt-5">
                            <p class="h5 fw-semibold">Address</p>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-5">
                                <div class="details">
                                    <div class="">
                                        <div class="">
                                            <input type="text" placeholder="Flat No/Building name" class="rounded w-100 p-2">
                                        </div>
                                        <div class="row ">
                                           <div class="col-md-6">
                                            <input type="text" placeholder="Nr. By Landmark"  class="rounded w-100 p-2"></div>
                                            <div class="col-md-6">
                                            <input type="text" placeholder="Pincode" class="rounded w-100 p-2">
                                           </div>
                                        </div>
                                        <div class="row ">
                                            <div class="col-md-6">
                                            <input type="text" placeholder="Nr. By Landmark"  class="rounded w-100 p-2"></div>
                                            <div class="col-md-6">
                                            <input type="text" placeholder="Pincode" class="rounded w-100 p-2">
                                           </div>
                                        </div>
                                        <div class="row ">
                                            <div class="col-md-12">
                                            <input type="text" placeholder="Flat No/Building name" class="rounded w-100 p-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-6  d-flex flex-column">
                        <div class="img">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.JQH98LA5VA5wUKD33f6V8wAAAA&pid=Api&P=0&h=220"  class="img-fluid" alt="">
                        </div>
                        <div class="btn">
                            <router-link to="AddresS">
                            <button>Save Changes</button>
                        </router-link>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import HeaDer from '../../../../HeaDer.vue';
import SideBar from '../../../../SideBar.vue';
    export default {
        name: 'HomeAdd',
    components: {
        HeaDer,
        SideBar
    },
    data() {
        return {
            bgcolor: '#F9F9F9'
        }
    },
    }
</script>

<style scoped>
.content {
    display: flex;
    justify-content: start;
    margin-left: 0rem;
}

.sidebar {
    height: 100dvh;
}

.types {
    margin-left: 6.5rem;
    width: 60rem;
}

.types {
    border: 2px solid goldenrod;

}

input{
    background-color: #F9F9F9;
    border-color: #C6A257;
    border: 2px solid goldenrod;
    margin: 0.5rem 0;
}
.btn  button{
    background-color: #A17A35;
    color: white;
    padding: 8px 48px;
    border: none;
    border-radius: 7px;
   margin-left: 6rem;
    margin-top: 16rem;
}

@media (max-width: 800px) {
    .content {
    display: flex;
    justify-content: start;
    margin-left: 0.1rem;
}
.types {
    margin-left: 4.2rem;
    width: 84%;  
}
.img{
    margin-top: 2rem;
}
.btn  button{
    background-color: goldenrod;
    color: white;
    padding: 6px 14px;
    border: none;
    border-radius: 7px;
    float: left;
   margin-top: 4rem;
   margin-left: -1rem;
    
}
}
</style>