<script>
export default {
    name: "Card",
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">
      <img :src="product.img" class="card-img-top" alt="product" />
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">
          {{product.exp}}
        </p>
        <p class="card-text">
          <!--<small class="text-muted">Last updated 3 mins ago</small>-->
        </p>
      </div>
    </div>
</template>