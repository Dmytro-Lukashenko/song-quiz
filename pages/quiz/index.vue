<template>      
    <modal-game 
        :player-name = getPlayerName  
        :url-random-music = urlRandomMusic   
        :correct-id = correctId
        @endQuiz="endQuiz"        
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
            correctId:''
        }
    },  
    async fetch() {
        try{
        const loadedData = await this.$axios.$get('https://levi9-song-quiz.herokuapp.com/api/data')        
        this.$store.dispatch('setData', loadedData)         
        this.urlRandomMusic = 'https://levi9-song-quiz.herokuapp.com/api/' +this.$store.getters.getRandomQuizMusic[0]        
        this.correctId = this.$store.getters.getRandomQuizMusic[1] 
        this.$store.dispatch('setCorrectId', this.correctId)
        console.log(this.correctId)
        }
        catch(e) {console.log(e)}
   },
   methods: {
       endQuiz(){
           this.urlRandomMusic=''
       }
   }
}
</script>

<style lang="scss" scoped>
</style>