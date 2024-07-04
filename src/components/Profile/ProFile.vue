<template>
<div :style="{backgroundColor:bgcolor}">
    <HeaDer />
    <div class="p-1">
        <div class="container">
            <div class="content mt-3">
                <SideBar class="sidebar" />
                <div class="types  p-3 mb-4" style="background-color: white;">
                    <div class="head">
                        <h1 class="h2  " style=" color: #B2632B;">My Profile</h1>
                        <i class="bi bi-pen" style="color: #D4AA8B;"></i>
                    </div>
                    <div class="row">
                        <div style="padding:0.8rem">
                            <div class="lab">
                                <label for="name" class="h6 fw-bold">Name</label>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" placeholder="Zack" class="w-100 py-2 px-2">
                                </div>
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <input type="text" placeholder="Gonsalves" class="w-100 px-2 py-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 0.8rem;" class="">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="lab">
                                    <label for="name" class="h6 fw-bold">Mobile No.</label>
                                </div>
                                <div class="row">
                                   
                                            <div class="col-md-3">
                                                <input type="text" placeholder="+91 " class="w-100 px-2 py-2">
                                            </div>
                                            <div class="col-md-7">
                                                <input type="text" placeholder="39393939" class="w-100 d-block p-2">
                                            </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="  flex-coulmn ">
                                            <label for="name" class="h6 fw-bold">Gender</label>
                                            <input type="text" placeholder="Male" class="w-100 p-2">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" flex-coulmn">
                                            <label for="name" class="h6 fw-bold">Birthday</label>
                                            <input type="text" placeholder="22/11/2022" class="w-100 p-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding:0.8rem" class="">
                        <div class="">
                            <label for="name" class="h6 fw-bold">Email Id</label>
                        </div>
                        <div class="row">
                            <div class="col-md-5">
                                <input type="text" placeholder="zack@gmail.com" class="w-100 p-2">
                            </div>
                        </div>
                    </div>
                    <div style="padding:0.8rem">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="">
                                    <label for="name" class="h6 fw-bold">Address</label>
                                </div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" placeholder="Flat No." class="w-100 p-2">
                                    </div>
                                    <div class="col-md-7">
                                        <input type="text" placeholder="Building Name" class="w-100 p-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding:0.8rem" class="z2">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Near by Landmark" class="w-100 p-2">
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Pincode" class="w-100 p-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding:0.8rem" class="z2">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" placeholder="State" class="w-100 p-2">
                                    </div>
                                    <div class="col-md-7">
                                        <input type="text" placeholder="Country" class="w-100 p-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 0.8rem;">
                        <div class="d-flex  mb-5">
                            <i class="bi bi-plus-lg me-3 fs-4" style=" color: goldenrod;"></i>
                            <label for="email" class="fw-bold fs-4 mb-2">Add Address</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HeaDer from '../HeaDer.vue';
import SideBar from '../SideBar.vue';
export default {
    name: 'ProFile',
    components: {
        HeaDer,
        SideBar
    },
    props: {

    },
    data() {
        return {
            bgcolor: '#F9F9F9'
        }
    },

    methods: {

    },

}
</script>

<style scoped>


.content {
    display: flex;
    justify-content: start;
    margin-left: 0rem;
}

input {
    background-color: #F9F9F9;
    border-color: #C6A257;
    border: 2px solid #C6A257;
    border-radius: 6px;
    margin: 0rem 0;
}

.sidebar {
    height: 100dvh;
}

.types {
    margin-left: 6.5rem;
    width: 70%;
    border: 2px solid goldenrod;

}


.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.8rem;

}

.head i {
    font-size: 1.2rem;
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

    .sidebar {
        height: 120dvh;
    }

    

    
    
input {
    background-color: #F9F9F9;
    border-color: #C6A257;
    border: 2px solid #C6A257;
    border-radius: 6px;
    margin: 1rem 0;
}
}
</style>
