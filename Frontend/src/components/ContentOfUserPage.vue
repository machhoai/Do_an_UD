<template>
    <div class="container">
        <nav class="funtion">
          <div class="username"><i class="fa-regular fa-circle-user"></i><h4>Mạch Hoài</h4></div>
            <ul>
                <li :class="{ 'active': showProfile }" @click="showProfileComponent" ><i class="fa-solid fa-user"></i> Hồ sơ của tôi</li>
                <li :class="{ 'active': showChangePass }" @click="showChangePassComponent" ><i class="fa-solid fa-lock"></i> Đổi Mật Khẩu</li>
                <li :class="{ 'active': showOrders }" @click="showOrdersComponent"><i class="fa-solid fa-bag-shopping"></i> Đơn hàng của tôi</li>
            </ul>
        </nav>
        <component class="components" :is="activeSection"></component>
    </div>
</template>

<style scoped>
  .container
  {
    display: flex;
    width: 50%;
    padding: 0;
    margin-top: 50px;
  }

  .active
  {
    font-weight: bold;
  }

  .funtion
  {
    width: 30%;
    border-right: 1px solid rgba(0, 0, 0, 0.76);
  }
  .username
  {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    padding-bottom: 10px;
  }

  .username i
  {
    font-size: 50px;
    padding-right: 10px ;
    font-weight: lighter;
  }

  .username h4  
  {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  }

  .components
  {
    width: 70%; 
    padding-left: 70px;
    height: auto;
    position: relative;
  }

  .funtion ul
  {
    list-style: none;
    text-align: left;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px;
  }

  .funtion li
  {
    padding: 7px;
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
  import Orders from '@/components/User-page-components/My-oders.vue';
  import ChangePassword from '@/components/User-page-components/Change-password.vue';
  export default {
    components:{
      UserProfile,Orders,ChangePassword
    },
  data() {
    return {
      activeSection: '',
      showProfile: false,
      showOrders: false,
      showChangePass: false
    };
  },
  created() {
    this.activeSection = 'UserProfile'; // Hiển thị Profile mặc định
    this.showProfile = true;
    this.showOrders = false;
    this.showChangePass = false;
  },
  methods: {
    showProfileComponent() {
      this.activeSection = 'UserProfile';
      this.showProfile = true;
      this.showOrders = false;
      this.showChangePass = false;
    },
    showOrdersComponent() {
      this.activeSection = 'Orders';
      this.showProfile = false;
      this.showOrders = true;
      this.showChangePass = false;
    },
    showChangePassComponent() {
      this.activeSection = 'ChangePassword';
      this.showProfile = false;
      this.showOrders = false;
      this.showChangePass = true;
    }
    }
    }
  
</script>