<template>      
    <modal-game :player-name = getPlayerName />   
</template>

<script>
import getPlayerName from '~/mixins/getPlayerName.js'
export default {
    mixins: [getPlayerName],
    middleware:['check-name'],
}
</script>

<style lang="scss" scoped>
</style>