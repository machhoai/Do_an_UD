<template>
    <div class="contain">
        <h1>Giỏ Hàng Của Bạn</h1>
        <p>Không có sản phẩm nào trong giỏ hàng</p>
        <router-link to="/">
            <i class="fa-solid fa-reply" style="color: #000000;"></i>
            tiếp tục mua hàng
        </router-link>
    </div>
</template>

<style scoped>
    .contain
    {
        height: 300px;
        width:  100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-size: 30px;
        font-weight: 600;
    }
    p
    {
        font-size:18px;
    }
    a{
        text-decoration: none;
        color: black;
    }
    a:hover
    {
        border-bottom: 1px solid gray ;
    }
</style>