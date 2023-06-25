<template>
  <div class="home">
    <ContentHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentHome from '@/components/ContentOfHome.vue'
export default {
  name: 'HomeView',
  components: {
    ContentHome
  }
}
</script>

<style>
  .home
  {
    width: 100%;
  }
</style>