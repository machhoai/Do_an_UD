<template>
    <div class="container">
       <div class="title"><a href="#"><h1><span>Bottom</span></h1></a></div>
        <nav class="header">
            <ul>
                <li>Pants</li>
                <li>Sweatpants</li>
                <li>Shorts</li>
            </ul>
        </nav>
        <div class="products" v-for="(prod, indexProd) in product" :key="indexProd" v-show="indexproducts === indexProd">
            <p>Page:{{indexProd +1}}</p>
            <div class="aproduct product" v-for="(item,index) of prod" :key="index" @click="GoProductPage(item)">
                <div class="product-img">
                    <img :src="item.nameImage" alt="">
                </div>
                <div class="product-info">
                    <div class="product-color">

                    </div>
                    <h3 id="product-name">{{item.productName}}</h3>
                    <div class="box-price" v-if="item.sale !== 0">
                        <span id="curr-price">{{priceSale[indexProd][index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}} VND</span>
                        <span id="old-price"><s>{{item.price}} VND</s></span>
                    </div>
                    <div class="box-price" v-else>
                        <span id="old-price" style="font-weight:600">{{item.price}} VND</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="Page col-12" >
            <button v-for="(item,index) of priceSale" :key="index" 
            @click="ChangePage(index)" :class="{ 'activebutton': indexpage ===index}"
            >{{index + 1}}</button>
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
            startIndex:0,
            endIndex: 15,
            indexpage:0,
            indexproducts:0,
        }
    },
    methods:{
        GoProductPage(item){
        this.$router.push({name:'ProductInformation', params:{maProduct: item.maProduct}})
      },
        async GetData(){
            const Type = "quan";
            const Product = await axios.post("http://localhost:3000/api/productfilter",
                {Type}
            );           
            // this.product = Product.data.DT
            console.log(">>>show product: ",Product.data.DT )
            const list =[]
            for(var i =0; i < Product.data.DT.length; i ++)
            {
                const price = parseInt(Product.data.DT[i].price.replace(/\./g, ""));
                list[i] = price - (price*(Product.data.DT[i].sale)/100)
            }

            //tao cac trang nho
            const listProduct =[]
            const listSale = []
            for(var i=0 ;i < (Product.data.DT.length /15);i++)
            {
                listProduct[i] = Product.data.DT.slice(this.startIndex + 15*(i) , this.endIndex + 15*(i));
                listSale[i] = list.slice(this.startIndex + 15*(i) , this.endIndex + 15*(i));
            }
            this.product = listProduct
            this.priceSale =listSale
            console.log(">>>show price sale: ",this.priceSale )
        },
        ChangePage(index){
            this.indexpage = index
            this.indexproducts = index
        }
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
    top: -20px;
}

.header ul
{
    display: inline-flex
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
    color: red;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.box-price #old-price
{
    font-size: 20px;
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
.Page{
    display: flex;
    flex-direction: row;
}
.Page button{
    margin: 0 0.5px;
}

.activebutton{
    background: black;
    color: white;
}
</style>