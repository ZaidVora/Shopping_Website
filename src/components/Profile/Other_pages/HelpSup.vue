<template>
    <div :style="{backgroundColor:bgcolor}">
<HeaDer />
<div class="p-1">
    <div class="container">
        <div class="content mt-3">
            <SideBar class="sidebar" />
            <div>
                <div class="types  p-3 mb-5" style="height: 43.5rem;background-color: white;" >
                    <div class="head ">
                        <h1 class="fs-3 fw-bold  mt-2" style=" color: #B2632B">
                            Help and Support
                        </h1>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <div class="search">
                                <label for="ii" class="search-bar">
                                    <input type="text" id="ii" placeholder="Search for Queries" name="search" />
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg></a>
                                </label>
                            </div>
                            <div class="m1">
                                <div class="ran d-flex  justify-content-between mt-4  " style="border-bottom: 2px solid gainsboro; ">
                                    <div class="diff">
                                        <p class="h5">Shipping FAQs</p>
                                    </div>
                                    <div class="arrow ">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="ran d-flex  justify-content-between mt-3 " style="border-bottom: 2px solid gainsboro; ">
                                    <div class="diff">
                                        <p class="h5">Payment FAQs</p>
                                    </div>
                                    <div class="arrow ">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="ran d-flex  justify-content-between mt-3 " style="border-bottom: 2px solid gainsboro; ">
                                    <div class="diff">
                                        <p class="h5">Cancellation FAQs</p>
                                    </div>
                                    <div class="arrow ">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="ran d-flex  justify-content-between mt-3 " style="border-bottom: 2px solid gainsboro; ">
                                    <div class="diff">
                                        <p class="h5">Returns FAQs</p>
                                    </div>
                                    <div class="arrow ">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="ran d-flex  justify-content-between mt-3 " style="border-bottom: 2px solid gainsboro; ">
                                    <div class="diff">
                                        <p class="h5">Account FAQs</p>
                                    </div>
                                    <div class="arrow ">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <div class="ran d-flex  justify-content-between mt-3 " style="border-bottom: 2px solid gainsboro; ">
                                    <div class="diff">
                                        <p class="h5">Coupon code FAQs</p>
                                    </div>
                                    <div class="arrow ">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6"></div>
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
    name: 'HelpSup',
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

.search-bar {
    display: flex;
    justify-content: space-between;
}

.search-bar {
    border-radius: 5px;
    height: 45px;
    width: 450px;
    padding: 0 15px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid orange;
    font-size: 15px;
    background: white;
}

.search-bar input {
    all: unset;
    width: 100%;
}

.search-bar a {
    text-decoration: none;
    display: flex;
    color: gray;
    align-items: center;
    font-size: 20px;
}

@media (max-width: 800px) {
    .content {
        display: flex;
        justify-content: start;
        margin-left: 0.1rem;
    }

    .types {
        margin-left: 4.2rem;
        width: 81%;
    }

    .search-bar {
        border-radius: 5px;
        height: 45px;
        width: 250px;
        padding: 0 15px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid orange;
        font-size: 15px;
        background: white;
        margin-left: -0.5rem;
    }
    .m1{
        margin-top: 3rem;
    }

}
</style>
