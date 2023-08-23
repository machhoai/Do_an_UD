<template>
    <h1 class="title">Giỏ Hàng Của Bạn</h1>
    <div v-if="CheckShowBag">
        <NotProduct/>
    </div>
    <table class="productBag col-10" v-else>
        <thead>
            <tr>
                <th class="product col-6" scope="col"></th>
                <th class="col-3" scope="col">Số Lượng</th>
                <th class="col-3" scope="col">Số Tiền</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bagProd" v-for="(purchase,index) of purchases" :key="index">
                <th class="info flex-wrap" scope="row">
                    <img :src="purchase.nameImage" class="image col-5" alt="">
                    <div class="infoproduct col-7">
                        <p>Mã SP: {{purchase.maProduct}}-{{Sizes[index].size}}</p>
                        <h1>{{purchase.productName}}</h1>
                        <button type="submit" @click="Remove(purchase.maProduct)">Remove</button>
                    </div>
                </th>
                <td>{{purchase.Purchases.soLuongMua}}</td>
                <td>{{purchase.Purchases.thanhTien}}đ</td>
            </tr>
            <tr class="thanhtoan">
                <th></th>
                <td>Tổng Tiền:</td>
                <td>{{TongTien}}đ</td>
            </tr>
            <tr class="thanhtoan">
                <th></th>
                <td></td>
                <td><button type="submit" @click="ThanhToan()">Thanh Toán</button></td>
            </tr>
        </tbody>
    </table>
    <!-- Thông báo ra màn hình -->
        <div class="toast align-items-center" :class="{'toastshow':toast}" ref="mytoast" v-if="toast" role="alert" aria-live="assertive" aria-atomic="true" >
            <div class="d-flex">
                <div class="toast-body">
                    {{notification}}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
</template>

<script>
import NotProduct from '@/components/NotProduct.vue'
import axios from "axios";
export default {
    data() {
        return {
            Account: [],
            purchases: null,
            Sizes:null,
            toast: false,
            notification:''
        }
    },
    components:{
        NotProduct
    },
    methods:{
        async GetData(){
            const mauser = this.Account.mauser;
            const ShowData = await axios.post("http://localhost:3000/api/showbag",{mauser})
            if(ShowData.data.EC === 0)
            {
                this.purchases = ShowData.data.DT[0].Products
                this.Sizes = ShowData.data.DT[0].Sizes
                console.log(">>> ShowData:", this.purchases);
                console.log(">>> Show Sizes:", this.Sizes);
                
            }
            
        },
        async Remove(maProduct){
            console.log(">>>Check maProduct: ",maProduct)
            const RemoveData = await axios.post("http://localhost:3000/api/removeproduct",{maProduct})
            console.log(">>>Check EM: ",RemoveData.data.EM )
            window.location.reload();
        },
        async ThanhToan(){
            const mauser = this.Account.mauser;
            console.log(">>>check mauser: ",mauser)
            const thanhtoan = await axios.post("http://localhost:3000/api/thanhtoan",{mauser})
            
           
            this.toast = true
            this.notification ="Thanh toan thanh cong"
            setTimeout(() => {
                this.toast = false;
            }, 5000);
            setTimeout(() => {
                window.location.reload();
            }, 1000); 
        }
        
    },
    mounted(){
        const session = sessionStorage.getItem("account");
        if (session) {
        this.Account = JSON.parse(session);
        console.log(">>> account:", this.Account.mauser);
        }
        if(this.Account.mauser !==0){
            this.GetData()
        }
    },
    computed:{
        TongTien(){
            if(this.purchases !== null)
            {
                let pill = 0
                for (let i = 0; i < this.purchases.length; i++) {
                    
                    pill += parseInt((this.purchases[i].Purchases.thanhTien).replace(/\./g, ""))
                }
                return pill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
        },
        CheckShowBag(){
            if(this.purchases === null){
                return true
            }
            return false
        }
    }

}
</script>

<style scoped>
/* title */
.title{
    margin-top: 30px;
    font-size: 28px;
    font-weight: 600;

}

/* css phan table */
    /* row chua anh va thong tin */
    .productBag{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .productBag .bagProd{
        
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
    }
    .productBag .info{
        display: flex;
        margin: 5px 0;
    }
    .productBag .info .image{
        height: 100px;
        width: 100px;
    }
    .productBag .info .infoproduct p{
        font-size: 14px;
        font-weight: 200;
        margin: 5px 0;
    }
    .productBag .info .infoproduct h1{
        font-size: 18px;
        font-weight: 600;
        margin: 5px 0 ;
    }
    .productBag .info .infoproduct button{
        background: black;
        color: white;
        font-size: 14px;
    }
    /* thanh toán */
    .thanhtoan td{
        padding-top: 30px;
    }
    .thanhtoan td button{
        background: red;
        font-weight: 800;
        border-radius: 5px;
    }
    /* css toast */
    .toast{
        position: absolute;
        right: 20px;
        top: 10px;
        
    }
    .toastshow{
        display: block;
    }
</style>