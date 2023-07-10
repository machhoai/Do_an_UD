<template>
  <Navigation/>
  <section class="content">
    <router-view/>
  </section>
    
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


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

.content
{
  position: relative;
  top: 70px;
  width: 100%;
}


</style>
