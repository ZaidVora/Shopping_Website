<template>
<div class="sidebar" :style="{width: sidebarWidth}" style="background-color: white;">
    <h1>
        <span v-if="collapsed">
            <div><img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" style="max-width: 100%;  border-radius: 50%; 
    border: 1px solid goldenrod; " alt=""></div>
            <div class="mt-3 fw-bold text-center h3">Zack</div>
            <hr>
            <div class="i mt-5 text-center">
              <router-link v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link my-4" :class="{ active: link.to === $route.path }" exact>
                            <i :class="link.icon"></i>
                            
                        </router-link>
            </div>
        </span>
        <span v-else>
            <div class="side mb-3">
                <div class="bar " style="margin-top: -1rem;">
                    <div class="personal  ms-3">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.H7-Uj-mf-T6cwdlb2c1-ZQHaGU&pid=Api&P=0&h=220" class="img-fluid" alt="">
                        <div class="name mt-3">
                            <h4 class="h4" style="font-weight: 800;margin: 0 0 0.8rem 0; color: black;">Zack Gonsalves</h4>
                            <p style="margin-top: -0.5rem; font-weight: 500;" class="text-muted h5">zack1@gmail.com</p>
                        </div>
                    </div>
                    <div class="others mt-5 text-start d-flex flex-column ms-2">
                        <router-link v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link my-2" :class="{ active: link.to === $route.path }" exact>
                            <i :class="link.icon"></i>
                            <span>{{ link.text }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </span>
    </h1>
    <SidebarLink />
    <p class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
        <i class="bi bi-chevron-double-right"></i>"
    </p>
</div>
</template>

<script>
import {
    collapsed,
    toggleSidebar,
    sidebarWidth
} from '../state';
export default {
    props: {},
    setup() {
        return {
            collapsed,
            toggleSidebar,
            sidebarWidth,
            navLinks: [{
                    to: '/Profile',
                    icon: 'bi bi-person icon',
                    text: 'Profile'
                },
                {
                    to: '/Orders',
                    icon: 'bi bi-bag icon',
                    text: 'Orders'
                },
                {
                    to: '/ResetPass',
                    icon: 'bi bi-house-door icon',
                    text: 'Reset Password'
                },
                {
                    to: '/PaymentMet',
                    icon: 'bi bi-wallet icon',
                    text: 'Payment Method'
                },
                {
                    to: '/AddresS',
                    icon: 'bi bi-calendar2-week',
                    text: 'Manage Address'
                },
                {
                    to: '/HelpSup',
                    icon: 'bi bi-person-raised-hand',
                    text: 'Help and Support'
                },
                {
                    to: '/TermsCon',
                    icon: 'bi bi-newspaper',
                    text: 'Terms and Conditions'
                },
                {
                    to: '/LogOut',
                    icon: 'bi bi-power',
                    text: 'Logout'
                },
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
span,
i {
    font-size: 1.2rem;
    font-weight: 500;
}

span {
    margin-left: 0.6rem;
}

.sidebar {
    color: rgb(15, 13, 13);
    background-color: var(--sidebar-bg-color);
    float: left;
    position: relative;
    z-index: 1;
    margin-left: -0.9rem;
    margin-right: -4rem;
    border: 2px solid goldenrod;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    clip-path: polygon(100% 0, 76% 59%, 100% 100%, 0 100%, 0 0);
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    color: black;
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.personal img {
    max-width: 50%;
    height: auto;
    border-radius: 50%;
    border: 1px solid goldenrod;

}

.active {
    color: orange;
    font-weight: bold;
}

@media (max-width: 800px) {
    .sidebar {
        clip-path: polygon(100% 0, 100% 58%, 100% 100%, 0 100%, 0 0);
    }
}
</style>
