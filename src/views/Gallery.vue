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
            <b-container fluid class="p-5">
                <b-row>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=60" alt="Image 3"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=61" alt="Image 3"></b-img>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=62" alt="Image 1"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=63" alt="Image 2"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=67" alt="Image 3"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=68" alt="Image 3"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=66" alt="Image 3"></b-img>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=70" alt="Image 1"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=71" alt="Image 2"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=72" alt="Image 3"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=73" alt="Image 3"></b-img>
                  </b-col>
                  <b-col>
                    <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=74" alt="Image 3"></b-img>
                  </b-col>
                </b-row>
            </b-container>
        </div>
        <foot />
    </div>
</template>

<style>
    .row {
        margin-top: 15px;
    }
</style>