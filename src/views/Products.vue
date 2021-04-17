<script>
import NavBar2 from "../components/NavBar2.vue";
import Foot from "../components/Foot.vue";
import Deneme from "../components/Deneme.vue";

export default {
    name: "Products",
    components: {
        NavBar2,
        Foot,
        Deneme
    },
}
</script>

<template>

    <div class="products">
        <nav-bar-2></nav-bar-2>
        <div class="content">
            <h3>This is Products page.</h3>
            <deneme />
        </div>
        <foot></foot>      
    </div>

</template>