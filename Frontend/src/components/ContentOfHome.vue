<template>
    <!-- nội dung của trang home-->
    <!-- introduce -->
    <div class="Content-introduce-Home">
        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/introduce-fashion.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/introduce-fashion1.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/introduce-fashion2.jpeg" class="d-block w-100" alt="...">
            </div>            
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
    <!--product-->
    <div class="product" >
        <div class="intro-product col-11">
            <div class="product-item col-4">
              <router-link to="/top">
                <img src="../assets/go-top.jpeg" alt="">
              </router-link>             
            </div>
            <div class="product-item col-4">
              <router-link to="/accessories">
                <img src="../assets/go-accessories.jpeg" alt="">
              </router-link>
            </div>
            <div class="product-item col-4">
              <router-link to="/bottom">
                <img src="../assets/go-bottom.jpeg" alt="">
              </router-link>
            </div>
        </div>
        <!-- sale product-->
        <div class="sale-product col-10">
          <h1>NEW ARRIVALS</h1>
          <div id="item-sale" class="carousel carousel-dark slide " data-bs-ride="carousel">
            <div class="carousel-indicators" >
              <!-- 3 gach dấu hiệu quyển slide-->
              <button type="button" data-bs-target="#item-sale" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#item-sale" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#item-sale" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <!-- sale product -->
            <div class="carousel-inner" >
              <!-- slide 1 -->
              <div class="carousel-item active" v-for="list of listSlide" :key="list"  >
                  <div class="row flex-wrap w-100" >
                    <div class="Product col-6 col-lg-3 col-sm-4"  v-for="item of list" :key="item" @click="GoProductPage(item)">
                      <div class="Elm-Sale col-3 	col-lg-2 col-md-2.2 " >
                          <div class="sale-off">
                              {{item.sale}}% <br>
                              OFF
                          </div>
                      </div>
                        <img :src="item.nameImage" class=" w-100" alt="">
                        <h1>{{ item.productName }}</h1>
                        <span>{{ item.price }}VND</span>           
                    </div>
                  </div>
              </div>
            </div>
            <!-- bottom chuyển silde-->
            <button class="carousel-control-prev" type="button" data-bs-target="#item-sale" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#item-sale" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
  export default {
    name:'Home',
    data() {
      return {
        NameImage: null,
        listSlide: null,
        startIndex:0,
        endIndex: 12,
        step: 12
      }
    },
    methods:{
      GoProductPage(item){
        this.$router.push({name:'ProductInformation', params:{maProduct: item.maProduct}})
      },
      async GetData() {
        const images = await axios.get("http://localhost:3000/api/getimage");
        console.log(">>>check image name: ", images.data.DT);
        this.NameImage =  images.data.DT;
        const list = []
          for(var i=0 ;i < (this.NameImage.length /12);i++)
          {
            list[i] = this.NameImage.slice(this.startIndex + 12*(i) , this.endIndex + 12*(i));
          }

        this.listSlide = list;
        console.log(">>>Show list slide: ",this.listSlide )
      },
     
    },
    mounted() {
      this.GetData();
      
    },
  }

</script>

<style scoped>
/* css phần introduce */
    .Content-introduce-Home{
      width: 100%;
      padding: 0 0px;
    }

    .Content-introduce-Home #carouselExampleControls
    {
        width: 100%;
    }

  /* css phần product */
    .product{
      width: 100%;
      padding: 20px 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .product .intro-product
    {
      display: flex;
      
    }
    .product .intro-product a img{
      width: 95%;
    }
    .product .intro-product:hover a:not(:hover)
    {
      opacity: 0.5;
    }
    /* css phần sale product trong phần product */
        .sale-product h1
        {
          margin-top: 30px;
          font-weight: 700;
        }
      /* css phần nút chuyển slide */
        .sale-product .carousel-control-prev
        {
          transform: translateX(-55%);
        }
        .sale-product .carousel-control-next{
          transform: translateX(55%);
        }
    /* css phần slide sản phẩm*/
    .carousel-item .row
    {
      min-height: 780px;
      cursor: pointer;
    }
    .carousel-item .row h1
    {
      font-size: 19px;
      margin: 5px 0;
      font-weight: 400;
      text-align: center;
    }
    .carousel-item .row span
    {
      color: red;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      justify-content: center;
    }
    .carousel-item .Product{
      z-index: 2;
      position: relative;
    }
    .carousel-item .Product h1{
      font-size: 16px;
      font-weight: 600;
    }
    /* dấu chuyển slide */
    .carousel-indicators 
    {
      transform: translateY(40px);
    }
        /* css cho phần cờ giảm giá */
    .Elm-Sale
    {
        background: rgb(215, 4, 4);
        border-radius: 0 0 20px 20px;
        position: absolute;
        height: 60px ;
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
</style>