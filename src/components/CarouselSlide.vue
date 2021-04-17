<template>
    <b-carousel-slide
        :img-src="event.img"
        :caption="event.caption"
        :text="event.exp"
    >
    </b-carousel-slide>
</template>

<script>
export default {
    name: "CarouselSlide",
    props: {
        event: {
            type: Object,
            required: true
        },
    }
}
</script>

<style>

img {
    margin: 0;
}

</style>