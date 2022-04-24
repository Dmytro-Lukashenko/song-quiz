<template>
<form class="modal">
    <img class="modal__picture" src="images/desktop/union.png" alt="union-quiz-picture">
    <div class="modal__score">{{totalScore}}</div>
    <h1 class="modal__title">{{playerName}}{{$store.state.totalScore === 12 ? title1 : title2}}</h1>
    <p class="modal__subtitle">{{$store.state.totalScore === 12 ? subtitle1 : subtitle2}}</p>       
    <div>
        <quiz-button 
            class="modal__button"  
            title="TRY AGAIN"            
            @click.prevent = tryAgain />            
    </div>
</form> 
</template>

<script>
export default {
    props:{
        playerName:{
            type: String,
            required: true,
        },
        totalScore:{
             type: Number,
            required: true,
        }
    },
    data() {
        return {    
            title1: ', did so great!',
            title2: ', you can do better, try again!',
            subtitle1: `You've got ${this.totalScore} out of 12 points. You are definitely a music lover!`,
            subtitle2: `You've got ${this.totalScore} out of 12 points.`
            
            }            
    },     
    methods:{
        tryAgain(){
            this.$store.dispatch('clearState')
            this.$router.push('/quiz')
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalSummary.scss'
</style>