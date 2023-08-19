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
      myProduct:null
    };
  },
  methods: {
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
    },

    async FindProduct(){
      const maProduct = this.findmaproduct
      const findproduct = await axios.post("http://localhost:3000/api/findproduct",
        {maProduct}
      )
      this.myProduct = findproduct.data.DT 
      console.log(">>>myProduct ", this.myProduct);
      if(findproduct.data.EC !== 0 ){
        alert("not found your product code")
      }
    },

    Edit(){
      if(this.findmaproduct !== ""){
        const ma = this.findmaproduct
        this.$router.push({name:'EditProduct', params:{maProduct:ma}})
      }
      else{
        alert("you must enter product code")
      }
    },
    async Delete(){
      const ma = this.findmaproduct
      const Delete = await axios.post(
        "http://localhost:3000/api/deleteproduct",
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
</style>