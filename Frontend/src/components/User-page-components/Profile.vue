<template>
    <div class="container">
        <h4>Thông tin tài khoản</h4>
        <div class="box name">Mạch Hoài</div>
        <div class="box mail">machhoai1234@gmail.com</div>
        <div class="box phone">0938571951</div>
        <button class="changeBtn">Thay đổi</button>
    </div>
</template>

<style scoped>
.container
{
    flex-direction: column;
    text-align: left;
    align-items: center;
}

.container h4
{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    padding-bottom: 20px;
}

.box
{
    border: 1px solid black;
    width: 80%;
    height: 45px;
    margin-bottom: 17px;
    padding: 14px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.changeBtn
{
    background: rgb(105, 1, 1);
    border-radius: 5px;
    height: 37px;
    width: 20%;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>