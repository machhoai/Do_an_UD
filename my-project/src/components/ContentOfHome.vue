<template>
    <!-- nội dung của trang home-->
    <!-- introduce -->
    <div class="Content-introduce-Home">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
          <div id="item-sale" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <!-- 3 gach dấu hiệu quyển slide-->
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <!-- sale product -->
            <div class="carousel-inner">
              <!-- slide 1 -->
              <div class="carousel-item active" style="width:100%; display:flex;">
                  <div class="row flex-wrap">
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Spray-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3 row-4">
                        <img src="../assets/Candles-The-Piece-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Gamble-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Spray-blue-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-brown-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-black-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Title-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Spray-white-milk-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Hidden-dark-brown-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-Title-white-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                      <div class="col-4 col-md-3">
                        <img src="../assets/Candles-BW-Car-Tshirt.jpeg" class="d-block w-100" alt="">
                      </div>
                  </div>
              </div>
              <!-- slide 2 -->
              <div class="carousel-item">
                  <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                </div>
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                </div>
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                </div>
              </div>
              <!-- slide 3 -->
              <div class="carousel-item">
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                </div>
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                </div>
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                </div>
              </div>
            </div>
            <!-- bottom chuyển silde-->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </div>
</template>


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
</style>