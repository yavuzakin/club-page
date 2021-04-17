<script>
import NavBar2 from "../components/NavBar2.vue";
import Foot from "../components/Foot.vue";

export default {
    name: "Mission",
    components : { NavBar2, Foot, },
}
</script>

<template>
    <div class="Mission">
        <nav-bar-2></nav-bar-2>
        <div class="content">
            <h3>This is Mission page.</h3>
        </div>
        <foot />
    </div>
</template>