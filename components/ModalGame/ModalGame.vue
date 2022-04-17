<template>
    <div class="container"> 
        <header-quiz 
            :score="getScore" 
            :player-name="getPlayerName" 
        />

        <div class="quiz__progress">
        </div>

        <music-genre/>        
        <div class="quiz__wrapper">
            <div class="actions">

                <h2 class="actions__title">Jazz song</h2>

                <p class="actions__subtitle">Listen to the audio and guess what song is it from the list</p>                              

                <audio-player :file = urlRandomMusic />
              
                <quiz-question
                v-for="(answer, i) in answers"
                :id="answer.id"
                :key="answer.id"                
                :answer=answer
                :num-answer="i"                
                :singer="answer.name"
                :song="answer.songTitle"                 
                :class="correctAnswer ? 'right' : 'wrong'"
                @giveAnswer  ="giveAnswer"                
                />                
            </div>
            <div class="info">
                <img 
                    v-if = !answer 
                    class="info__picture" 
                    src="images/desktop/union.png" 
                    alt="union-quiz-picture"
                >  
                <song-data
                     v-else                    
                    :answer = answer
                />
            </div>            
        </div>
        <div class="quiz__button">
            <quiz-button
             title="NEXT QUESTION"
             @click.prevent="endQuiz"
             ></quiz-button>
        </div>
    </div>
</template>

<script>
export default { 
    props:{
        urlRandomMusic: {
            type: String,
            required: false,
            default:'',
        },
        correctId:{
            type: String,
            required: false,
            default:''
        },        
    },
    data() {
        return {             
            answer: null,
            randomMusic: '',  
            correctAnswer: null,          
        }
    },      
    computed:{
        answers(){
            return this.$store.getters.getData
        },
        getPlayerName(){
          return this.$store.getters.getPlayerName
        },
        getScore(){
            return this.$store.getters.getScore
        },                 
    },       
    methods:{
        endQuiz() {
            // this.$emit('endQuiz')
            this.$router.push('/summary')
        },
        giveAnswer(giveAnswer){            
            this.answer = JSON.parse(JSON.stringify(giveAnswer))    
            console.log(this.answer)
            if(this.answer.id === this.correctId){
                console.log('You are right')
                this.correctAnswer = true
            } else {
                this.correctAnswer = false
            }        
        },
        
        
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalGame.scss'
</style>