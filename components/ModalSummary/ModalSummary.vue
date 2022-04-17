<template>
<form class="modal">
    <img class="modal__picture" src="images/desktop/union.png" alt="union-quiz-picture">
    <div class="modal__score">{{score}}</div>
    <h1 class="modal__title">{{playerName}}{{title}}</h1>
    <p class="modal__subtitle">{{subtitle}}</p>       
    <div>
        <quiz-button 
            class="modal__button"  
            title="TRY AGAIN"            
            @click.prevent="$router.push('/quiz')"/>            
    </div>
</form> 
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
            score: 10,  
            title: ', did so great!',
            subtitle: 'You\'ve got 10 out of 12 points. You are definitely a music lover!'        }
    },     
}
</script>

<style lang="scss" scoped>
@import 'ModalSummary.scss'
</style>