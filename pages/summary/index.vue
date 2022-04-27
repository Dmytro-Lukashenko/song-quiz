<template>
  <div class="wrapper">        
    <img class="logo" src="@/static/images/desktop/logo.png" alt="logo">
    <modal-summary 
      class= "modal-summary"
      :player-name = getPlayerName  
      :total-score = $store.state.totalScore 
      />  
  </div>  
</template>

<script>
import getPlayerName from '~/mixins/getPlayerName.js'
export default {
  mixins: [getPlayerName],
  middleware:['check-name'],

}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~assets/scss/mixins';
  .wrapper {
    @include flexCenter;
    position: relative;    
    flex-direction:column;
    height: 100%;
    width: 100%;    
    min-height: 100vh;    

    .logo{
      position: absolute;
      top:5rem;
      left:50%;
      transform: translateX(-50%);
      width: 13rem;
      z-index: 10;
    }   
    .modal-summary{
      text-align: center;   
        
    }  
  }
 
</style>