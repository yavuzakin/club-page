<script>
import NavBar2 from "../components/NavBar2.vue";
import Foot from "../components/Foot.vue";

export default {
    name: "Gallery",
    components: { NavBar2, Foot},
}
</script>

<template>
    <div class="gallery">
        <nav-bar-2 />
        <div class="content">
            <h3>This is Gallery page.</h3>
        </div>
        <foot />
    </div>
</template>