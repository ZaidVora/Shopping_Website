<template   >
    <div :style="{backgroundColor:bgcolor}">
   <HeaDer />
<div class="p-1">
    <div class="container">
        <div class="content mt-3">
            <SideBar class="sidebar" />
            <div>
                <div class="types  p-3 mb-4">
                    <div class="head">
                        <h1 class="fs-3 fw-bold  mt-2" style=" color: #B2632B">Reset Password</h1>
                    </div>
                <div class="row mt-5 d-flex ">
                    <div class="col-md-6 ">
                        <p class=" h4">Password</p>
                        <input type="text" placeholder="Old Password" class="rounded w-100 p-2 ">
                        <input type="text" placeholder="New Password" class="my-3 w-100 p-2 rounded">
                        <input type="text" placeholder="Confirm Password" class=" w-100 p-2 rounded">
                    </div>
                    <div class="col-md-6 mt-4 d-flex flex-column">
                        <div class="img">
                            <img src="https://www.miamioh.edu/_files/images/it-services/news-articles/2017/07/password-reset.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="btn">
                            <button>Change Password</button>
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
    import HeaDer from '../../HeaDer.vue';
import SideBar from '../../SideBar.vue';
    export default{
        name:'ResetPass',
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
    height: 92dvh;
    
}

.types {
    margin-left: 6.5rem;
}

.types {
    border: 2px solid goldenrod;

}
input{
    border: 2px solid #C6A257;
    background-color: #F9F9F9;
   
}
.btn  button{
    background-color: #A17A35;
    color: white;
    padding: 8px 18px;
    border: none;
    border-radius: 7px;
    float: right;
    margin-top: 12rem;
}

@media (max-width: 800px) {
    .content {
    display: flex;
    justify-content: start;
    margin-left: 0.1rem;
}
.types {
    margin-left: 4.2rem;
    max-width:  84%;  
    
}
.sidebar {
    height: 109dvh;
    
}
.img{
   
    margin-top: 5rem;
}

.btn  button{
    background-color: #A17A35;
    color: white;
    padding: 6px 14px;
    border: none;
    border-radius: 7px;
    float: right;
    margin-top: 12rem;
    margin-right: -1rem;
}
}
</style>