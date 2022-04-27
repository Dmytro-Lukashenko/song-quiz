<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>{{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <p>Back to
      <nuxt-link class="error-page__link" to="/">safety</nuxt-link>
    </p>    
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~assets/scss/variables' as *;
@use '~assets/scss/mixins' as *;
.error-page {
  @include flexCenter;
  position: relative;
  font-size: 3rem;
  width: 100%;
  height: 100vh;
  transform: translate(0%,-10%);  
  flex-direction: column;  
  color: $white;
   @include respond-tabletLandScape {
        font-size: 2.5rem;    
      }
      @include respond-tabletPortrait {
        font-size: 2rem;    
      }
      @include respond-mobile {
        font-size: 1.5rem;     
      }
  &__link {    
    color: $red-500;
  }
}
</style>