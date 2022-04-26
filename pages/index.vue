<template>
  <div class="wrapper">        
    <img class="logo" src="@/static/images/desktop/logo.png" alt="logo">
    <modal-start class= "modal-start"/>  
  </div>  
</template>

<script>
export default {
  name: 'IndexPage',
  
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~assets/scss/mixins';
  .wrapper {
    position: relative;
    display: flex;
    flex-direction:column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 100vh;    

    .logo{
      position: absolute;
      top:5rem;
      left:50%;
      transform: translateX(-50%);
      width: 13rem;
      z-index: 10;   
    }   
    .modal-start{
      text-align: center;   
      z-index:1;   
    }
  
  
  }
 
</style>