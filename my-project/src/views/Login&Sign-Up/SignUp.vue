<template>
    <div class="Background">
        <div class=" col-lg-8 col-10 " id="Container">
            <h1>SIGN UP</h1>
            <form action="" method="post" class="col-10 col-lg-8 ">
                <label for="EnterName">
                    <!-- nhâp name  -->
                    <i class="fa-solid fa-user" style="color: #000000;"></i>
                    <p :class="{'p-Active':Active.name}">Name</p>
                    <input type="text" name="Name" 
                        v-model="SignUpUser.name"
                        @input="ToggerActive()">
                </label>
                <label for="EnterEmail">
                    <!-- nhập email -->
                    <i class="fa-solid fa-envelope" style="color: #000000;"></i>
                    <p :class="{'p-Active':Active.email}">Email</p>
                    <input type="email" name="Email" 
                        v-model="SignUpUser.email"
                        @input="ToggerActive()">
                </label>
                <label for="Birthday">
                    <!-- điền birthday -->
                    <input type="date" name="Birthday">
                </label>
                <label for="EnterPassword">
                    <!-- nhập pass -->
                    <i class="fa-solid fa-lock" style="color: #000000;"></i>
                    <p :class="{'p-Active':Active.password}">Password</p>

                    <input :type="ShowPass.InputPass" name="Password" 
                        v-model="SignUpUser.password"
                        @input="ToggerActive()">

                    <!-- phần show password-->
                    <div class="Show-Password" @click="ShowPassword(ShowPass)">
                        <i v-show="ShowPass.iconPass" class="fa-solid fa-eye-slash" style="color: #000000;"></i>
                        <i v-show="ShowPass.iconText" class="fa-solid fa-eye" style="color: #000000;"></i>
                    </div>
                </label>
                <label for="ReWritePassword">
                    <!-- nhập lại pass -->
                    <i class="fa-solid fa-lock" style="color: #000000;"></i>
                    <p :class="{'p-Active':Active.rewritePass}">Re-Enter Password</p>
                    <input :type="ShowReEnterPass.InputPass" name="ReWritePass" 
                        v-model="SignUpUser.rewritePass"
                        @input="ToggerActive()">

                    <!-- phần show password-->
                    <div class="Show-re-enter-Password" @click="ShowPassword(ShowReEnterPass)">
                        <i v-show="ShowReEnterPass.iconPass" class="fa-solid fa-eye-slash" style="color: #000000;"></i>
                        <i v-show="ShowReEnterPass.iconText" class="fa-solid fa-eye" style="color: #000000;"></i>
                    </div>               
                </label>
                <button type="submit" class="button col-3">Submit</button>
            </form>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: 'SignUp',
    data() {
        return {
            SignUpUser:{
                name:'',
                email:'',
                password:'',
                birthday:'',
                rewritePass:''
            },
            Active:{
                name:false,
                email:false,
                password:false,
                rewritePass:false
            },
            ShowPass:{
                InputPass: "password",
                iconPass: true,
                iconText: false,
            },
            ShowReEnterPass:{
                InputPass: "password",
                iconPass: true,
                iconText: false,
            },
            selection: ''
        }
    },
    methods:{
        ShowPassword(data){
            this.selection = data;
            this.selection.InputPass = this.selection.InputPass === 'password' ? 'text' : 'password';
            this.selection.iconPass = !this.selection.iconPass;
            this.selection.iconText = !this.selection.iconText;
            console.log(this.selection)
        },
        ToggerActive(){
            if(this.SignUpUser.name !='')
            {
                this.Active.name = true;
            }
            else
            {
                this.Active.name = false;
            }


            if(this.SignUpUser.email !='')
            {
                this.Active.email = true;
            }
            else
            {
                this.Active.email = false;
            }


            if(this.SignUpUser.password !='')
            {
                this.Active.password = true;
            }
            else
            {
                this.Active.password = false;
            }


            if(this.SignUpUser.rewritePass !='')
            {
                this.Active.rewritePass = true;
            }
            else
            {
                this.Active.rewritePass = false;
            }
        }
    }
}
</script>

<style scoped>
    .Background
    {
        width: 100%;
        height: 750px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(../../assets/login.webp);
        background-size: 100%;
        border-radius: 30px;
    }
    .Background #Container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background:rgba(225, 225, 225, 0.5) ;
        border-radius: 0 0 30px 30px;
        padding: 50px 0;
    }
    .Background #Container form
    {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Background #Container form label
    {
        position: relative;
        width: 80%;
        margin: 15px 0;
        height: fit-content;
    }


    /* css phần input */
    .Background #Container form input
    {
        border: none;
        border-bottom: 2px solid black;
        background: transparent;
        width: 100%;
        padding-left: 40px;
    }
    /* css icon và thẻ p */
    .Background #Container form label i{
        position: absolute;
        left: 10px;
        top: 5px;
    }
    .Background #Container form label p{
        position: absolute;
        left: 40px;
        transition: 0.2s;
    }
    /* tạo active cho thẻ p */
    .p-Active{
        font-weight: 700;
        transform: translateY(-25px);
    }
    /* phần hiện thị password */
    .Background #Container form label .Show-Password
    {
        width: fit-content;
        position: absolute;
        top: 0px;
        right: 40px;
        cursor: pointer;
    }
    .Background #Container form label .Show-Password .fa-eye
    {
        position: absolute;
    }
    .Background #Container form label .Show-re-enter-Password
    {
        width: fit-content;
        position: absolute;
        top: 0px;
        right: 40px;
        cursor: pointer;
    }
    .Background #Container form label .Show-re-enter-Password .fa-eye
    {
        position: absolute;
    }
    /* css button */
    .button
    {
        border-radius: 10px;
        border: none;
        box-shadow: 0px 8px 3px 2px gray;
        font-size: 18px;
        margin-top: 20px ;
        font-weight: 700;
    }

    .button:hover
    {
        background: linear-gradient(to right ,rgb(52, 52, 236) , rgb(21, 239, 21));
        color: white;
    }
</style>