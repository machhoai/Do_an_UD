<template>
  <Navigation/>
  <div class="container">
    <router-view/>
  </div>
  <Footer/>
</template>


<script>
  import Navigation from "@/components/TheNavigation.vue"
  import Footer from "@/components/Footer.vue"
  export default {
    components:{
      Navigation,Footer
    }
  }
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

.container
{
  position: relative;
  top: 90px;
  width: 100%;
}


</style>
