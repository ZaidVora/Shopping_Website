<template>
  <nav class=" navbar navbar-expand-lg navbar-light bg-light mb-4 ">
    <div class="container">
      <!-- Logo -->
      <p to="/" class="navbar-brand mt-3">
        <img src="@/assets/lo.png" alt="Logo"  />
      </p>

      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Content -->
      <div class="search mt-3 ">
        <label for="ii" class="search-bar">
            <input type="text" id="ii" placeholder="Search for food products" name="search" />
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg></a>
        </label>
    </div>

      <!-- Navbar Links with Icons -->
      <div >
        <ul class="navbar-nav mt-3">
          <li class="nav-item mx-3">
            <router-link
              to="/"
              class="nav-link"
              active-class="active"
              exact
            >   <div class="d-flex flex-column align-items-center">
                <i class="bi bi-house-door icon"></i>
                <span>Home</span>
              </div>
            </router-link>
          </li>
          
          <li class="nav-item mx-3">
            <router-link
              to="/bag"
              class="nav-link"
              active-class="active"
              exact
            >   <div class="d-flex flex-column align-items-center">
                <i class="bi bi-bag icon"></i>
                <span>Bag</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              to="/FavouriTes"
              class="nav-link"
              active-class="active"
              exact
            >   <div class="d-flex flex-column align-items-center">
                <i class="bi bi-heart icon"></i>
                <span>Favourites</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              to="/profile"
              class="nav-link"
              active-class="active"
            ><div class="d-flex flex-column align-items-center">
                <i class="bi bi-person icon"></i>
                <span>Profile</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              to="/SignIn"
              class="nav-link"
              active-class="active"
              exact
            >   <div class="d-flex flex-column align-items-center">
                <i class="bi bi-power icon"></i>
                <span>Logout</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
    export default{
        name:'HeaDer',
        methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
  data(){
    return{
        importedImg: require('@/assets/lo.png'),
    }
  }
    }
</script>
<style scoped>
.active {
  color: orange !important; /* Change to your preferred color */
}

.icon {
  font-size: 1.2rem;
  
}
.active {
  color: orange !important; /* Change to your preferred color */
}
/*
.navbar {
    background-color: transparent;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;

}



.nav-list {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-list li {
    margin-right: 20px;
}

.nav-list a {
    text-decoration: none;
    color: #9D9D9D;
}
.nav-list  i{
    color: black;
   font-size: 1.1rem;
   margin-left: 1rem;
    
}
.nav-list a.active{
    color: orange;
    font-weight: bold;
}
.nav-list i.active{
    color: orange;
    font-weight: bold;
}
.search{
    margin-right: 12rem;
}*/
.search-bar {
    display: flex;
    justify-content: space-between;
    
}

nav .search-bar {
    border-radius: 5px;
    height: 40px;
    width: 24rem;
    padding: 0 15px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid orange;
    font-size: 15px;
    background: white;
}

nav .search-bar input {
    all: unset;
    width: 100%;
}

nav .search-bar a {
    text-decoration: none;
    display: flex;
    color: gray;
    align-items: center;
    font-size: 20px;
}


@media (max-width: 850px) {

    .search{
        display: none;
    }
    i{
        display: none;
    }
}
</style>