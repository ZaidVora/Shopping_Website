<template>
<div :style="{backgroundColor:bgcolor}">
    <HeaDer />
    <div class="">
        <div class="container p-4  " style="border: 2px solid #C19B49; border-radius: 10px; background-color: white;">
            <div class="head mb-4 ">
                <h2 style="font-weight: 700; color: #B2632B;">Favourites</h2>
            </div>
            <div class="content" :style="{backgroundColor: boxcolor}">
                <div class="content1">
                    <div class="img">
                        <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid" alt="">
                    </div>
                    <div class="details">
                        <h4 class="text-muted">Kesar Magas&nbsp; <span>1Kg</span></h4>
                        <h5 class="text-muted mt-3">Made with pure</h5>
                        <h5 class="h5 fw-bold" style="color: #C19B49;">Rs.250</h5>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star "></i>
                        <i class="bi bi-star "></i>
                        <i class="bi bi-star"></i>
                    </div>
                </div>
                <div class="content2 mt-3 ">
                    <div class="btns">
                        <p class="it">Item added in 16th December 2022</p>
                        <div class="btn">
                            <div class="bag ">
                                <button class="b1">Add To bag</button>
                                <button class="mt-3">Buy Now</button>
                            </div>

                            <div class="delete">
                                <i class="bi bi-trash" style="color: gray; "></i>
                                <h5 style="color: gray; ">Delete</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content  my-3" :style="{backgroundColor: boxcolor}">
                <div class="content1">
                    <div class="img">
                        <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid" alt="">
                    </div>
                    <div class="details">
                        <h4 class="h3 fw-medium"  style="color: #707070;">Kesar Magas&nbsp; <span>1Kg</span></h4>
                        <h5 style="color: #707070;" class=" mt-3 fw-medium h4">Made with pure</h5>
                        <h5 class="h5 fw-bold" style="color: #C19B49;">Rs.250</h5>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                </div>
                <div class="content2 mt-4">
                    <div class="btns">
                        <p class="it ">Item added in 16th December 2022</p>
                        <div class="btn">
                            <div class="bag ">
                                <button class="b1">Add To bag</button>
                                <button class="mt-3">Buy Now</button>
                            </div>

                            <div class="delete">
                                <i class="bi bi-trash" style="color: gray; "></i>
                                <h5 style="color: gray; ">Delete</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content" :style="{backgroundColor: boxcolor}">
                <div class="content1 d-flex justify-content-between">
                    <div class="img">
                        <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid" alt="">
                    </div>
                    <div class="details">
                        <h4 class="text-muted">Kesar Magas&nbsp; <span>1Kg</span></h4>
                        <h5 class="text-muted mt-2">Made with pure</h5>
                        <h5 class="h5 fw-bold" style="color: #C19B49;">Rs.250</h5>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star "></i>
                        <i class="bi bi-star "></i>
                        <i class="bi bi-star"></i>
                    </div>
                </div>
                <div class="content2 mt-3 ">
                    <div class="btns">
                        <p class="it">Item added in 16th December 2022</p>
                        <div class="btn">
                            <div class="bag ">
                                <button class="b1">Add To bag</button>
                                <button class="mt-3">Buy Now</button>
                            </div>

                            <div class="delete">
                                <i class="bi bi-trash" style="color: gray; "></i>
                                <h5 style="color: gray; ">Delete</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<ProDucts />
</template>

<script>
import HeaDer from '../HeaDer.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProDucts from '../ProDucts.vue';
export default {
    name: 'FavouriTes',
    components: {
        HeaDer,
        ProDucts
    },
    data() {
        return {
            bgcolor: '#F9F9F9',

        }
    }

}
</script>

<style scoped>

.content {
    display: flex;
    justify-content: space-between;
    border: 2px solid goldenrod;
    background-color: #F9F9F9;

}

.content1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
}

.img img {
    width: 100%;
    height: 7rem;
    margin-right: 1.2rem;
}




.details h4 span {
    color: goldenrod;
}

.details i {
    color: goldenrod;
    font-size: 1.2rem;
    margin-right: 0.5rem;
}

@media (max-width: 850px) {
    .content {
        display: flex;
        flex-direction: column;

    }

    .content1 {
        display: flex;
        flex-direction: column;
    }

    .img img {
        height: 18rem;
        width: 18rem;
        margin-left: 0.9rem;
        margin-bottom: 1.3rem;
    }

    .details {
        width: 100%;
        margin-left: 2rem;
    }

    .content2 {
        margin-left: 1rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .btn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .btn .delete {
        margin-top: 2rem;
        margin-left: 9rem;
        margin-bottom: -1rem;
    }

}

.content2 {
    margin-right: 4rem;
}

.btns .it {
    padding-right: 1rem;
    font-size: 0.8rem;
    color: gray;
}

.bag button {
    background-color: #A17A35;
    color: white;
    padding: 5px 50px;
    border: none;
    border-radius: 7px;
}

.btn {
    display: flex;
}

.bag {
    display: flex;
    flex-direction: column;
    margin-top: -0.5rem;
    margin-left: -1rem;

}

.btn .delete {
    display: flex;
    align-items: start;
    margin-right: -1rem;

}

.delete i {
    margin: 0 1.2rem;
}
</style>
