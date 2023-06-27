<template>
    <div class="Background">
        <div class=" col-10 col-lg-8" id="Container" >
            <h1>login</h1>
            <form action="" method="post" class="col-lg-6 col-10">
                <label for="UserName" >
                    <i class="fa-solid fa-user"></i>
                    <p id="User" :class="{'active':userActive}">User name</p>
                    <input type="text" name="User-Name" @focus="UserActive" id="UserName"  v-model="value1" >
                </label>
                <label for="Password" >
                    <i class="fa-solid fa-lock"></i>
                    <p id="Pass">Password</p>
                    <input type="showPassword" name="Password" id="Password" v-model="value2">
                    <div id="Show-Password" @click="HandleClick">
                        <i class="fa-solid fa-eye-slash" id="eye-slash"></i>
                        <i class="fa-solid fa-eye" id="eye"></i>
                    </div>
                </label>
                <div id="Remember-Forgot" class="col-10">
                    <label for="Check-Remember">
                        <input type="checkbox" name="check-remember" >
                        Remember me
                    </label>
                    <p>Forgot password?</p>
                </div>
                <input id="Btn-Login" type="button" value="Login" name="login" class="col-8">
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            value1:"",
            value2:"",
            userActive: false,
            passActive: false
        }
    },
    methods:{
        UserActive(){
            if(this.value1.trim() !== '')
            {
                this.userActive = true;
            }
            console.value1;
        }
    }
}

// một số hàm trong
</script>

<style>
    .Background
    {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Background #Container
    {
        background:rgba(225, 225, 225, 0.5) ;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0px 0px 30px 30px;
        font-size: 16px;
    }
    .Background #Container form
    {
        display: flex;
        flex-direction: column;
    }
    .Background #Container form label
    {
        position: relative;
        margin: 15px 0px;
    }
    .Background #Container form label i
    {
        color: black;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
    }
    .Background #Container form label #Show-Password
    {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 90%;
        cursor: pointer;
    }
    .Background #Container form label #Show-Password .fa-eye
    {
        position: absolute;
        display: none;
    }
    .Background #Container form label input
    {
        padding: 0px 20px 0px 30px;
        width: 100%;
        height: 30px;
        border: none;
        background: transparent;
        border-bottom: 2px solid black;
        font-size: 17px;
    
    }
    .Background #Container form #Btn-Login
    {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        background-color: rgb(231, 64, 111);
        text-transform: uppercase;
        font-weight: 600;
        font-size: 18px;
        color: white;
        cursor: pointer;
        height: 35px;
        border-radius: 10px;
    }
    .Background #Container form #Remember-Forgot
    {
        margin: 10px 0px;
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .Background #Container form #Remember-Forgot p
    {
        position: absolute;
        right: 0px;
        cursor: pointer;
    }

    .Background #Container form #Remember-Forgot input
    {
        margin-top: 10px;
        height: 18px;
        width: 18px;
        cursor: pointer;
    }
    .Background #Container form label #User
    {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 40px;
        margin: 0px;
        font-size: 17px;   
    }
    .Background #Container form label #User.active
    {
        top: -13px;
        font-weight: 600;
        font-size: 18px;
    }

    .Background #Container form label #Pass
    {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 40px;
        margin: 0px;
        font-size: 17px;
    }
        .Background #Container form label #Pass.active1
    {
        top: -13px;
        font-weight: 600;
        font-size: 18px;
    }
</style>