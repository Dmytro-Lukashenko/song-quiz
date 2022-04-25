<template>
<div class="bg__container">
    <div class="bg__animated bg__animated-red">      
    </div>
    <div class="bg__animated bg__animated-sky">      
    </div>
    <div class="bg__animated bg__animated-yellow">      
    </div>    
  <nuxt/>
  </div>
</template>
<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~assets/scss/mixins';
.bg__container{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;   
    box-sizing: border-box;      

    .bg__animated {
      position: absolute;      
      width: 50rem;
      height: 50rem;
      border-radius: 50%;    
      z-index: 0;          
      
      animation: blob 7s infinite;
       @include respond-tabletLandScape {
        width: 45rem;
        height: 45rem;       
      }
      @include respond-tabletPortrait {
        width: 40rem;
        height: 40rem; 
      }
      @include respond-mobile {
        width: 35rem;
        height: 35rem;         
      }

      &-red {       
        z-index: 0;     
        top: 1.25rem;
        left: -12rem;
        background-color: $red-900;
        filter:blur(40px);
        opacity: .2; 
      }
      &-sky {         
        z-index: 0;   
        bottom: -20rem;
        left: 25%;
        background: $sky-500;
        filter:blur(40px);
        opacity: .1; 
      }
      &-yellow {      
        z-index: 0;     
        top: 6rem;
        right: -12rem;
        background: $yellow-300;
        filter:blur(40px);
        opacity: .1; 
      }

      @keyframes blob {
        0% {
          transform: translate(0) scale(1);
        }
        33% {
          transform: translate(30px,-50px) scale(1.1);
        }
        66% {
          transform: translate(-20px,20px) scale(.9);
        }
        100% {
          transform: tranlate(0px,0px) scale(1);
        }
      }

    }

  }

</style>