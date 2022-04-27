<template>
<div v-if="loading" class="container">
  <div class="loader__wrapper">
    <div class="loader">
      <h1 class="loader__title">{{title}}</h1>
    </div>  
  </div>
</div> 
</template>

<script>
export default {
   
    data: () => ({
      loading: false,     
      title: 'Loading...'
    }),
    methods: {
    start() {
      this.loading = true      
    },
    finish() {
      this.loading = false      
    },
    fail(error) {
      console.log(error)
    },    
  },
  }
</script>

<style lang="scss" scoped>
@import 'LoadingBar.scss'
</style>