<template>
<div :style="{backgroundColor:bgcolor}">
    <HeaDer />
    <div class="container p-3 mb-4 mx-auto" style="border: 2px solid #C19B49; border-radius: 8px;">
        <div class="row ">
            <div class="col-md-4 ">
                <div class="head my-3">
                    <h4 style="font-weight: 700; color:#B2632B;">Checkout</h4>
                </div>
                <h5 class="fw-bold mt-5">Shipping To</h5>
                <div class=" my-4 row ">
                    <div class="col-md-8">
                    <div class="d-flex flex-column  " style="border: 2px solid #C19B49; border-radius: 8px;">
                        <h5 class="fw-bold ms-5 mt-3">Home Address</h5>
                        
                        <div class="d-flex justify-content-between px-3" style="margin-top: -0.4rem;">
                            <div>
                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label ms-3 text-muted" for="flexRadioDefault2">
                            (269)444-6583 
                        </label></div>
                        <i class="bi bi-pen" style="color: #D4AA8B;"></i>
                        </div>
                        <p class="text-muted ms-5">Road Number 5649 Akali</p>
                    </div>
                    <div class="d-flex flex-column  " >
                        <h5 class="fw-bold ms-5 mt-3">Office Address</h5>
                        
                        <div class="d-flex justify-content-between px-3" style="margin-top: -0.4rem;">
                            <div>
                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label ms-3 text-muted" for="flexRadioDefault2">
                            (269)444-6583 
                        </label></div>
                        
                        </div>
                        <p class="text-muted ms-5">Road Number 5649 Akali</p>
                    </div>
                </div>
                </div>
                <div class="row my-4">
                    <h5 style="font-weight: 700; color: rgb(61, 41, 3);">Payment Options</h5>
                    <div class="col-md-9 my-3">
                        <div class="d-flex justify-content-between my-2">
                            <div>
                            <i class="bi bi-paypal"></i>
                            <label class="form-check-label ms-3" for="option1">
                                <h5>Credit Card/Debit Card</h5>
                            </label>
                        </div>
                            <input class="form-check-input" type="radio" name="options" id="option1" checked>
                        </div>
                        <div class="d-flex justify-content-between my-2">
                            <div>
                            <i class="bi bi-paypal"></i>
                            <label class="form-check-label ms-3" for="option2">
                                <h5>Apple Pay</h5>
                            </label>
                        </div>
                            <input class="form-check-input " type="radio" name="options" id="option2" checked>
                        </div>
                        <div class="d-flex justify-content-between my-2">
                            <div>
                            <i class="bi bi-paypal"></i>
                            <label class="form-check-label ms-3" for="option2">
                                <h5>UPI</h5>
                            </label>
                        </div>
                            <input class="form-check-input " type="radio" name="options" id="option2" checked>
                        </div>
                        <div class="d-flex justify-content-between my-2">
                            <div>
                            <i class="bi bi-paypal"></i>
                            <label class="form-check-label ms-3" for="option2">
                                <h5 class="">Pay on Delivery</h5>
                            </label>
                        </div>
                            <input class="form-check-input " type="radio" name="options" id="option2" checked>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-1" style="border-right: 2px solid #C19B49;"></div>
           
            <div class="col-md-5">
                <div class=" text-center ms-4 mt-5 mb-4">
                    
                        <h4 class="fw-bold text-start" >Promo Code</h4>
                        <div class="d-flex justify-content-start">
                            <input type="text" class="me-3 w-75 d-block py-1 px-3" placeholder="Promo Code" style="border: 2px solid #DDC99C; border-radius: 8px;">
                            <button class="px-4 py-2" style="background-color: #A17A35; color: white; border: none; border-radius: 8px;">Apply</button>
                        </div>
                        <div class="row ">
                            <div class="col-md-8">
                            <h3 class="text-center mt-5 mb-4 fw-bolder h2" style="color: black; word-spacing: 6px;">order summary</h3>
                            <div class="d-flex justify-content-between px-4" style="border-bottom:2px solid gray">
                                <div class=" h5" >
                                    <p>Items:</p>
                                    <p>CGST:</p>
                                    <p>SGST:</p>
                                </div>
                                <div class="h5">
                                    <p>Rs.875</p>
                                    <p>Rs.20</p>
                                    <p>Rs.20</p>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-between px-4 mt-3" style="border-bottom:2px solid gray" >
                                <div class="h5 text-start">
                                    <p>Total:</p>
                                    <p>Delivery:</p>
                                </div>
                                <div class="h5">
                                    <p>Rs.915</p>
                                    <p>Rs.45</p>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-between px-4 mt-3">
                                <div class="h5 ">
                                    <p>Total</p>
                                </div>
                                <div class="h5">
                                    <p>Rs.950</p>
                                </div>
                            </div>
                            <button class="payment px-5 py-1" style="background-color: #A17A35; color: white; border: none; border-radius: 4px;" >Make Payment</button>
                        </div>
                        <div class="col-md-4"></div>
                        </div>
                    
                </div>
            </div>
            <div class="body2">

            </div>
            <div class="col-md-1"></div>
        </div>
        
    </div>
</div>
<ProDucts/>
</template>

<script>
import HeaDer from '../HeaDer.vue';
import ProDucts from '../ProDucts.vue';
export default {
    name: 'CheckOut',
    components: {
        HeaDer,
        ProDucts
    },
    data() {
        return {
            bgcolor: '#F9F9F9'
        }
    }
}
</script>

<style scoped>

@media (max-width: 850px) {
  
}
</style>
