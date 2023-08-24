<template>
  <!-- thêm sẩn Phẩm -->
  <div class="AddProduct col-10 col-lg-8">
    <h1>ADD PRODUCT</h1>
    <form
      class="row flex-wrap"
      id="FormAddProduct"
      action=""
      method=""
      enctype="multipart/form-data"
    >
      <div class="col-lg-5 col-10">
        <p>Mã Sản Phẩm</p>
        <input type="text" v-model="maProduct" placeholder="enter Product Code" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Tên Sản Phẩm</p>
        <input type="text" v-model="nameProduct" placeholder="enter Product Name" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Số lượng Sản Phẩm</p>
        <input type="text" v-model="soLuong" placeholder="enter Number Of Product" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Giá Sản Phẩm</p>
        <input type="text" v-model="price" placeholder="enter Product Price" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Thông tin Sản Phẩm</p>
        <input type="text" v-model="productInfo" placeholder="enter Product infomation" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Sale Sản Phẩm</p>
        <input type="text" v-model="sale" placeholder="enter Sale %" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Loại Sản Phẩm</p>
        <input type="text" v-model="typeProduct" placeholder="enter Type Of Product" />
      </div>
      <div class="col-lg-5 col-10">
        <p>Ảnh Sản Phẩm</p>
        <input type="file" class="form-control-file" @input="GetFile" />
      </div>
    </form>
    <div class="col-lg-5 col-10">
      <input type="submit" class="button" value="Add Sản Phẩm" @click="AddProduct()" />
    </div>
  </div>
  <div class="Edit_Delete col-12">
    <h1>EDIT/DELETE PRODUCT</h1>
    <input type="text" v-model="findmaproduct" placeholder="Enter the product code you want to find">
    <button type="submit" @click="FindProduct()">Find</button>
    <div class="show_Product col-10 col-lg-8" v-if="myProduct !== null">
      <div style="display:flex;">
        <h1>{{ProductCode}}</h1>
        <h1>{{NameProduct}}</h1>
      </div>
      <div class="button">
        <button class="bg-warning" type="submit" @click="Edit()">Edit</button>
        <button class="bg-danger" type="submit" @click="Delete()">Delete</button>
      </div>
      
    </div>
  </div>
  <!-- Thông báo ra màn hình -->
        <div class="toast align-items-center" :class="{'toastshow':toast}" ref="mytoast" v-if="toast" role="alert" aria-live="assertive" aria-atomic="true" >
            <div class="d-flex">
                <div class="toast-body">
                    {{notification}}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    <div class="BTN-Recycle-Bin">
      <button @click="Show()">Recycle Bin</button>
    </div>
    <table class="productBag col-10" v-show="show" >
      <thead>
          <tr>
            <th class="product col-3" scope="col"></th>
            <th class="col-4" scope="col">Mã Sản Phẩm</th>
            <th class="col-4" scope="col">Tên Sản Phẩm</th>
            <th class="col-4" scope="col"></th>
          </tr>
      </thead>
      <tbody>
          <tr class="bagProd" v-for="(item,index) of Bin" :key="index">
              <th class="info flex-wrap" scope="row">
                <img :src="item.Product.nameImage" class="image col-5" alt="">
              </th>
              <td>{{item.Product.maProduct}}</td>
              <td>{{item.Product.productName}}</td>
              <td><button type="submit" @click="GetProductFromBin(item.Product)">Get</button></td>
          </tr>
      </tbody>
    </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      getInfoImage: null,
      // các v-model cho các input
      maProduct:'',
      nameProduct:'',
      soLuong: 0,
      price:'',
      productInfo:'',
      sale: 0,
      typeProduct:'',
      findmaproduct:'',
      myProduct:null,
      toast: false,
      notification:'',
      Bin:null,
      show:false
    };
  },
  mounted(){
    this.GetBin()
    
  },
  methods: {
    async GetProductFromBin(Product){
      console.log(">>>Check Product in bin: ",Product)
      const GetProductInBin =  await axios.post("http://localhost:3000/api/getproductinbag",Product);

      if(GetProductInBin.data.EC === 0 ){
        this.toast = true
        this.notification ="Added success!"
        setTimeout(() => {
                this.toast = false;
            }, 5000); 
      }
      else{
        this.toast = true
        this.notification ="Add failed!"
        setTimeout(() => {
                this.toast = false;
            }, 5000);
      }

    },
    async GetBin(){
      const DataBin =  await axios.post("http://localhost:3000/api/recyclebin");
      console.log(">>>check save: ", DataBin.data.DT)
      this.Bin =DataBin.data.DT
    },
    GetFile(event) {
      this.getInfoImage = event.target.files[0];
    },
    async AddProduct() {
      const formData = new FormData();
      formData.append("maproduct", this.maProduct);
      formData.append("nameproduct", this.nameProduct);
      formData.append("soluong", this.soLuong);
      formData.append("price", this.price);
      formData.append("productinfomation", this.productInfo);
      formData.append("sale", this.sale);
      formData.append("type", this.typeProduct);
      formData.append("file", this.getInfoImage);

      console.log(">>>info images:2 ", formData);
      console.log(formData.has("file"));
      const Addproduct = await axios.post(
        "http://localhost:3000/api/apiproduct",
        formData
      );
      if(Addproduct.data.EC === 1){
        this.toast = true
        this.notification ="the maproduct is exist"
        setTimeout(() => {
          this.toast = false;
        }, 5000);
      }
      else if(Addproduct.data.EC === 0){
        setTimeout(() => {
          window.location.reload();
        }, 100); 
      }
    },

    async FindProduct(){
      const maProduct = this.findmaproduct
      const findproduct = await axios.post("http://localhost:3000/api/findproduct",
        {maProduct}
      )
      this.myProduct = findproduct.data.DT 
      console.log(">>>myProduct ", this.myProduct);
      if(findproduct.data.EC !== 0 ){
        this.toast = true
        this.notification ="not found your product code"
        setTimeout(() => {
                this.toast = false;
            }, 5000); 
      }
    },
    Show(){
      if(this.show !== true){
        this.show = true
      }
      else{
        this.show = false
      }
      
    },
    Edit(){
        const ma = this.findmaproduct
        this.$router.push({name:'EditProduct', params:{maProduct:ma}})
    },
    async Delete(){
      const ma = this.findmaproduct
      this.SaveBin(ma)
      const Delete = await axios.post(
        "http://localhost:3000/api/deleteproduct",
        {ma}
      );
      setTimeout(() => {
          window.location.reload();
        }, 100);
    },
    async SaveBin(ma){
        const save = await axios.post(
        "http://localhost:3000/api/savebin",
        {ma}
      );     
    }
    
  },
  computed:{
    NameProduct(){
      if(this.myProduct !== null){
        return this.myProduct.productName
      }
    },
    ProductCode(){
      if(this.myProduct !== null){
        return this.myProduct.maProduct
      }
    }
  }

};
</script>

<style scoped>
/* add product */
.AddProduct {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 40px 0;
}
#FormAddProduct {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
}
#FormAddProduct div p{
  margin-top: 20px;
  margin-bottom:0px ;
  font-weight: 600;
}
.button {
  background: red;
  border-radius: 10px;
  height: 40px;
  width: 150px;
  margin-top:50px ;
  color: aqua;
  font-weight: 600;
}
/* edit and delete */
.Edit_Delete{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.Edit_Delete .show_Product{
  display: flex;
  height: 70px;
  align-items: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 40px 0 0 ;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.Edit_Delete .show_Product h1{
  font-size: 18px;
  margin-right: 10px;
}
.Edit_Delete .show_Product .button{
  position: relative;
  display: flex;
  background: none;
  margin:  0;

}
.Edit_Delete .show_Product button{
  border-radius: 5px;
  margin-left: 10px;
  font-weight: 600;
  height: 40px;
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

/* css phần thùng rác */
.BTN-Recycle-Bin{
  margin-top:20px ;

}
.BTN-Recycle-Bin button{
  background: rgb(225, 222, 222);
  font-weight: 700;
  border-radius: 5px;
  color: rgb(0, 0, 0);
}
.Recycle-Bin{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.productBag{
  margin-top: 20px;
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
  justify-content: center;
}
.productBag .info .image{
    height: 100px;
    width: 100px;
}

.bagProd button{
  border-radius: 5px;
  background: yellow;
  font-weight: 600;
}
</style>