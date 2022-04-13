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
.bg__container{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;   
    box-sizing: border-box;      

    .bg__animated {
      position: absolute;      
      width: 36rem;
      height: 36rem;
      border-radius: 50%;
           
      // mix-blend-mode: screen;
      animation: blob 7s infinite;

      &-red {         
        top: 1.25rem;
        left: -12rem;
        background-color: $red-900;
        filter:blur(40px);
        opacity: .2; 
      }
      &-sky {         
        bottom: -12rem;
        left: 25%;
        background: $sky-500;
        filter:blur(40px);
        opacity: .1; 
      }
      &-yellow {        
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