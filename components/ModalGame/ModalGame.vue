<template>
    <div class="container">         
        <header-quiz        
            :score="getScore" 
            :total-score = $store.state.totalScore
            :player-name="getPlayerName" 
            :block-state = blockState
        />
        <progress-bar
            :block-state = blockState            
         />
        <!-- <div 
            :class="{'correct__progress': blockState }"
            class="quiz__progress">            
        </div> -->

        <music-genre
            :block-state = blockState
        />        
        <div class="quiz__wrapper">
            <div class="actions">

                <h2 class="actions__title">Jazz song</h2>

                <p class="actions__subtitle">Listen to the audio and guess what song is it from the list</p>                              

                <audio-player 
                    :file = urlRandomMusic
                    :block-state = blockState
                    :answer-image= answerImage
                     />
              
                <quiz-question
                    v-for="(addanswer, i) in answers"
                    :id="addanswer.id"
                    :key="addanswer.id"  
                    :block-state = blockState              
                    :answer = addanswer
                    :num-answer="i"                
                    :singer="addanswer.name"
                    :song="addanswer.songTitle"                 
                    :class="{'right': addanswer.correct === '1' && addanswer.default === '1', 'wrong': addanswer.correct === '2' && addanswer.default === '0'}"
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
             :title="$store.state.genre === 3 ? title1 : title2"
             :disabled="!blockState"
             @click.prevent="$store.state.genre < 3 ?  $emit('nextQuestion')  : $emit('endQuiz')"
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
            blockState: false,  
            answerImage:'',     
            title1: 'SEE MY SCORE',
            title2: 'NEXT QUESTION'          
        }
    },      
    computed:{
        answers(){
            return this.$store.getters.getData.map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1])
        },
        getPlayerName(){
          return this.$store.getters.getPlayerName
        },
        getScore(){
            return this.$store.getters.getScore
        },                 
    },       
    watch:{
        correctId(val){
           this.answer = null
           this.blockState = false
        }
    },
    methods:{

        giveAnswer(giveAnswer){               
            this.answer = JSON.parse(JSON.stringify(giveAnswer))    
            if (this.blockState){
                return
            }
            console.log(this.answer)
            if(this.answer.id === this.correctId){
                console.log('You are right') 
                this.$store.dispatch('changeCorrectState')             
                this.blockState = true;
                this.answerImage = this.answer.image
                console.log('record answerImage',this.answerImage)
                this.$store.dispatch('totalScoreChange')
            } else {
                console.log('You are wrong')
                this.$store.dispatch('changeWrongState', this.answer.id)
                this.$store.dispatch('scoreDecrease')
            }        
        },
        
        
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalGame.scss'
</style>