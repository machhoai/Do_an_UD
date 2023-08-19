<template>
  <div class="Background col-10">
    <div class="col-10 col-lg-8" id="Container">
      <h1>login</h1>
      <form action="" method="post" class="col-lg-6 col-10">
        <label for="UserName">
          <i class="fa-solid fa-user"></i>
          <p class="User" :class="{ 'User-active': isActiveUser }">Email</p>

          <input
            type="email"
            name="email"
            id="UserName"
            v-model="email"
            @input="TextChange()"
          />
        </label>
        <label for="Password">
          <i class="fa-solid fa-lock"></i>
          <p class="Pass" :class="{ 'Pass-active': isActivePass }">Password</p>

          <input
            :type="typeInput"
            name="Password"
            id="Password"
            v-model="password"
            @input="TextChange()"
          />

          <!-- phần show password-->
          <div id="Show-Password" @click="ShowPassword">
            <i
              v-show="iconPass"
              class="fa-solid fa-eye-slash"
              id="eye-slash"
            ></i>
            <i v-show="iconText" class="fa-solid fa-eye" id="eye"></i>
          </div>
        </label>
        <div id="Remember-Forgot">
          <label for="Check-Remember">
            <input type="checkbox" name="check-remember" />
            Remember me
          </label>
          <p>Forgot password?</p>
        </div>
        <button
          id="Btn-Login"
          type="button"
          name="login"
          class="col-8"
          @click="UserLogin()"
        >
          login
        </button>
      </form>
    </div>
  </div>
</template>


<script scoped>
import axios from "axios";
export default {
  data() {
    return {
      typeInput: "password",
      iconPass: true,
      iconText: false,
      email: "",
      password: "",
      isActiveUser: false,
      isActivePass: false,
    };
  },
  methods: {
    ShowPassword() {
      this.typeInput = this.typeInput === "password" ? "text" : "password";
      this.iconPass = !this.iconPass;
      this.iconText = !this.iconText;
    },
    async UserLogin() {
      console.log(">>>Check user ", this.email, ",", this.password);
      const password = this.password;
      const email = this.email;
      const checkmessage = await axios.post(
        "http://localhost:3000/api/apilogin",
        {
          email,
          password,
        }
      );
      console.log(">>> check message: ", checkmessage.data);


      if (checkmessage.data.EC === 0) {
        const data = {
          isAuthenticater: true,
          token: 'fake token',
          isAdmin: false
        }
        sessionStorage.setItem('account', JSON.stringify(data));
        this.$router.push({path:"/"})
        setTimeout(() => {
        window.location.reload();
      }, 100);     
      }
      else if (checkmessage.data.EC === 4) {
        console.log(">>> check message: ", checkmessage.data.EC);
        const data = {
          isAuthenticater: true,
          token: 'fake token',
          isAdmin: true
        }
        sessionStorage.setItem('account', JSON.stringify(data));
        this.$router.push({path:"/"})
        setTimeout(() => {
        window.location.reload();
      }, 100);     
      }
      else if (checkmessage.data.EC !== 0) {
        alert("your email or password is not correct!");
      }
    },

    TextChange() {
      if (this.user != "") {
        this.isActiveUser = true;
      } else {
        this.isActiveUser = false;
      }
      if (this.password != "") {
        this.isActivePass = true;
      } else {
        this.isActivePass = false;
      }
    },
  },
};

// một số hàm trong
</script>

<style scoped>
.Background {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/login.webp);
  background-size: 100%;
  border-radius: 30px;
  box-shadow: 0px 10px 13px 8px rgb(56, 55, 55);
}
.Background #Container {
  background: rgba(225, 225, 225, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 30px 30px;
  font-size: 16px;
  padding: 50px 0;
}
.Background #Container form {
  display: flex;
  flex-direction: column;
}
.Background #Container form label {
  position: relative;
  margin: 15px 0px;
}
.Background #Container form label i {
  color: black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}
.Background #Container form label #Show-Password {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 90%;
  cursor: pointer;
}
.Background #Container form label #Show-Password .fa-eye {
  position: absolute;
}
.Background #Container form label input {
  padding: 0px 20px 0px 30px;
  width: 100%;
  height: 30px;
  border: none;
  background: transparent;
  border-bottom: 2px solid black;
  font-size: 17px;
}
.Background #Container form #Btn-Login {
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
.Background #Container form #Remember-Forgot {
  margin: 10px 0px;
  position: relative;
  display: flex;
  flex-direction: row;
}

.Background #Container form #Remember-Forgot p {
  position: absolute;
  right: 0px;
  cursor: pointer;
}

.Background #Container form #Remember-Forgot input {
  margin-top: 10px;
  height: 18px;
  width: 18px;
  cursor: pointer;
}
.Background #Container form label .User {
  position: absolute;
  top: 10%;
  left: 40px;
  margin: 0px;
  font-size: 17px;
  transition: 0.2s;
}
/* thành phần active của user */
.User-active {
  transform: translateY(-25px);
  font-weight: 600;
  font-size: 18px;
}
.Background #Container form label .Pass {
  position: absolute;
  top: 10%;
  left: 40px;
  margin: 0px;
  font-size: 17px;
  transition: 0.2s;
}
.Pass-active {
  transform: translateY(-25px);
  font-weight: 600;
  font-size: 18px;
}
</style>