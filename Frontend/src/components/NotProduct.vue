<template>
    <div class="contain col-12">
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
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        font-weight: 600;
    }
</style>