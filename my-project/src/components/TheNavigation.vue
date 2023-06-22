
<template>
    <!-- Navigation cho trang web -->
    <div class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
            <div class="container-fluid">
                <!-- logo -->
                <router-link to="/" id="Logo-Warp">
                    <img src="../assets/BackHome.webp" alt="" id="Logo-Home">
                </router-link>
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

<style>
    /* css phần navbar */
    .navigation
    {
        position: fixed;
        height: 70px;
        width: 100%;
        z-index: 10;
        background: gray;
    }
    #Logo-Warp{
        width: 15%;
        min-width: 200px;
        padding: 20px 0px;
    }
    #Logo-Home{
        height: 30px;
        width: 170px;
        margin-left: 10px;
    }
    #navbar{
        padding: 0px;
        background: gray;
    }
    /* css phần navbar giữa */
    #navbar ul{
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #navbarSupportedContent a{
        color: black;
        margin: 0px 10px;
        text-decoration: none;
        font-size: 18px ;
        text-transform: uppercase;
    }
    #navbarSupportedContent a:hover{
        border-bottom: 2px solid black;
    }
    #navbarSupportedContent a.Active-link:hover
    {
        border-bottom: 2px solid rgb(14, 166, 70);
    }
    #navbarSupportedContent a.Active-link{
        color: rgb(14, 166, 70);
    }
    #button-reponsive{
        position: absolute;
        right: 10px;
    }

</style>
