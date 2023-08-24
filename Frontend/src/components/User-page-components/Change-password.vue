<template>
    <div class="containers col-12">
        <h4>Đổi mật khẩu</h4>
        <div class="password">
        <div class="password-input-container">
            <input
                type="password"
                v-model="oldPasswordInput"
                @input="onOldPasswordInput"
                class="password-input"
            />
            <label class="password-placeholder" :class="{ active: isOldPasswordEntered }">Nhập mật khẩu cũ</label>
        </div>

        <div class="password-input-container">
            <input
                type="password"
                v-model="newPasswordInput"
                @input="onNewPasswordInput"
                class="password-input"
            />
            <label class="password-placeholder" :class="{ active: isNewPasswordEntered }">Nhập mật khẩu mới</label>
            <div class="password-error-message" v-show="isNewPasswordEntered && !isNewPasswordValid">* Tối thiểu 8 kí tự</div>
        </div>

        <div class="password-input-container">
            <input
                type="password"
                v-model="confirmNewPasswordInput"
                @input="onConfirmNewPasswordInput"
                class="password-input"
            />
            <label class="password-placeholder" :class="{ active: isConfirmNewPasswordEntered }">Nhập lại mật khẩu mới</label>
            <div class="password-error-message" v-if="isConfirmNewPasswordEntered && !doPasswordsMatch">* Không trùng khớp</div>
        </div>
    </div>
    <button class="SubmitBtn col-4" @click="ChangePass" :disabled="isButtonDisabled">Xác nhận</button> 
    </div>
</template>

<style scoped>
.containers
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

.password
{
    width: 100%;    
}

.password-input-container {
  position: relative;
  width: 100%;
  margin-bottom: 40px;
}

.password-input {
  width: 100%;
  padding: 10px;
}

.password-placeholder {
  position: absolute;
  top: 50%;
  left: 10px;
  color: gray;
  font-style: italic;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
}

.password-placeholder.active {
  top: -10px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.651);
}

.password-error-message {
  color: red;
  font-size: 15px;
  margin-top: 5px;
}

.SubmitBtn
{
    background: rgb(105, 1, 1);
    border-radius: 5px;
    height: 37px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script>
import axios from "axios";
export default {
    data() {
  return {
    newPasswordInput: '',
    confirmNewPasswordInput: '',
    oldPasswordInput: '',
    isNewPasswordValid: false,
    doPasswordsMatch: false,
    isOldPasswordEntered: false,
    isNewPasswordEntered: false,
    isConfirmNewPasswordEntered: false,
    isButtonDisabled: true,
    Account: [],
  };
},
mounted() {
    const session = sessionStorage.getItem("account");
    console.log(">>> session:", session);
    if (session) {
      this.Account = JSON.parse(session);
      console.log(">>> account:", this.Account.mauser);
    }
},
methods: {
    async ChangePass(){
        const newpass = this.newPasswordInput;
        const mauser = this.Account.mauser
        const ChangePassword = await axios.post("http://localhost:3000/api/changepass",
            {
                newpass,mauser
            }
        );
        console.log(">>> ChangePassword:", ChangePassword.data.EC);
        setTimeout(() => {
          window.location.reload();
        }, 100);  
    },
    onOldPasswordInput() {
        this.isOldPasswordEntered = this.oldPasswordInput.length > 0;
    },
    onNewPasswordInput() {
        this.isNewPasswordEntered = true;
        this.isNewPasswordValid = this.newPasswordInput.length >= 8;
        this.checkPasswordsMatch();
        this.updateButtonState();
    },
    onConfirmNewPasswordInput() {
        this.isConfirmNewPasswordEntered = true;
        this.checkPasswordsMatch();
        this.updateButtonState();
    },
    checkPasswordsMatch() {
        this.doPasswordsMatch = this.newPasswordInput === this.confirmNewPasswordInput;
    },
    updateButtonState() {
        this.isButtonDisabled = !this.isNewPasswordValid || !this.doPasswordsMatch;
    }
}
}
</script>