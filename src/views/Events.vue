<script>
import NavBar2 from '../components/NavBar2.vue';
import Foot from "../components/Foot.vue";

export default {
    name: "Events",
    components: {
        NavBar2,
        Foot,
    }
}
</script>

<template>
    <div class="events">
        <nav-bar2></nav-bar2>
        <div class="content">
            <h3>This is Events page.</h3>
        </div>
        <foot />
    </div>
</template>