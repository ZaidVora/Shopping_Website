<template>
<HeaDer />
<div class="p-1">
    <div class="container">
        <div class="content mt-3">
            <SideBar class="sidebar" />
            <div>
                <div class="types  p-3 mb-5">
                    <div class="head ">
                        <h1 class="fs-3 fw-bold  mt-2" style=" color: #B2632B">
                            <router-link to="AddresS" style="color: #B2632B"><span><i class="bi bi-arrow-left me-1"></i></span></router-link> Add Address
                        </h1>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-5">
                            <div class="details">
                                <div class="">
                                    <div class=" mt-3">
                                        <p class="h5 fw-semibold">Contact info</p>
                                    </div>
                                    <div class="name ">
                                        <input type="text" placeholder="Enter name" class="rounded w-100 p-2">
                                    </div>
                                    <div class="name ">
                                        <input type="text" placeholder="Enter Phone Number" class="rounded w-100 p-2">
                                    </div>
                                    <div class=" mt-3 mb-2">
                                        <p class="h5 fw-semibold">Address</p>
                                    </div>
                                    <div class="name ">
                                        <input type="text" placeholder="Office No/Building name" class="rounded w-100 p-2 ">
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
                                            <input type="text" placeholder="State"  class="rounded w-100 p-2"></div>
                                            <div class="col-md-6">
                                            <input type="text" placeholder="City" class="rounded w-100 p-2">
                                           </div>
                                        </div>
                                    <div class="name">
                                        <input type="text" placeholder="Country" class="rounded w-100 p-2 ">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-6  d-flex flex-column">
                            <div class="select">
                                <div class=" mt-3 ">
                                    <p class="h5 fw-semibold">Types of Address</p>
                                </div>
                                <div class="radio d-flex justify-content-start mt-3 ">
                                    <div>   
                                        <input type="radio" name="all" id="home">
                                        <label for="all" class="text-muted ms-1">Home</label>
                                    </div>
                                    <div class="margin">
                                        <input type="radio" name="all" id="Office">
                                        <label for="all" class="text-muted ms-1">Office</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="all" id="other" checked>
                                        <label for="all" class="text-muted ms-1">Other</label>
                                    </div>
                                </div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                    <label class="form-check-label text-muted" for="flexCheckChecked">
                                        Make as default address
                                    </label>
                                </div>
                            </div>
                            <div class="img ">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.JQH98LA5VA5wUKD33f6V8wAAAA&pid=Api&P=0&h=220" class="img-fluid" alt="">
                            </div>
                            <div class="btn">
                                <router-link to="AddresS">
                                    <button class="b1">Save Address</button>
                                </router-link>
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
    name: 'NewAdd',
    components: {
        HeaDer,
        SideBar
    }

}
</script>

<style scoped>
.content {
    display: flex;
    justify-content: start;
    margin-left: 0rem;
}

.sidebar {
    height: 99dvh;
}

.types {
    margin-left: 6.5rem;
    width: 60rem;
    border: 2px solid goldenrod;

}


input{
    background-color: #F9F9F9;
    border-color: #C6A257;
    border: 2px solid goldenrod;
    margin: 0.8rem 0;
}

.img{
    margin-top: 4rem;
}
.btn button {
    background-color: #A17A35;
    color: white;
    padding: 8px 48px;
    border: none;
    border-radius: 7px;
    margin-left: 7rem;
    margin-top: 8.5rem;
}
.margin{
    margin: 0 2rem;
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
    input{
    background-color: #F9F9F9;
    border-color: #C6A257;
}
    .input {
        border: 2px solid goldenrod;
        width: 15rem;
        padding: 6px 0px 6px 18px;
    }

    .input1 {
        border: 2px solid goldenrod;
        width: 15rem;
        padding: 6px 0px 6px 18px;
    }

    .input2 {
        border: 2px solid goldenrod;
        width: 15rem;
        padding: 6px 0px 6px 18px;
        margin-left: 0rem;
        margin-top: 1rem;
    }

    .img {
        border-top: 2px solid goldenrod;
        border-left: none;
        margin-top: 2rem;
    }

    .img img {
        margin-top: 1rem;
    }

    .btn button {
        background-color: #A17A35;
        color: white;
        padding: 6px 24px;
        border: none;
        border-radius: 7px;
        float: left;
        margin-top: 1rem;
        margin-left: -1rem;

    }
    .small{
    margin-top: 2.3rem;
}

}
</style>
