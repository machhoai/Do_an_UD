<template>
  <Navigation/>
  <div class="container">
    <router-view/>
  </div>
</template>


<script>
  import Navigation from "@/components/TheNavigation.vue"
  export default {
    components:{
      Navigation
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container
{
  position: relative;
  top: 90px;
  width: 100%;
  margin: 0px;
}
</style>
