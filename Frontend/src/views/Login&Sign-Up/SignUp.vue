<template>
  <!-- Thông báo ra màn hình -->
  <div class="toast align-items-center" :class="{'toastshow':toast}" ref="mytoast" v-if="toast" role="alert" aria-live="assertive" aria-atomic="true" >
    <div class="d-flex">
      <div class="toast-body">
        {{notification}}
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>


  <div class="Background col-10">
    <div class="col-lg-8 col-10" id="Container">
      <h1>SIGN UP</h1>
      <form action="" method="post" class="col-10 col-lg-8">
        <label for="EnterName">
          <!-- nhâp name  -->
          <i class="fa-solid fa-user" style="color: #000000"></i>
          <p :class="{ 'p-Active': Active.name }">Name</p>
          <input
            type="text"
            name="Name"
            v-model="SignUpUser.name"
            @input="ToggerActive()"
          />
        </label>
        <label for="EnterEmail">
          <!-- nhập email -->
          <i class="fa-solid fa-envelope" style="color: #000000"></i>
          <p :class="{ 'p-Active': Active.email }">Email</p>
          <input
            type="email"
            name="Email"
            v-model="SignUpUser.email"
            @input="ToggerActive()"
          />
        </label>
        <label for="phone">
          <!-- điền phone -->
          <i class="fa-solid fa-phone" style="color: #000000;"></i>
          <p :class="{ 'p-Active': Active.phone }">phone</p>
          <input 
            type="text" 
            name="phone" 
            v-model="SignUpUser.phone" 
            @input="ToggerActive()" />
        </label>
        <label for="EnterPassword">
          <!-- nhập pass -->
          <i class="fa-solid fa-lock" style="color: #000000"></i>
          <p :class="{ 'p-Active': Active.password }">Password</p>

          <input
            :type="ShowPass.InputPass"
            name="Password"
            v-model="SignUpUser.password"
            @input="ToggerActive()"
          />

          <!-- phần show password-->
          <div class="Show-Password" @click="ShowPassword(ShowPass)">
            <i
              v-show="ShowPass.iconPass"
              class="fa-solid fa-eye-slash"
              style="color: #000000"
            ></i>
            <i
              v-show="ShowPass.iconText"
              class="fa-solid fa-eye"
              style="color: #000000"
            ></i>
          </div>
        </label>
        <label for="ReWritePassword">
          <!-- nhập lại pass -->
          <i class="fa-solid fa-lock" style="color: #000000"></i>
          <p :class="{ 'p-Active': Active.rewritePass }">Re-Enter Password</p>
          <input
            :type="ShowReEnterPass.InputPass"
            name="ReWritePass"
            v-model="SignUpUser.rewritePass"
            @input="ToggerActive()"
          />

          <!-- phần show password-->
          <div
            class="Show-re-enter-Password"
            @click="ShowPassword(ShowReEnterPass)"
          >
            <i
              v-show="ShowReEnterPass.iconPass"
              class="fa-solid fa-eye-slash"
              style="color: #000000"
            ></i>
            <i
              v-show="ShowReEnterPass.iconText"
              class="fa-solid fa-eye"
              style="color: #000000"
            ></i>
          </div>
        </label>
        <button type="button" class="button col-3" @click="PushData()">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script scoped>
import axios from 'axios';
export default {
  name: "SignUp",
  data() {
    return {
      SignUpUser: {
        name: "",
        email: "",
        password: "",
        phone: "",
        rewritePass: "",
      },
      Active: {
        name: false,
        email: false,
        phone:false,
        password: false,
        rewritePass: false,
      },
      ShowPass: {
        InputPass: "password",
        iconPass: true,
        iconText: false,
      },
      ShowReEnterPass: {
        InputPass: "password",
        iconPass: true,
        iconText: false,
      },
      selection: "",
      toast: false,
      notification:''
    };
  },
  methods: {
    ShowPassword(data) {
      this.selection = data;
      this.selection.InputPass =
        this.selection.InputPass === "password" ? "text" : "password";
      this.selection.iconPass = !this.selection.iconPass;
      this.selection.iconText = !this.selection.iconText;
      console.log(this.selection);
    },
    async PushData() {
      if (this.SignUpUser.password == this.SignUpUser.rewritePass) {
        console.log(">>>Check user ", this.SignUpUser);
           const username = this.SignUpUser.name;
           const email= this.SignUpUser.email;
           const phone= this.SignUpUser.phone;
           const password= this.SignUpUser.password
        const checkmessage = await axios.post('http://localhost:3000/api/apiregister',{
            username,
            email,
            phone,
            password
        })

        console.log(">>> check message: ", checkmessage.data);
        if(checkmessage.data.EC === 0){
          this.$router.push({path: "/login"})
        }
        else if(checkmessage.data.EC === 1)
        {
          this.toast = true
          this.notification ="email is exits!"
          setTimeout(() => {
                this.toast = false;
            }, 5000); 
        }
        else if(checkmessage.data.EC === 3)
        {
          this.toast = true
          this.notification ="error when you register!"
          setTimeout(() => {
                this.toast = false;
            }, 5000); 
        }
      } else {
        this.SignUpUser.rewritePass = "";
        this.toast = true
        this.notification ="Password is not same!"
        setTimeout(() => {
                this.toast = false;
            }, 5000); 
      }
    },
    ToggerActive() {
      if (this.SignUpUser.name != "") {
        this.Active.name = true;
      } else {
        this.Active.name = false;
      }

      if (this.SignUpUser.email != "" ) {
        this.Active.email = true;
      } else {
        this.Active.email = false;
      }

      if (this.SignUpUser.phone != "") {
        this.Active.phone = true;
      } else {
        this.Active.phone = false;
      }

      if (this.SignUpUser.password != "") {
        this.Active.password = true;
      } else {
        this.Active.password = false;
      }

      if (this.SignUpUser.rewritePass != "") {
        this.Active.rewritePass = true;
      } else {
        this.Active.rewritePass = false;
      }
    },
  },
};
</script>

<style scoped>
.Background {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/login.webp);
  background-size: 100%;
  border-radius: 30px;
  box-shadow: 0px 10px 13px 8px rgb(56, 55, 55);
}
.Background #Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(225, 225, 225, 0.5);
  border-radius: 0 0 30px 30px;
  padding: 50px 0;
}
.Background #Container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Background #Container form label {
  position: relative;
  width: 80%;
  margin: 15px 0;
  height: fit-content;
}

/* css phần input */
.Background #Container form input {
  border: none;
  border-bottom: 2px solid black;
  background: transparent;
  width: 100%;
  padding-left: 40px;
}
/* css icon và thẻ p */
.Background #Container form label i {
  position: absolute;
  left: 10px;
  top: 5px;
}
.Background #Container form label p {
  position: absolute;
  left: 40px;
  transition: 0.2s;
}
/* tạo active cho thẻ p */
.p-Active {
  font-weight: 700;
  transform: translateY(-25px);
}
/* phần hiện thị password */
.Background #Container form label .Show-Password {
  width: fit-content;
  position: absolute;
  top: 0px;
  right: 40px;
  cursor: pointer;
}
.Background #Container form label .Show-Password .fa-eye {
  position: absolute;
}
.Background #Container form label .Show-re-enter-Password {
  width: fit-content;
  position: absolute;
  top: 0px;
  right: 40px;
  cursor: pointer;
}
.Background #Container form label .Show-re-enter-Password .fa-eye {
  position: absolute;
}
/* css button */
.button {
  border-radius: 10px;
  border: none;
  box-shadow: 0px 8px 3px 2px gray;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 700;
}

.button:hover {
  background: linear-gradient(to right, rgb(52, 52, 236), rgb(21, 239, 21));
  color: white;
}

/* css toast */
  .toast{
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 11;
  }
  .toastshow{
    display: block;
  }
</style>