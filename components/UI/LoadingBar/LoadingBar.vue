<template>
<div v-if="loading" class="modal">
    <div class="lds-hourglass"></div>    
    <h1 class="modal__title">{{title}}</h1>    
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
      }
    }
  }
</script>

<style lang="scss" scoped>
@import 'LoadingBar.scss'
</style>