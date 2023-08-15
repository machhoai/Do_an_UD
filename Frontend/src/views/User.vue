<template>
    <ContentUserPage/>
</template>

<script>
// @ is an alias to /src
import ContentUserPage from '@/components/ContentOfUserPage.vue'
export default {
  name: 'UserPageView',
  components: {
    ContentUserPage
    
  }
}
</script>

<style>
  .home
  {
    width: 100%;
  }
</style>