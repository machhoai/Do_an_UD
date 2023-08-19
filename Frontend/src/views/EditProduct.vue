<template>
    <div class="AddProduct col-10 col-lg-8">
    <h1>EDIT PRODUCT</h1>
    <form
      class="row flex-wrap"
      id="FormAddProduct"
      action=""
      method=""
      enctype="multipart/form-data"
    >
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
        <p>Sale Sản Phẩm</p>
        <input type="text" v-model="sale" placeholder="enter Sale %" />
      </div>
    </form>
    <div class="contain-button col-lg-5 col-10">
      <input type="submit" class="button" value="UPDATE" @click="UpdateProduct()" />
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
            nameProduct:'',
            price:'',
            sale: 0,
            soLuong:0
        }
    },
    methods: {
        async UpdateProduct() {
            const maProduct = this.$route.params.maProduct
            const nameproduct = this.nameProduct
            const price = this.price
            const sale =this.sale
            const soluong =this.soLuong
            const updateproduct = await axios.post(
                "http://localhost:3000/api/updateproduct",
                {
                    maProduct,
                    nameproduct,
                    price,
                    sale,
                    soluong
                }
            );
            this.$router.push({path:'/admin'})
        },
    },
}
</script>

<style scoped>
.AddProduct {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 40px 0;
}
#FormAddProduct {
  position: relative;
  /* left: 50%;
  transform: translateX(-50%); */
  justify-content: center;
}
#FormAddProduct div p{
  margin-top: 20px;
  margin-bottom:0px ;
  font-weight: 600;
}
.contain-button{
    display: flex;
    justify-content: center;
    align-items: center
}
.button {
  background: red;
  border-radius: 10px;
  height: 40px;
  width: 150px;
  margin-top:50px ;
  color: aqua;
  font-weight: 600;
  position: relative;
}
</style>