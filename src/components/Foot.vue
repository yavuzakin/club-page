<script>
export default {
    name: "Footer",
}
</script>

<template>
    <div class="footer">
        <div class="symbols">
            <a href="https://www.facebook.com"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com"><i class="fab fa-instagram-square"></i></a>
            <a href="https://www.twitter.com"><i class="fab fa-twitter-square"></i></a>
        </div>
        <br>
        <div class="copyright">
            <span>&#169;</span>
            <span>Copyright. All rights reserved.</span>
        </div>
    </div>
</template>

<style>

.footer {
    /*margin: .5rem 1rem;*/
    vertical-align: center;
    padding: .5rem 1rem;
    /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/
    background-color: #043b8c;
}

.symbols {
    margin-top: 28px;
}

span {
    line-height: 1;
    color: white;
}

i {
    color:white;
    font-size: 2.3rem;
    margin: 0 5px;
}

.copyright {
    font-size: 1rem;
    margin-bottom: 22px;
}

</style>