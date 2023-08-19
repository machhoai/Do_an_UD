<template>
    <div class="container">
       <div class="title"><a href="#"><h1><span>Accessories</span></h1></a></div>
        <nav class="header">
            <ul>
                <li>Bags</li>
                <li>Caps</li>
            </ul>
        </nav>
        <div class="products">
            <div class="aproduct product" v-for="(item,index) of product" :key="index" @click="GoProductPage(item)">
                <div class="product-img">
                    <img :src="item.nameImage" alt="">
                </div>
                <div class="product-info">
                    <div class="product-color">

                    </div>
                    <h3 id="product-name">{{item.productName}}</h3>
                    <div class="box-price" v-if="item.sale !== 0">
                        <span id="curr-price">{{priceSale[index]}}<u>VND</u></span>
                        <span id="old-price"><s>{{item.price}}<u>VND</u></s></span>
                    </div>
                    <div class="box-price" v-else>
                        <span id="old-price" style="font-weight:600">{{item.price}}<u>VND</u></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            product:null,
            priceSale: null,
        }
    },
    methods:{
        GoProductPage(item){
        this.$router.push({name:'ProductInformation', params:{maProduct: item.maProduct}})
      },
        async GetData(){
            const Type = "phu kien";
            const Product = await axios.post("http://localhost:3000/api/productfilter",
                {Type}
            );           
            this.product = Product.data.DT
            console.log(">>>show product: ",Product.data.DT )
            const list =[]
            for(var i =0; i < this.product.length; i ++)
            {
                const price = parseInt(this.product[i].price.replace(/\./g, ""));
                list[i] = price - (price*(this.product[i].sale)/100)
            }
            this.priceSale =list
            console.log(">>>show price sale: ",this.priceSale )
        },
        
    },
    mounted(){
        this.GetData()
    },
}
</script>

<style scoped>

.container
{
    height: auto;
    position: relative;
    top :40px;
    display: block;
    width: 100%;
    padding-bottom: 50px;
    border-top: 1px solid black;
}

a
{
    color: black;
    text-decoration: none;
}

h1
{
    text-transform: uppercase;
    position: relative;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder ;
    position: relative;
}
.title
{
    position: relative;
    top: -25px;
    max-width: 100%;
}

.title span
{
    background: white;
    height: 100%;
    width: 50px;
    padding: 10px;
}

.header
{
    height: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    top: -20px;
}

.header ul
{
    display: inline-flex;
    justify-content: center;
    
}

.header ul li
{
    list-style: none;
    padding: 10px;
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.products
{
    height: auto ;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    top: -20px;
}

.aproduct
{
    height: auto;
    max-width: 31%;
    padding-right: 10px;
    padding-left: 5px;
    padding-bottom: 15px;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 50px;
    transition: 1s;
    justify-content: center;
}

.aproduct:hover
{
    box-shadow: 0px 0px 50px -3px rgba(0,0,0,0.1);
    transition: 1s;
}

.products img
{
    max-width: 100%;
}

.product-color
{

    max-width: 100%;
}

.product-info
{
    height: auto;
    max-width: 100%;
}

.product-info #product-name
{
    font-size: 1.2rem;
    padding-top: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.box-price
{
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
}

.box-price #curr-price
{
    font-size: 20px;
    text-decoration: none;
    color: red;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.box-price #old-price
{
    font-size: 20px;
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@media(max-width:900px) {
    .products
    {
        height: auto ;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        top: -20px;
    }
    .aproduct
    {
        min-width: 48%;
    }
    .box-price #curr-price
    {
        color: red;
        font-weight: 700;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
    }
    .box-price #old-price
    {
        color: rgb(0, 0, 0);
        font-weight: 700;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
    }
}
</style>