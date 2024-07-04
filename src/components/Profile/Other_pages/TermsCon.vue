<template>
    <div :style="{backgroundColor:bgcolor}">
<HeaDer />
<div class="p-1">
    <div class="container">
        <div class="content mt-3">
            <SideBar class="sidebar" />
            <div>
                <div class="types row align-items-center p-3 mb-5" style="height: 43.5rem; background-color: white;">
                    
                        <div class="col-md-6 z1  ">
                            <div class="head">
                                <h1 class="fs-1 fw-bold  mt-2" style=" color: #B2632B">Terms And</h1>
                                <h1 class="fs-1 fw-bold  mt-2 mb-4" style=" color: #B2632B"> Conditions</h1>
                            </div>
                            <div class="random "><p class="a1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deserunt omnis maiores a eveniet magnam esse,  nihil officiis dicta? Iste quae, ab repudiandae inventore consectetur praesentium eum facilis hic?
                            </p>
                            </div>
                            <div class="btn">
                            <button>Learn More</button>
                        </div>
                        </div>
                        <div class="col-md-6">
                            <div class="img">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.lma8UaoVA1E0dO4QiV7y3AAAAA&pid=Api&P=0&h=220" class="img-fluid" alt="">
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
export default {
    name: 'TermsCon',
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
.z1{
    padding: 0 4rem;
}
.a1{
    font-weight: 600;
}
.btn  button{
    background-color: #A17A35;
    color: white;
    padding: 8px 68px;
    border: none;
    border-radius: 7px;
    margin-left: -1rem;
    margin-top: 0.5rem;
  
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
    height: 97dvh;
}
    .z1{
    padding: 0 1rem;
}
    .btn  button{
    background-color: goldenrod;
    color: white;
    padding: 8px 42px;
    border: none;
    border-radius: 7px;
    margin-left: -1rem;
    margin-top: 0.5rem;
  
}
}
</style>
