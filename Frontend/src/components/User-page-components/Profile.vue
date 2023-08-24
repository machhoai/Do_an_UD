<template>
    <div class="container col-12">
        <h4>Thông tin tài khoản</h4>
        <div class="box name col-sm-10 col-12">{{GetUsername}}</div>
        <div class="box mail col-sm-10 col-12">{{GetEmail}}</div>
        <div class="box phone col-sm-10 col-12">{{GetPhone}}</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            inforuser:null,
            Account: [],
        }
    },
    mounted() {
        const session = sessionStorage.getItem("account");
        console.log(">>> session:", session);
        if (session) {
        this.Account = JSON.parse(session);
        console.log(">>> account:", this.Account.mauser);
        }
        this.GetData()
    },
    computed:{
        GetUsername(){
            if(this.inforuser!==null){
                return this.inforuser.username
            }
        },
        GetEmail(){
            if(this.inforuser!==null){
                return this.inforuser.email
            }
        },
        GetPhone(){
            if(this.inforuser!==null){
                return this.inforuser.phone
            }
        }
    },
    methods:{
        async GetData(){
            const mauser = this.Account.mauser
            const InforUser = await axios.post(
                "http://localhost:3000/api/getinforuser",
                {
                    mauser
                }
            );
            console.log(">>>check InforUser: ", InforUser.data.DT)
            this.inforuser = InforUser.data.DT;
        }
    }
}
</script>

<style scoped>
.container
{
    flex-direction: column;
    text-align: left;
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
    height: 45px;
    margin-bottom: 17px;
    padding: 14px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

</style>