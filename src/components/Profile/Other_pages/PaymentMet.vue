<template>
<div :style="{backgroundColor:bgcolor}">
    <HeaDer />
    <div class="p-1">
        <div class="container">
            <div class="content mt-3">
                <SideBar class="sidebar" />
                <div>
                    <div class="types  p-3 mb-4" style="background-color: white;">
                        <div class="head">
                            <h1 class="fs-3 fw-bold  mt-2" style=" color: #B2632B">Payment Methods</h1>
                        </div>
                        <div class="head">
                            <h1 class="fs-5 fw-semibold  mt-5" style=" color: black;">Cards</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-3">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.r3FlTFxK5SzSEcV-OJNp0wHaEs&pid=Api&P=0&h=220" class="img-fluid" alt="">
                            </div>

                            <div class="col-md-6 ">
                                <p class="h4 fw-bold p1" style="border-left: 3px solid goldenrod;">Cards</p>
                                <div class="d-flex">
                                    <p class="h6 m1 mt-3"><i class="bi bi-paypal"></i> <span class="ms-1 me-4 fw-normal ">Add Credit, Debit, & ATM Cards</span></p>
                                    <i class="bi bi-arrow-right   mt-2 ms-1 circle-border"></i>
                                </div>
                            </div>
                        </div>

                        <div class="head">
                            <h1 class="fs-5 fw-semibold  mt-5" style=" color: black;">Upi</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-1"></div>
                            <div class="col-md-3">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.WP0LMyQT5odVEf6PFfWL6QHaMM&pid=Api&P=0&h=220" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-6">
                                <p class="h4 fw-bold " style="border-left: 3px solid goldenrod;">UPI</p>
                                <div class="row ">
                                    <div class="col-md-5 col-9">
                                        <p class="h6 m1 mt-3"><i class="bi bi-paypal"></i> <span class="ms-1 me-4 fw-normal ">Paytm UPI</span></p>
                                    </div>
                                    <div class="col-md-4 mt-2 col-3 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-5 col-9">
                                        <p class="h6 m1 mt-3"><i class="bi bi-paypal"></i> <span class="ms-1 me-4 fw-normal ">Goggle UPI</span></p>
                                    </div>
                                    <div class="col-md-4 mt-2 col-3 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-5 col-9">
                                        <p class="h6 m1 mt-3"><i class="bi bi-paypal"></i> <span class="ms-1 me-4 fw-normal ">Phone Pay</span></p>
                                    </div>
                                    <div class="col-md-4 mt-2 col-3 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-5 col-9">
                                        <p class="h6 m1 mt-3"><i class="bi bi-paypal"></i> <span class="ms-1 me-4 fw-normal ">Pay Via UPI</span></p>
                                    </div>
                                    <div class="col-md-4 mt-2 col-3 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="head">
                            <h1 class="fs-5 fw-semibold  mt-5" style=" color: black;">NET BANKING</h1>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-1"></div>
                            <div class="col-md-3 mt-3">
                                <img src="https://walletgenius.com/walletgenius/wp-content/uploads/2019/09/how-online-banking-can-save-hundreds.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-7">
                                <p class="h4 fw-bold p1" style="border-left: 3px solid goldenrod;">Net Banking</p>
                                <div class="row ">
                                    <div class="col-md-6 col-10">
                                        <p class="h6 m1 mt-3"><span class="bnk">Bank</span> <span class="ms-1 me-4 fw-normal ">State Bank of India</span></p>
                                    </div>
                                    <div class="col-md-2 mt-2 col-2 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-6 col-10">
                                        <p class="h6 m1 mt-3"><span class="bnk">Bank</span> <span class="ms-1 me-4 fw-normal ">Bank of Baroda</span></p>
                                    </div>
                                    <div class="col-md-2 mt-2 col-2 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-6 col-10">
                                        <p class="h6 m1 mt-3"><span class="bnk">Bank</span> <span class="ms-1 me-4 fw-normal ">Kotak Bank</span></p>
                                    </div>
                                    <div class="col-md-2 mt-2 col-2 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-6 col-10">
                                        <p class="h6 m1 mt-3"><span class="bnk">Bank</span> <span class="ms-1 me-4 fw-normal ">Axis Bank</span></p>
                                    </div>
                                    <div class="col-md-2 mt-2 col-2 ">
                                        <i class="bi bi-arrow-right     circle-border"></i>
                                    </div>
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
export default {
    name: 'PaymentMet',
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
.circle-border {

    border-radius: 50%;
    /* Makes the element circular */
    border: 3px solid goldenrod;
    /* Sets the border style, width, and color */
    height: 30px;
    width: 24px;
    padding: 2px;
    /* Optional: Adds some padding to the content inside the circle */
}

.circle-border i {
    color: goldenrod;
}

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
    width: 55rem;
    border: 2px solid goldenrod;

}

.bnk {
    font-size: 0.9em;
    width: 100px;
    /* Set a width for the paragraph, or adjust as needed */
    padding: 5px;
    /* Add padding to give some space around the text */
    background-color: #fff;
    /* Set a background color for the paragraph */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
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

   
    .m1 {
        margin-top: 0.5rem;
    }

}
</style>
