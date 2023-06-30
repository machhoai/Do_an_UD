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
    <div class="product">
        <div class="intro-product">
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
        <div class="sale-product">
          <h1>NEW ARRIVALS</h1>
          <div id="item-sale" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <!-- 3 gach dấu hiệu quyển slide-->
              <button type="button" data-bs-target="#item-sale" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#item-sale" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#item-sale" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <!-- sale product -->
            <div class="carousel-inner">
              <!-- slide 1 -->
              <div class="carousel-item active">
                  <div class="row flex-wrap">
                      <div class="col-4 col-md-3">
                        <router-link to="/product">
                          <img src="../assets/Candles-Spray-Tshirt.jpeg" class=" w-100" alt="">
                        </router-link>
                                           
                      </div>
                      <div class="col-4 col-md-3 row-4" >
                        <img src="../assets/Candles-The-Piece-Tshirt.jpeg" @click="GoToProduct('../assets/Candles-The-Piece-Tshirt.jpeg')" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Gamble-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Spray-blue-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-brown-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-black-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Title-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Spray-white-milk-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-dark-brown-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Title-white-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-BW-Car-Tshirt.jpeg" class=" w-100" alt="">
                      </div>
                  </div>
              </div>
              <!-- slide 2 -->
              <div class="carousel-item">
                  <div class="row flex-wrap">
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Shaded-Tshirt.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-TPNE-Polo.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Land-Shirt.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Denim-Knee-Blow-out.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Shaded-opalescent-Tshirt.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-TPNE-Red-logo-Polo.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Denim-Knee-Blow-out-white.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Bolt-Polo.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Shaded-dark-gray-Tshirt.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Land-yellow-Shirt.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Denim-Knee-Blow-out-dark.jpeg" class=" w-100" alt="">
                    </div>
                    <div class="col-4 col-md-3">
                      <img src="../assets/Candles-Bolt-Polo-dark-blue.jpeg" class=" w-100" alt="">
                    </div>
                  </div>
              </div>
              <!-- slide 3 -->
              <div class="carousel-item">
                <div class="row flex-wrap">
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Bolt-Polo-black.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Hidden-Sweat-Short.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Striped-CollarPolo.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Colorblock-Short.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Single-Knee-Short.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Hidden-Sweat-green-Short.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Striped-CollarPolo-gray.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Blunt-Tshirt.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Single-Knee-jean-Short.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Hidden-Sweat-brown-Short.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Striped-CollarPolo-Milk-White.jpeg" class=" w-100" alt="">
                  </div>
                  <div class="col-4 col-md-3">
                    <img src="../assets/Candles-Blunt-Skin-Color-Tshirt.jpeg" class=" w-100" alt="">
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
  export default {
    name:'Home',
    methods: {
      GoToProduct(data){
        const imgUrl = data;
        this.$route.push({path:'/product', query:{ image : '../assets/Candles-Blunt-Skin-Color-Tshirt.jpeg'} });
      }
    },
  }

</script>

<style>
/* css phần introduce */
    .Content-introduce-Home{
      width: 100%;
      margin: 0px;
      height: auto;
      border-radius: 10px;
      overflow: hidden;
    }

    .Content-introduce-Home #carouselExampleControls
    {
        width: 100%;
    }

  /* css phần product */
    .product{
      width: 100%;
      padding: 20px;
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
</style>