<template>
    <div class="container">
        <div class="quiz__header">        
            <img class="quiz__header-logo" src="@/static/images/desktop/logo.png" alt="logo">
            <div class="quiz__header-content">
                <h2 class="quiz__header-content--playerName">{{playerName}}</h2>                
                <h2 class="quiz__header-content--title">Your Score: <span class="quiz__header-content--score">10</span> </h2>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        playerName:{
            type: String,
            required: true,
        }
    },
    data() {
        return {            
            title: 'Wellcome!',
            subtitle: 'Please enter your name and let\'s start our quiz!'
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'ModalGame.scss'
</style>