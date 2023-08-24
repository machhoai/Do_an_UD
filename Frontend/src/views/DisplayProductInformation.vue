<template>
    <div class="Information-Product flex-wrap ư-100">
        <div class="Contain-Picture col-10 col-md-5">
            <div class="Picture-product col-10">
                <div class="Elm-Sale">
                    <span class="sale-off">
                        {{product.sale}}% <br>
                        OFF
                    </span>
                </div>
                <img :src="product.path" class="w-100" alt="">
            </div>
        </div>
        <div class="Infor-Product col-10 col-md-6">
            <div class="Name-Price">
                <h1>{{product.name}}</h1>
                <p>Mã hàng : {{product.productcode}}</p>
                <div class="Sale" v-if="product.sale !== 0">
                    <h2 class="price-sale" ><b>{{Sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}} VND</b> </h2>
                    <p class="ole-price"> <s>{{product.price}} VND</s></p>
                </div>
                <div class="Sale" v-else>
                    <p class="ole-price" >{{product.price}} VND</p>
                </div>
            </div>
            <div class="Introduce-product">
                <p>{{product.infoProduct}}</p>
            </div>
            <div class="Size">
                <h1>Size</h1>
                <div class="chooseSize">
                    <input type="button" value="S" @click="ChooseSize('S')" :class="{'input-active':SizeActive === 'S'}">
                    <input type="button" value="M" @click="ChooseSize('M')" :class="{'input-active':SizeActive === 'M'}">
                    <input type="button" value="L" @click="ChooseSize('L')" :class="{'input-active':SizeActive === 'L'}">
                    <input type="button" value="XL" @click="ChooseSize('XL')" :class="{'input-active':SizeActive === 'XL'}">
                </div>
                <div class="quantity">
                    <p>Số Lượng</p>
                    <button class="minus" @click="EnterQuantity('-')">-</button>
                    <input type="number" v-model="number" name="Enter-Quantity" min="1">
                    <button class="plus" @click="EnterQuantity('+')">+</button>
                </div>
                <button class="AddToCart" @click="Added()" >Add To Cart</button>
            </div>
        </div>
        <!-- Thông báo ra màn hình -->
        <div class="toast align-items-center" :class="{'toastshow':toast}" ref="mytoast" v-if="toast" role="alert" aria-live="assertive" aria-atomic="true" >
            <div class="d-flex">
                <div class="toast-body">
                    {{success}}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            product:{
                path:'',
                name:'',
                price:'',
                productcode:'',
                infoProduct:'',
                sale: 0,

            },
            SizeActive: null,
            number: 1,
            Selection:'',
            PriceSale:0,
            Account: [],
            toast: false,
            success:''
        }
    },
    mounted(){
        this.GetDataProduct();

        const session = sessionStorage.getItem("account");
        if (session) {
            this.Account = JSON.parse(session);
            console.log(">>> account:", this.Account.mauser);
        }
        

    },
    computed:{
        Sale()
        {
            if(this.product !== null)
            {
                const price = parseInt(this.product.price.replace(/\./g, ""))
                console.log(">>>check pricesale: ", price);
                return (price - ((price) * (this.product.sale) / 100));
            }
            
        }
    },
    methods:{
        ChooseSize(data){
            this.SizeActive = data;
            console.log(">>> check SizeActive", this.SizeActive)
        },
        EnterQuantity(data){
            this.Selection = data;
            if(this.Selection === '+')
            {
                this.number += 1;
            }
            else if(this.Selection === '-' && this.number > 1)
            {
                this.number --;
            }
            
        },
        async Added(){
            console.log(">>>check so luong : ",this.number)
            // alert('Đã add vào cart');
            
            
            const mauser = this.Account.mauser
            const soluong = this.number
            const size = this.SizeActive
            const maProduct = this.$route.params.maProduct
            const thanhtien = (this.Sale * soluong ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            console.log(">>>check maproduct: ",maProduct)
             
            //goi api
            const AddToBag = await axios.post("http://localhost:3000/api/addtobag",
                {
                    mauser,
                    soluong,
                    size,
                    maProduct,
                    thanhtien
                }
            );
            if(AddToBag.data.EC === 0)
            {
                this.success ='Đặt Hàng Thành Công !'
                this.toast = true

                setTimeout(() => {
                this.toast = false;
                }, 5000);
            }
            else if(AddToBag.data.EC !== 0)
            {
                this.success = "số lượng không đủ !"
                this.toast = true
                setTimeout(() => {
                this.toast = false;
                }, 5000);
            }
        },
        async GetDataProduct() {
            console.log(">>>check params: ", this.$route.params);
            const productdetail = await axios.post("http://localhost:3000/api/productdetail",
                this.$route.params
            );
            console.log(">>>check productdetail: ", productdetail.data.DT);
            this.product.path = productdetail.data.DT.nameImage
            this.product.name = productdetail.data.DT.productName
            this.product.price = productdetail.data.DT.price
            this.product.productcode = productdetail.data.DT.maProduct
            this.product.infoProduct = productdetail.data.DT.productInfo
            this.product.sale = productdetail.data.DT.sale
            console.log(">>>check product: ", this.product.path);
        },
    },
    
}
</script>

<style scoped>
    .Information-Product
    {
        display: flex;
        justify-content: center;
        margin: 20px 0;

    }
    /* css phần hình ảnh sản phẩm */
    .Contain-Picture
    {
        display: flex;
        justify-content: center;
        position: relative;
    }

    /* css phần thông tin sản phẩm */
    .Infor-Product{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Infor-Product .Name-Price
    {
        width: 80%;
        text-align: left;
        padding-bottom:10px;
        border-bottom: 1px solid grey;
    }
    /* font size cho thẻ p  */
    .Infor-Product p
    {
        font-size: 16px;
        margin: 0;
    }
    /* font size cho thẻ name đồ */
    .Infor-Product .Name-Price h1
    {
        font-size: 27px;
        font-weight: 700;
    }
    /* sale */
    .Infor-Product .Name-Price .Sale
    {
        display: flex;
    
    }
    .Infor-Product .Name-Price .price-sale{
        color: red;
    }
    .Infor-Product .Name-Price .Sale h2
    {
        margin-right: 10px;
        line-height: 27px;
    }
    .Infor-Product .Name-Price .Sale p
    {
        margin-top: 10px;
    }
    /* thông tin đồ */
    .Infor-Product .Introduce-product
    {
        width: 80%;
        text-align: left;
    }
    .Infor-Product  h2{
        font-size: 22px;
        margin: 10px 0 0 ;
    }
    .Infor-Product .Introduce-product h3
    {
        font-size: 17.5px ;
        margin: 10px 0 0;
    }

    /* css cho phần cờ giảm giá */
    .Elm-Sale
    {
        background: rgb(215, 4, 4);
        border-radius: 0 0 20px 20px;
        height: 70px;
        width: 55px;
        position: absolute;
        top: 0;
        left: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sale-off
    {
        color: white;
        font-weight: 600;
    }

    /* css phaanf size */
    .Size
    {
        margin: 20px 0;
        width: 80%;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .Size h1
    {
        font-size: 20px;
        font-weight: 700;
    }
    .Size input
    {
        margin: 0 5px;
        font-weight: 700;
        width: 40px;
        text-align: center;
    }
    .input-active 
    {
        background: black;
        color: white;
    }
    /* css cho quantity */
    .quantity
    {
        display: flex;
        margin: 20px 0; 
    }
    .quantity p
    {
        font-size: 15px;
        margin-right: 50px;
    }
    .quantity button
    {
        margin: 0;
        width: 30px;
        border: 1px solid black;
        height: 30px;
        font-size: 18px;
        font-weight: 600;
        background: white;
    }
    .quantity input
    {
        margin: 0;
        font-weight: 400;
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        opacity: 0;
        pointer-events: none;
    }
    /* css AddToCart */
    .AddToCart
    {
        background: black;
        color: white;
        cursor: pointer;
    }
    /* css toast */
    .toast{
        position: absolute;
        right: 20px;
        
    }
    .toastshow{
        display: block;
    }
</style>