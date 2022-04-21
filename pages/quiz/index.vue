<template>      
    <modal-game 
        :player-name = getPlayerName  
        :url-random-music = urlRandomMusic   
        :correct-id = correctId
        @endQuiz="endQuiz"
        @nextQuestion="nextQuestion"        
    />   
</template>

<script>
import getPlayerName from '~/mixins/getPlayerName.js'
export default {
    mixins: [getPlayerName],
    middleware:['check-name'],
    data(){
        return {
            urlRandomMusic: '',
            correctId:'',            
        }
    },        
   mounted(){
        console.log('mounted')
        this.$store.dispatch('loadData')
        this.urlRandomMusic = 'https://levi9-song-quiz.herokuapp.com/api/' +this.$store.getters.getRandomQuizMusic[0]        
        this.correctId = this.$store.getters.getRandomQuizMusic[1] 
        this.$store.dispatch('setCorrectId', this.correctId)        
        console.log(this.correctId)
   },

   methods: {
       nextQuestion(){
            console.log('nextQuestion')
            this.$store.dispatch('clearData')
            this.$store.dispatch('genreIncrease')
            this.$store.dispatch('loadData')
            this.urlRandomMusic= ''
            this.correctId = ''
            this.urlRandomMusic = 'https://levi9-song-quiz.herokuapp.com/api/' +this.$store.getters.getRandomQuizMusic[0]        
            this.correctId = this.$store.getters.getRandomQuizMusic[1] 
            this.$store.dispatch('setCorrectId', this.correctId)        
            console.log(this.correctId)
        },
       endQuiz(){
            this.correctId = ''
            this.urlRandomMusic=''
            this.$store.dispatch('genreIncrease') 
            this.$store.dispatch('clearData')           
            this.$router.push('/summary')
       }
   }
}
</script>

<style lang="scss" scoped>
</style>