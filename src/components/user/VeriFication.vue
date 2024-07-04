<template>
<div class=" z1 ">
    <div class="row m-2">
        <div class="col-md-6 " style="border: 2px solid goldenrod; height: 42rem;">
            <div class="row ">
                <div class="col-md-3"></div>
                <div class="col-md-6 z1 ">
                    <div class="heading text-center" style="margin-top: 12rem;">
                        <h2 class="h4 fw-bolder ">Verification</h2>
                        <p class="text-muted h5 p1">6-digit code has been sent <br> to your register email address</p>
                    </div>
                    <div class="inputs flex-column d-flex mt-5">
                        <div class="verification-container">
                            <input type="text" id="digit1" class="verification-code-input" maxlength="1">

                            <input type="text" id="digit2" class="verification-code-input" maxlength="1">

                            <input type="text" id="digit3" class="verification-code-input" maxlength="1">

                            <input type="text" id="digit4" class="verification-code-input" maxlength="1">

                            <input type="text" id="digit5" class="verification-code-input" maxlength="1">

                            <input type="text" id="digit6" class="verification-code-input" maxlength="1">

                        </div>

                    </div>

                    <div class="btns flex-column d-flex mt-3">
                        <router-link to="NewPass" style="text-decoration: none;">
                            <p class="s1 mb-3 text-center">Verify</p>
                        </router-link>
                    </div>
                    <div class="others text-center mt-3">
                        <p v-if="!showResend">
                            Verification code will expire in: {{ minutes }}:{{ seconds }}
                        </p>
                        <p v-if="showResend" @click="startResendTimer" style="cursor: pointer;">Didn't recieve code ?<span style="color: goldenrod;"> Resend</span></p>
                    </div>

                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
        <div class="col-md-6 a1">
            <img src="https://tse1.mm.bing.net/th?id=OIP.q4f7vAzLpFTZ6E4UN0oE8QHaE8&pid=Api&P=0&h=220" alt="" width="100%" height="100%">
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'VeriFication',
    data() {
        return {
            timer: null,
            minutes: 1,
            seconds: 0,
            showResend: true
        };
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                if (this.minutes === 0 && this.seconds === 0) {
                    clearInterval(this.timer);
                    this.showResend = true; // Timer is over, show "Resend" button
                } else {
                    if (this.seconds === 0) {
                        this.minutes--;
                        this.seconds = 59;
                    } else {
                        this.seconds--;
                    }
                }
            }, 1000);
        },
        startResendTimer() {
            this.showResend = false; // Hide "Resend" button during the timer
            this.minutes = 1;
            this.seconds = 0;
            this.startTimer();
        }
    },
    beforeUnmount() {
        clearInterval(this.timer);
    }
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

.verification-container {
    text-align: center;
}

.verification-code-input {
    width: 30px;
    height: 30px;
    font-size: 1.5em;
    text-align: center;
    margin: 5px;
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
}

.submit-btn {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

@media (max-width: 789px) {
    .a1 {
        margin-top: 1rem;
    }
}
</style>
