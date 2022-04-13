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
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  text-align: center;
}

.error-page {
  &__link {
    text-decoration: none;
    color: red;
  }
}
</style>