<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "NavBar2",
  computed: {
    ...mapState(["showNavbar", "lastScrollPosition"]),
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    ...mapMutations(["updateLastScrollPosition", "updateShowNavbar"]),
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.updateShowNavbar({
        value: currentScrollPosition < this.lastScrollPosition,
      });
      this.updateLastScrollPosition({ value: currentScrollPosition });
    },
  },
};
</script>


<template>
  <div class="navbar bg-light">
    <nav
      class="navbar navbar-expand-lg nav-container"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <div class="container-fluid">
        <!--<router-link class="navbar-brand" to="/"
          ><img class="logo" src="../assets/logo-son2.png" alt="" width="50" height="44"
        /></router-link>-->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active text-light link"
                aria-current="page"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <router-link
                class="nav-link dropdown-toggle text-light link"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item link" to="/vision"
                    >Vision</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item link" to="/mission"
                    >Mission</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active text-light link"
                aria-current="page"
                to="/events"
                >Events</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active text-light link"
                aria-current="page"
                to="/products"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active text-light link"
                aria-current="page"
                to="/gallery"
                >Gallery</router-link
              >
            </li>
            <!--<li class="nav-item">
              <router-link
                class="nav-link active text-light link"
                aria-current="page"
                to="/contactus"
                >Contact Us</router-link
              >
            </li>-->
          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-warning contact-button mr-3" type="submit"><router-link
                class="nav-link active text-light link contact-link"
                aria-current="page"
                to="/contactus"
                >Contact Us</router-link
              ></button>
          </form>
        </div>
      </div>
    </nav>
    <router-link v-if="showNavbar" to="/">
      <img
        class="logo"
        src="../assets/logo-son2.png"
        alt=""
        width="50"
        height="44"
      />
    </router-link>
  </div>
</template>

<style>
.navbar {
  width: 100%;
  font-size: 1rem;
  padding: 0;
  background-color: #043b8c;
  position: fixed;
  top: 0;
  z-index: 1;
}

.navbar:hover {
  background-color: #043b8c;
}

.nav-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.navbar-nav {
  margin-left: 150px;
}

.nav-item {
  padding-left: 10px;
}

.logo {
  height: 110px;
  width: 110px;
  margin-left: 18px;
  position: absolute;
  top: 18px;
  left: 20px;
  z-index: 1;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.contact-link {
  padding: 2px;
  width: 100px;
  text-decoration-color: rgb(248, 249, 250);
}

.contact-button {
  padding: 3.2px 2px;
}

</style>