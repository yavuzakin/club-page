<script>
export default {
    name: "Deneme",
}
</script>


<template>
<div class="product-container">
    <div class="ass">
        <div class="as">
            <div class="a">
                <div class="product-img">
                    <img src="../assets/product1.jpg" alt="">
                </div>
                <div class="product-features">
                    <span class="product-name">Classic Utility Jacket</span>
                    <div class="sizes">
                        <div class="size">XS</div>
                        <div class="size">S</div>
                        <div class="size">M</div>
                        <div class="size">L</div>
                        <div class="size">XL</div>
                    </div>
                    <span class="price">555<i class="fas fa-lira-sign price"></i></span>
                    <button class="btn btn-primary">View</button>
                </div>
            </div>
            <div class="a">2</div>
            <div class="a">3</div>
        </div>
        <div class="as">
            <div class="a">4</div>
            <div class="a">5</div>
            <div class="a">6</div>
        </div>
        <div class="as">
            <div class="a">7</div>
            <div class="a">8</div>
            <div class="a">9</div>
        </div>
    </div>
</div>
</template>

<style>

.ass {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 2.2%;
}

.as {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.a {
    height: 256px;
    width: 576px;
    background-color: #FCFFFA;
    border-radius: 15px;
    margin: 2% 10px;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.product-img {
    margin: auto 0;
    width: 35%;
    /*border: 2px solid black;*/
}

.product-img img {
    width: 100%;
    height: 256px;
    border-radius: 15px;
}

.product-features {
    width: 65%;
    /*border: 2px solid yellow;*/
    /*height: 300px;*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.sizes {
    display: flex;
    color: rgb(107, 114, 128);
    font-size: 20px;
    justify-content: space-around;
    text-align: left;
    width: 60%;
}

.size {
    margin: 2%;
}

.product-name {
    color: black;
    font-size: 30px;
}

.price {
    font-size: 24px;
    color: black;
}

button {
    margin: 0 7%;
}

.product-container {
    background: #fd746c;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff9068, #fd746c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff9068, #fd746c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>