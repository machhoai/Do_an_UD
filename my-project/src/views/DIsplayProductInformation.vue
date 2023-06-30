<template>
    <div class="Information-Product flex-wrap ư-100">
        <div class="Contain-Picture col-10 col-md-5">
            <div class="Picture-product col-10">
                <div class="Elm-Sale">
                    <span class="sale-off">
                        10% <br>
                        OFF
                    </span>
                </div>
                <img :src="{imgUrl}" class="w-100" alt="">
            </div>
        </div>
        <div class="Infor-Product col-10 col-md-6">
            <div class="Name-Price">
                <h1>Candles Spray Tshirt</h1>
                <p>Mã hàng : TS0115</p>
                <div class="Sale">
                    <h2 class="price-sale"><b>369,000 VND</b> </h2>
                    <p class="ole-price"> <strike>410,000 VND</strike> </p>
                </div>
            </div>
            <div class="Introduce-product">
                <h2>CANDLES SPRAY T-SHIRT</h2>
                <h3> <b>✦ Chất liệu:</b> Carbon brushed soft cotton 260gsm </h3>
                <h3><b>✦ Fitting:</b> Oversize Fit </h3>
                <h3><b>✦ Chi tiết:</b></h3>
                <p>+ Sử dụng chất liệu Cotton sợi đôi - double yarn weaving với cách dệt đặc biệt tạo cảm giác vải dày dặn hơn.</p>
                <p>+ Bề mặt vải có độ mềm mịn như nhung, tạo cảm giác thoải mái. </p>
                <p>+ Bề mặt vải có độ mềm mịn như nhung, tạo cảm giác thoải mái. </p>
                <h3><b>✦ Hướng dẫn bảo quản:</b></h3>
                <p>+ Sản phẩm bền nhất khi giặt tay.</p>
                <p>+ Nếu giặt máy, hãy giặt ở nhiệt độ thường.</p>
                <p>+ Khi phơi tránh ánh nắng trực tiếp.</p>
                <p>+ Nên treo sản phẩm để sản phẩm có độ bền phom dáng.</p>
            </div>
            <div class="Size">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductIformation',
    data() {
        return {
            imgUrl:''
        }

    },
    created() {
        this.imgUrl = this.$route.query.image;
    },
}
</script>

<style scoped>
    .Information-Product
    {
        display: flex;
        justify-content: center;
       

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
</style>