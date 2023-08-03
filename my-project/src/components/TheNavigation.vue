
<template>
    <!-- Navigation cho trang web -->
    <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
            <div class="container-fluid">
                <!-- logo -->
                <router-link to="/" id="Logo-Warp">
                    <img src="../assets/BackHome.webp" alt="" id="Logo-Home">
                </router-link>
                <!-- user-login-sign up-giỏ hàng -->
                <div class="ForUser">
                    <li class="item">
                        <router-link to="/bag">
                            <i class="fa-solid fa-bag-shopping" style="color: #000000;"></i>
                        </router-link>     
                    </li>
                    <li class="item">
                        <router-link to="/login">
                            login
                        </router-link>
                    </li>
                    <li class="item">
                        <router-link to="/signup">
                            Sign Up
                        </router-link>
                    </li>
                </div>
                <button id="button-reponsive" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <!-- navbar giữa -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/top">Top</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/bottom">Bottom</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/outwear">Out Wear</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/accessories">Accessories</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/sale">Sale</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/aboutus">About Us</router-link>
                        </li>           
                    </ul>       
                </div>
                
            </div>
        </nav>
    </div>
</template>

<style scoped>
    /* css phần navbar */
    .navigation
    {
        position: fixed;
        height: 70px;
        z-index: 10;
        width: 100%;
        background: gray;
    }
    #Logo-Warp{
        width: 15%;
        padding: 20px 0px;
    }
    #Logo-Home{
        height: 30px;
        margin-left: 10px;
    }
    #navbar{
        padding: 0px;
        background: gray;
        height: 100%;
    }

    .nav-item
    {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
    }

    /* css phần navbar giữa */
    .navbar-collapse
    {
        height:100%
    }

    .navbar-nav
    {
        height: 100%;
    }

    #navbarSupportedContent ul{
        display: flex;
        justify-content: center;
        margin: 0px 20px;
    }
    #navbarSupportedContent a{
        color: black;
        margin: 0px 10px;
        text-decoration: none;
        font-size: 18px ;
        text-transform: uppercase;
        position: relative;
    }

    #navbarSupportedContent a.Active-link{
        color: rgb(255, 255, 255);
    }
    #button-reponsive{
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .nav-item a
    {
        width: 100%;
    }
    .nav-item a.Active-link::after{
        content:'';
        position: absolute;
        height: 2px;
        width: 100%;
        background: rgb(255, 255, 255);
        bottom: -23.5px;
        left: 0px;
        transform: scaleX(1);
        transition: 0.3s;
    }

    .nav-item
    {
        position: relative;
    }

    .nav-item::after
    {
        content:'';
        position: absolute;
        height: 2px;
        width: 100%;
        background: rgb(0, 0, 0);
        bottom: -21.5px;
        left: 0px;
        transform: scaleX(0);
        transition: 0.3s;
    }

    .nav-item:hover::after
    {
        transform: scaleX(1);
    }

    /* css for user (login sign,...) */
    .ForUser
    {
        display: flex;
        list-style: none;
        position: absolute;
        right: 20px;
        top: 35px;
        transform: translateY(-50%);
    }

    .ForUser li
    {
        margin: 0 5px;
    }
    .ForUser li a
    {
        text-decoration: none;
        color: black;
        font-size: 17px;
        font-weight: 600;
    }

    .ForUser li a:hover{
        color:white ;
    }
    .ForUser li a.Active-link{
        color:white;
    }
    @media screen and (max-width: 991px) {
        .ForUser
        {
            margin-right: 50px ;
        }
    }

</style>
