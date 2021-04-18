<template>
  <div class="home">
    <nav-bar-2/>
    <div class="content">
      <img class="poster" src="../assets/poster-son.jpg" alt="">
      <h1 class="poster-caption">Fan Club2</h1>
      <!--<h2>Events</h2>-->
      <!--<div class="events-carousel">-->
      <carousel />
      <!--</div>-->
      <h2>Want to buy our products ?</h2>
      <div class="products-card">
        <product-card />
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar2 from "@/components/NavBar2.vue";
import Carousel from "../components/Carousel.vue";
import Foot from "../components/Foot.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  components: { NavBar2, Carousel, ProductCard, Foot },
};
</script>

<style>

.content {
  /*margin: 0.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/
  background-color: #ebe6df;
  height: 200vh;
}

.events-carousel {
  /*border: 1px solid black;*/
  /*background-color: #043b8c;*/
  margin: 1rem 10rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
}

h2 {
  padding-top: 60px;
  padding-bottom: 20px;
  margin: 0;
}

.products-card {
  margin: 0 10rem;
}

.poster {
  width: 100%;
}

.poster-caption {
  color: white;
  position: relative;
  bottom: 245px;
  font-size: 80px;
  font-family: 'Dela Gothic One', cursive;
  font-family: 'Kiwi Maru', serif;
}

</style>
