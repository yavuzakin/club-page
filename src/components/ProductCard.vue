<script>
import { mapState } from 'vuex'
import Card from "./Card.vue";

export default {
  name: "ProductCard",
  computed: {
    ...mapState([
      'products'
    ])
  },
  components: {
    Card,
  }
};
</script>

<template>
  <div class="card-group">
    <card v-for="product in products" :key="product.id" :product="product"/>
    <!--<div class="card">
      <img src="https://picsum.photos/id/247/250/180" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="card">
      <img src="https://picsum.photos/id/247/250/180" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>-->
  </div>
</template>

<style>

.card {
  margin-right: 5px;
  margin-left: 5px;
}

</style>