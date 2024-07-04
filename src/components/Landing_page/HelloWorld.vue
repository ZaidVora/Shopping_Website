<template>
<div :style="{backgroundColor:bgcolor} ">
    <HeaDer />
    <div>
        <div id="custom-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item " :class="{ active: index === 0 }">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6 order-md-0">
                                <div class="carousel-text">
                                    <h2 class="h2 fs-1 fw-bolder mb-3" style="color: #B1622A; word-spacing: 3px;">{{ item.title }}</h2>
                                    <p class="h2 fw-lighter fs-2 mb-2" style="color: #B1622A; word-spacing: 7px;">{{ item.description }}</p>
                                    <p class="h3 fw-lighter" style="color: #B1622A; ">{{item.small }} </p>
                                    <button class="mt-5 carousel-btn py-2 px-5">Add to Basket</button>
                                </div>
                            </div>
                            <div class="col-md-6 order-md-1 car">
                                <img :src="item.image" class="d-block w-100 carousel-img" alt="Slide Image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="carousel-indicators ">
                <li v-for="(item, index) in carouselItems" :key="index" data-bs-target="#custom-carousel" :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
            </ol>
        </div>
    </div>
    <div class="container mt-5">
        <div class="mb-4" style="font-weight: 900;">
            <p class="fw-bold h4 ">Our Products</p>
        </div>

    </div>
    <div class="container">
        <div class="cc">
            <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
            <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
            <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
            <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
            <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
            <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
                <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
                <div class="car1 w-100" >
                    <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid p-3" style="background-color: #D5C196;" alt="">
                    <p class="mt-3 ms-2" style="color: #707070; font-weight: 600;">Kesar Magnass</p>
                    <p class="ms-2 mb-1" style="color: goldenrod; font-weight: 600; margin-top: -0.8rem;">Rs. 250kg</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="h6 ms-2" style="color: #707070; font-weight: 600;">Made with pure kesar</p>
                        <button class="py-0 px-1 me-2  " style="background-color: #A17A35; color: white; border-radius: 8px; border: none; margin-top: -1rem;">Add to cart</button>
                    </div>
                </div>
            
        </div>
  </div>
    <div class="container my-5">
        <div class="mb-4" style="font-weight: 900;">
            <p class="fw-bold h4 ">Know about us</p>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-6">
                <p class=" lh-2 fw-bold fs-3">Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing elit. Saepe, tempore. Lorem ipsum dolor sit amet. adipisicing elit. Dicta aspernatur vero mollitia ipsum voluptates nostrum quae, accusantium reiciendis architecto cum voluptate velit officiis? Expedita est dolore tenetur quod ea doloremque nisi quos cum, quidem eos sapiente sunt dolores nesciunt recusandae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, iste!</p>
            </div>
        </div>
    </div>
    <div class="container ">
        <div class="mb-4" style="font-weight: 900;">
            <p class="fw-bold h4 ">Users Reviews</p>
        </div>
        <div class="st">

            <div class="star" v-for="(card, index) in allcards" :key="index" v-show="index < 3">
                <div class="star1 mb-3">
                    <img :src="card.image" alt="">
                </div>
                <div class="star2">
                    <p class="star21">{{ card.des }}<br>{{ card.small }}</p>
                    <p class="mt-3  star22">{{ card.name }}<br> {{ card.place }}</p>
                </div>
            </div>
            <div class="star  ">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
            <div class="star">
                <div class="star1 mb-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" alt="">
                </div>
                <div class="star2">
                    <p class="star21">"Those sweets were beatiful handcrafted with<br>so much detail, and the taste was simple heavenly"</p>
                    <p class="mt-3  star22">-Rahul Vishnani <br> Surat</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HeaDer from '../HeaDer.vue';

export default {
    name: 'HelloWorld',
    components: {
         HeaDer,
       
    },
    data() {
        return {
            bgcolor: '#F9F9F9',
            carouselItems: [{
                    title: 'The best Magas in the town',
                    description: 'Made with pure ingredients',
                    small: '  Price=Rs.250 for 1kg',
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                },
                {
                    title: 'Now get 25% discount',
                    description: 'On order of 1kg of magas',
                    small: 'Price=Rs.250 for 1kg',
                    image: 'https://graficsea.com/wp-content/uploads/2022/02/Motichoor-Ladoo-Laddu-.png',
                },
                // Add more items as needed
            ],
            
           
        }
    },
   
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
        
    },

}
</script>

<style scoped>

#custom-carousel .carousel-indicators li {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: gray;
    /* Set the default background color */
    margin-right: 5px;
    /* Adjust the margin between indicators */
}

#custom-carousel .carousel-indicators li.active {
    background-color: #A17A35;
    /* Set the active background color */
}

.carousel-img {
    max-width: 100%;
    height: auto;
}

.carousel-btn {
    background-color: #A17A35;
    border-radius: 6px;
    border: none;
    color: white;
}


.st {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    overflow-x: auto;
    padding: 20px;
    white-space: nowrap;
}

.st::-webkit-scrollbar {
    width: 0;
}

.star {
    min-width: 16.2rem;
    height: 30rem;
    background-color: whitesmoke;
    border: 2px solid goldenrod;
    border-radius: 8px;
    clip-path: polygon(51% 80%, 100% 100%, 100% 0, 0 0, 0 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

}

.star1 {
    text-align: center;

}

.star1 img {
    width: 5rem;
    height: auto;
    border-radius: 50%;
    border: 3px solid goldenrod;
}

.star2 {
    text-align: center;

}

.star21 {

    font-size: 0.7rem;
    font-weight: 200;
    color: black;
}

.star22 {
    font-weight: 500;
    color: black;
}
ol{
    list-style-type: none;
    
}
@media (max-width: 850px) {

    .search {
        display: none;
    }

}

.cc {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    overflow-x: auto;
    scrollbar-width: thin;
    white-space: nowrap;
}

.cc::-webkit-scrollbar {
    width: 0;
}

.car1 {
    border: none;
    border-radius: 10px;
    margin: 0 0.5rem;
    width: 25rem;
    background-color: white;
    border: 2px snow;

}




.car11 {
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.car11 p {
    font-weight: 300;
    margin-top: -24px;
    font-size: 14px;
    color: gray;

}

.car11 button {
    background-color: #A17A35;
    color: white;
    padding: 0 10px;
    border: none;
    border-radius: 7px;
    font-size: 12px;
    margin-top: -35px;

}
</style>
