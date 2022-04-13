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
   
.modal__game{
    z-index: 1;

}
</style>