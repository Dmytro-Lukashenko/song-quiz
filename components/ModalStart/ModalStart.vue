<template>
<form class="modal" v-if="!start">
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
            subtitle: 'Please enter your name and let\'s start our quiz!',
            start: false,
        }
    }, 
     methods:{
        startQuiz(){
            this.start = true;
            this.$store.dispatch('setPlayerName', this.nameValue); 
            this.$router.push('/quiz');
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalStart.scss'
</style>