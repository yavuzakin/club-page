<script>
import NavBar2 from "../components/NavBar2";
import Foot from "../components/Foot";

export default {
    name: "ContactUs",
    components: { NavBar2, Foot }
}
</script>

<template>
    <div class="contact-us">
        <nav-bar-2 />
        <div class="content">
            <h3>This is Contact Us page.</h3>
        </div>
        <Foot />
    </div>
</template>