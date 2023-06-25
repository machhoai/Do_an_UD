<template>
    <footer class="Footer">
        <div class="contain-item">
            <h1>CANDLES</h1>
            <li>CÔNG TY TNHH SẢN XUẤT VÀ KINH DOANH THƯƠNG MẠI GNC</li>
            <li>Đại diện: Hoàng Duy Phong</li>
            <li>Mã ĐKKD: 0110068360</li>
            <li>Ngày cấp: 21/07/2022</li>
            <li>Nơi cấp: Sở kế hoạch và đầu tư Hà Nội</li>
            <li>Địa chỉ: Số 258  Thái Hà, Đống Đa, Hà Nội</li>
            <li>Email: gnc.cp2022@gmail.com</li>
            <li>0966.688.258</li>
            <li>
                <img src="../assets/Chung-nhan-cua-BCT.jpg" alt="">
            </li>
        </div>
        <div class="contain-item">
            <h1>HỖ TRỢ</h1>
            <li>Kiểm tra đơn hàng</li>
            <li>Đăng nhập</li>
            <li>Đăng ký</li>
        </div>
        <div class="contain-item">
            <h1>CHÍNH SÁCH</h1>
            <li>Quy định thanh toán</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách đổi trả hàng</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách mua hàng</li>
            <li>Chính sách kiểm hàng</li>
            <li>Chính sách bảo vệ thông tin người dùng</li>
        </div>
        <div class="contain-item">
            <h1>GỬI MAIL</h1>
            <li>Gửi email nhận khuyến mãi</li>
            <form action="" method="post">
                <input type="email" name="promotion-email" id="email" placeholder="Enter your email">
            </form>
        </div>
        <div class="contain-item" id="icon">
            <h1>KẾT NỐI</h1>
            <li> <a href="https://www.facebook.com/candles.studio/" target="blank"><i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i></a> </li>
            <li><router-link to="/"><i class="fa-brands fa-youtube" style="color: #ffffff;"></i></router-link></li>
            <li><a href="https://www.instagram.com/candles.vn/" target="blank"><i class="fa-brands fa-instagram fa-xl" style="color: #ffffff;"></i></a></li>
        </div>
    </footer>
</template>



<style>
    /* css phần footer*/
    .Footer{
        position: relative;
        bottom: 0px;
        width: 100%;
        height:600px;
        background: black;
        margin-top: 200px;
        display: flex;
        padding: 0px 5%;
    }

    .contain-item{
        height: fit-content;
        width: 20%;
        text-align: left;
        margin: 20px 10px;
        padding: 0 10px;
    }

    .contain-item h1{
        font-size: 19px;
        font-weight: 700;
        color: white;
    }

    .contain-item li
    {
        font-size: 14px;
        color: white;
        text-decoration: none;
        list-style: none;
        padding-top: 6px;
        cursor: pointer;
        
    }

    .contain-item li img
    {
        width: 90%;
    }
    .contain-item li form
    {
        width: 90%;
    }
    #icon li
    {
        display: inline-block;
        margin-right: 12px;
    }
    #icon li i{
        font-size: 18px;
    }

    /* css responsive */

    @media screen and (max-width:800px){
        .Footer{
            display: flex;
            flex-direction: column;
            height: fit-content;
            padding: 15px;
        }
        .contain-item{
            width: 100%;
        }
        .contain-item li img
        {
            width: 150px;
        }
    }
</style>