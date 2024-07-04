<template>
<div :style="{backgroundColor:bgcolor}">
<HeaDer />
<div class="p-1">
    <div class="container">
        <div class="content mt-3">
            <SideBar class="sidebar" />
            <div>
                <div class="types  p-3 mb-5" style="height: 43.5rem; background-color: white;">
                    <div class="head">
                        <h1 class="fs-3 fw-bold  mt-2" style=" color: #B2632B">Addresses</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="details mt-5">
                                <router-link to="/HomeAdd" style="text-decoration: none;">
                                    <div class="all p-2 " style="border: 2px solid goldenrod;border-radius: 10px; ">
                                        <p class="ms-3 my-2 h6"> <strong class="h4 fw-bold " style="color: black;">Home Address</strong><br><span class="text-muted">
                                                (269) 444-6853 <span style="float: right; margin-right: 1rem;"><i class="bi bi-pencil "></i></span> <br>Road Number 5649 Akali </span></p>
                                    </div>
                                </router-link>
                                <router-link to="/OfficeAdd" style="text-decoration: none;">
                                    <div class="all mt-4 p-2" style="border: 2px solid goldenrod;border-radius: 10px;">
                                        <p class="ms-3 my-2 h6"> <strong class="h4 fw-bold" style="color: black;">Office Address</strong><br><span class="text-muted">
                                                (269) 444-6853 <span style="float: right; margin-right: 1rem;"><i class="bi bi-pencil "></i></span> <br>Road Number 2403 Blogshow </span></p>
                                    </div>
                                </router-link>
                                    <router-link to="NewAdd" style="text-decoration: none;">
                                    <div class="add mt-3 mb-5">
                                        <i class="bi bi-plus-lg ms-1" style="font-size: 1.5rem; color: goldenrod; "></i>
                                        <label for="email" class="fw-bold fs-4 mb-2" style="color: black;">Add Address</label>
                                    </div>
                                 </router-link>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-5">
                            <div class="img mt-4">
                                <img src="https://clipart-library.com/img/1773440.jpg" class="img-fluid" alt="">
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
import HeaDer from '../../../HeaDer.vue';
import SideBar from '../../../SideBar.vue';
export default {
    name: 'AddresS',
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
    border: 2px solid goldenrod;
}

@media (max-width: 800px) {
    .content {
        display: flex;
        justify-content: start;
        margin-left: 0.1rem;
    }

    .types {
        margin-left: 4.2rem;
        width: 80%;
    }

   
}
</style>
