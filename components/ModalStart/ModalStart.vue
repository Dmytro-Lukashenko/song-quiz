<template>
<form class="modal">
    <h1 class="modal__title">Welcome!</h1>
    <p class="modal__subtitle">Please enter your name and let's start our quiz!</p>
    <div>
    <modal-input v-model="nameValue"/>
    </div>
    <div>
    <modal-button :name-value="nameValue"/>
    </div>
</form> 
</template>

<script>
export default {
    data() {
        return {
            nameValue:''
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
 .modal {           
      display:block;
      width: 1100px;
      height: 484px;
      background-color: $violet-800;   
      z-index: 20;  
      padding: 90px 0;
      border-radius: 10px;

      &__title{
        font-family: 'Prompt';
        font-style: normal;
        color: $white;
        font-weight: 700;
        font-size: 30px;
        line-height: 45px;
        margin-bottom: 10px;

      }
      &__subtitle{
        font-family: 'Arial';
        font-style: normal;
        color: $white;
        opacity: 0.7;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        margin-bottom: 90px;
      }
     
      
}
</style>