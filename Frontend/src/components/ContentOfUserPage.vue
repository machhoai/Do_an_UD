<template>
    <div class="container1 col-10 flex-wrap">
        <nav class="funtion col-xl-4 col-12">
          <div class="username"><i class="fa-regular fa-circle-user"></i></div>
            <ul>
                <li :class="{ 'active': showProfile }" @click="showProfileComponent" ><i class="fa-solid fa-user"></i> Hồ sơ của tôi</li>
                <li :class="{ 'active': showChangePass }" @click="showChangePassComponent" ><i class="fa-solid fa-lock"></i> Đổi Mật Khẩu</li>
              
            </ul>
        </nav>
        <component class="components col-xl-8 col-12" :is="activeSection"></component>
    </div>
</template>

<style scoped>
  .container1
  {
    display: flex;
    padding: 0;
    margin-top: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .active
  {
    font-weight: bold;
  }

  .funtion
  {
    /* width: 30%; */
    border-right: 1px solid rgba(0, 0, 0, 0.76);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .username
  {
    display: flex;
    height: auto;
    align-items: center;
    padding-bottom: 10px;
    padding-left: 30px ;
  }

  .username i
  {
    font-size: 50px;
    font-weight: lighter;
  }

  .username h4  
  {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  }

  .components
  {
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .funtion ul
  {
    list-style: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px;
  }

  .funtion li
  {
    padding: 7px 0;
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    cursor:pointer ;
  }

  .funtion li i
  {
    padding-right: 10px;
    font-size: 25px;
  }
@media(max-width:1292px){
  .container
  {
    flex-direction: column;
    justify-content: center;
  }
  .funtion
  {
    justify-content: center;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid black;
  }
  .components
  {
    width: 100%;
  }
  li 
  {
    justify-content: center;
  }
  .username
  {
    justify-content: center;
  }
}

</style>

<script>
  import UserProfile from '@/components/User-page-components/Profile.vue';
  import ChangePassword from '@/components/User-page-components/Change-password.vue';
  export default {
    components:{
      UserProfile,ChangePassword
    },
  data() {
    return {
      activeSection: '',
      showProfile: false,
      showChangePass: false
    };
  },
  created() {
    this.activeSection = 'UserProfile'; // Hiển thị Profile mặc định
    this.showProfile = true;
    this.showChangePass = false;
  },
  methods: {
    showProfileComponent() {
      this.activeSection = 'UserProfile';
      this.showProfile = true;
      this.showChangePass = false;
    },
    showChangePassComponent() {
      this.activeSection = 'ChangePassword';
      this.showProfile = false;
      this.showChangePass = true;
    }
    }
    }
  
</script>