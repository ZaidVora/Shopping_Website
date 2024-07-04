<template>
<div :style="{backgroundColor:bgcolor}">
<HeaDer />
<div class="p-1">
    <div class="container">
        <div class="content mt-3">
            <SideBar class="sidebar" />
            <div class="types  p-3 mb-4" style="background-color: #fff;">
                <div class="head">
                    <h1 class="fs-3 fw-bold ms-1 mt-2" style=" color: #B2632B">Orders</h1>
                </div>
                <div class="orders">
                    <div class="row">
                        <div class="col-md-6 ">
                            <div class="row">
                            <div class="col-md-4">
                                <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-8">
                                <p style="color: #8F8F8F; line-height: 25px; font-weight: 700; word-spacing: 4px;" class="h6 ">Kesar Magas &nbsp;<span style="color: #F0D17C;">1Kg</span><br>
                                    Made with pure kesar <br>
                                    <span style="color: black;">On the way!</span></p>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 text-center">
                            <div class="bt1">
                                <button>Track Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <div class="row">
                            <div class="col-md-4">
                                <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-8">
                                <p style="color: #8F8F8F; line-height: 25px; font-weight: 700; word-spacing: 4px;" class="h6 ">Kesar Magas &nbsp;<span style="color: #F0D17C;">1Kg</span><br>
                                    Made with pure kesar <br>
                                    <span style="color: black;">On the way!</span></p>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 text-center">
                            <div class="bt1">
                                <button>Track Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="recently mt-5 ">
                        <div class="rec_head">
                            <h1 class="fs-3 fw-bold ms-1" style=" color:#B2632B">Recently Ordered</h1>
                            <p class="recp">Last 10 days</p>
                        </div>
                    </div>

                </div>
                <div class="deliver mb-3">

                    <p class="delp">10/12/2022 Saturday</p>

                    <div></div>
                </div>
                

                    <div class=" mb-3" v-for="(card, index) in somecards" :key="index" v-show="index < somevisibleCards">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="row">
                                <div class="col-md-3">
                                    <img :src="card.image" alt="" class="img-fluid">
                                </div>

                                <div class="col-md-8 ">
                                    <p style="color: #8F8F8F;  font-weight: 600; word-spacing: 4px;" class="h6 ">{{ card.title }} &nbsp; &nbsp; &nbsp;<span style="color: #F0D17C;">{{ card.smalltitle }}</span></p>

                                    <p style="color: rgb(20, 232, 20); font-weight: 600; text-decoration: underline;">{{ card.Des }}</p>

                                </div>
                            </div>
                            </div>
                            <div class="col-md-6">
                                <div class="bt1 text-center">
                                    <button @click="handleCardButtonClick(card)">Order again</button>
                                </div>
                            </div>
                        </div>

                    </div>

                
                <button v-if="visibleCards < somecards.length" @click="loadMore" class="bt">Load More</button>
                <div class="deliver my-5">
                    <div>
                        <p class="delp">1/2/2023 ,Thursday</p>
                    </div>
                    <div></div>
                </div>
                <div class=" mb-3" v-for="(card, index) in allcards" :key="index" v-show="index < visibleCards">
                        <div class="row">
                            <div class="col-md-6  ">
                                <div class="row">
                                <div class="col-md-3">
                                    <img :src="card.image" alt="" class="img-fluid">
                                </div>

                                <div class="col-md-8">
                                    <p style="color: #8F8F8F;  font-weight: 600; word-spacing: 4px;" class="h6 ">{{ card.title }} &nbsp; &nbsp; &nbsp;<span style="color: #F0D17C;">{{ card.smalltitle }}</span></p>

                                    <p style="color: rgb(20, 232, 20); font-weight: 600; text-decoration: underline;">{{ card.Des }}</p>

                                </div>
                            </div>
                            </div>
                            <div class="col-md-6">
                                <div class="bt1 text-center">
                                    <button @click="handleCardButtonClick(card)">Order again</button>
                                </div>
                            </div>
                        </div>

                    </div>
                <button v-if="visibleCards < allcards.length" @click="loadMore" class="bt">Load More</button>
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
    name: 'OrderS',
    components: {
        HeaDer,
        SideBar
    },
    data() {
        return {
            bgcolor: '#F9F9F9',
            allcards: [{
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '250gm',
                    Des: 'Delivered'
                },
                {
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '250gm',
                    Des: 'Delivered'
                },
                {
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '500gm',
                    Des: 'Delivered'
                },
                {
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '250gm',
                    Des: 'Delivered'
                },
            ],
            visibleCards: 2,
            somecards: [{
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '1kg',
                    Des: 'Delivered'
                },
                {
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '1.5kg',
                    Des: 'Delivered'
                },
                {
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                    title: 'Kesar Maga',
                    smalltitle: '2kg',
                    Des: 'Delivered'
                },

            ],
            somevisibleCards: 2,
        }
    },
    methods: {
        loadMore() {
            this.visibleCards += 1;
            this.somevisibleCards += 1
        },

        handleCardButtonClick(card) {
            // Handle button click for each card
            console.log(`Button clicked for ${card.title}`);
            // You can add custom logic here based on the button click
        },
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
    height: 100dvh;
}

.types {
    margin-left: 6.5rem;
    width: 55rem;
    border: 2px solid goldenrod;

}

.orders {
    padding: 1rem 1rem;
}

.bt1 button {
    background-color: #A17A35;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 7px;
}

.rec_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.recp {
    border: 2px solid goldenrod;
    margin-right: 6.4rem;
    padding: 0.2rem 3.3rem;
    border-radius: 10px;
}

.deliver {
    display: flex;
    justify-content: space-between;
}

.delp {
    border: 2px solid goldenrod;
    margin-left: 1rem;
    text-align: center;
    padding: 0.2rem 1.3rem;
    border-radius: 10px;

}

.bt {
    background-color: white;
    color: goldenrod;
    padding: 7px 20px;
    border-radius: 10px;
    border: 2px solid goldenrod;
}

@media (max-width: 800px) {
    .content {
        margin-left: 0rem;
    }

    .types {
        margin-left: 4.5rem;
        width: 85%;
    }

    .content1 {
        display: flex;
        flex-direction: column;
    }



    .rec_head {
        display: flex;
        justify-content: space-between;
        margin-left: -2rem;

    }

    .recp {
        border: 2px solid goldenrod;
        margin-left: 4rem;
        padding: 2px 5px;
        border-radius: 10px;
        display: none;
    }

    .delp {
        border: 2px solid goldenrod;
        margin-left: 0;
        padding: 0.3rem 1rem;
        border-radius: 10px;

    }

  
}
</style>
