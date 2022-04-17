<template>
<form class="modal">
    <h1 class="modal__title">{{title}}</h1>
    <p class="modal__subtitle">{{subtitle}}</p>
    <div>
        <modal-input v-model="nameValue"/>
    </div>    
    <div>
        <quiz-button 
            class="modal__button"            
            :name-value="nameValue" 
            :disabled = !nameValue
            title="START QUIZ"            
            @click.prevent="startQuiz"/>            
    </div>
</form> 
</template>

<script>
export default {
    
    data() {
        return {
            nameValue:'',
            title: 'Wellcome!',
            subtitle: 'Please enter your name and let\'s start our quiz!'
        }
    }, 
     methods:{
        startQuiz(){
            this.$store.dispatch('setPlayerName', this.nameValue)             
            console.log('1',this.$store.state.loadedData)          
            this.$router.push('/quiz')

        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalStart.scss'
</style>