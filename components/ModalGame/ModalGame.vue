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
        <music-genre
            :block-state = blockState
        />        
        <div class="quiz__wrapper">
            <div class="actions">

                <h2 class="actions__title">{{genre[$store.state.genre]}} song</h2>

                <p class="actions__subtitle">Listen to the audio and guess what song is it from the list</p>                              

                <audio-player 
                    :file = urlRandomMusic
                    :block-state = blockState
                    :answer-image= answerImage
                    :next-q = nextQ
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
                    :next-q = nextQ
                    :music-file = musicFile
                />
            </div>            
        </div>
        <div class="quiz__button">
            <quiz-button
             :title="$store.state.genre === 3 ? title1 : title2"
             :disabled="!blockState"
             @click.prevent="$store.state.genre < 3 ?  nextQuestion()  : endQuiz()"
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
        musicFile:{
            type: String,
            required: false,
            default:'',
        },
        correctId:{
            type: String,
            required: false,
            default:''
        },        
        nextQ:{
			type: Boolean,
			required: false,
			default: false,
		}    
    },
    data() {
        return {        
            currentTime: 0,     
            answer: null,
            randomMusic: '',
            correctAnswer: null, 
            blockState: false,  
            answerImage:'',     
            title1: 'SEE MY SCORE',
            title2: 'NEXT QUESTION',
            genre:{
                0: 'Jazz',
                1: 'Rock',
                2: 'Pop',
                3: 'Soundtrack',
            },
            
               
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
        },
        nextQ(value){
			console.log('nextQ modal-game value', value)
		}
    },   
    methods:{

        giveAnswer(giveAnswer){               
            this.answer = JSON.parse(JSON.stringify(giveAnswer))    
            if (this.blockState){
                return
            }           
            if(this.answer.id === this.correctId){               
                this.$store.dispatch('changeCorrectState')             
                this.blockState = true;
                this.answerImage = this.answer.image                
                this.$store.dispatch('totalScoreChange')
            } else {                
                this.$store.dispatch('changeWrongState', this.answer.id)
                this.$store.dispatch('scoreDecrease')
            }        
        },
        nextQuestion(){ 
            this.$emit('nextQuestion')
        },
        endQuiz(){
            this.$emit('endQuiz')
        }
        
        
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalGame.scss'
</style>