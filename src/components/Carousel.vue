<template>
  <b-container>
    <b-carousel
      controls
      indicators
      img-width="1024"
      img-height="50"
      :interval="4000"
    >

      <carousel-slide
        v-for="event in events"
        :key="event.id" :event="event"
      />    

    </b-carousel>

  </b-container>
</template>

<script>
import CarouselSlide from "./CarouselSlide.vue";
import { mapState } from 'vuex'

export default {
  name: "Carousel",
  components: {
    CarouselSlide,
  },
  computed: {
    ...mapState([
      'events'
    ])
  }
}
</script>

<style>
  .container {
    /*padding: 30px 0;*/
    /*margin-top: 150px;*/
  }

</style>