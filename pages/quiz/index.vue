<template>
  <h1>Name:{{getPlayerName}}</h1>
</template>

<script>
import getPlayerName from '~/mixins/getPlayerName.js'
export default {
    mixins: [getPlayerName]
}
</script>

<style lang="scss" scoped>
h1{
    color: white;
}
</style>