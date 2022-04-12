<template>
  <div class="wrapper">
    <div class="container">
    <div class="bg__animated bg__animated-red">      
    </div>
    <div class="bg__animated bg__animated-sky">      
    </div>
    <div class="bg__animated bg__animated-yellow">      
    </div>
    </div>
    <div>
  <img class="logo" src="@/static/images/desktop/logo.png" alt="logo">
  <div class="modal">
  </div>  
  </div>
  </div>  
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
  .wrapper {
    position: relative;
    display: flex;
    flex-direction:column;
    height: 100%;
    width: 100%;
    z-index: 10;
    align-items: center;
    justify-content: center;

    .logo{
      position: absolute;
      top:5rem;
      left:50%;
      transform: translateX(-50%);
      width: 9rem;
    }
    .modal {
      margin-left: auto;
      margin-right: auto;
      width: 1100px;
      height: 484px;
      background-color: $violet-800;     
    }




  }
  .container{
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;   
    box-sizing: border-box;      

    .bg__animated {
      position: absolute; 
      z-index:10;    
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
        bottom: -72rem;
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