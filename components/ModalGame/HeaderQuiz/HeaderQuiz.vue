<template>
  <div class="quiz__header">        
            <img class="quiz__header-logo" src="@/static/images/desktop/logo.png" alt="logo">
            <div class="quiz__header-content">                              
                <h2 class="quiz__header-content--playerName">{{playerName}}</h2>                
                <h2 class="quiz__header-content--title">Your Score: <span class="quiz__header-content--score">{{totalScore}}</span> </h2>                
            </div>
        </div>
</template>

<script>
export default {
    props:{
        playerName:{
            type: String,
            required: true,
        },       
        // eslint-disable-next-line vue/require-default-prop
        score:{
            type: Number,
            requred:true,
        },
        totalScore:{
            type: Number,
            requred:true,
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'HeaderQuiz.scss'
</style>