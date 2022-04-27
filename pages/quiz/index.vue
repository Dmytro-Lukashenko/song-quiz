<template>      
    <div>        
        <modal-game     
            v-if="finish && $store.state.again"
            :player-name = getPlayerName   
            :url-random-music = urlRandomMusic
            :correct-id = correctId 
            :next-q = nextQ           
            @endQuiz="endQuiz"  
            @nextQuestion="nextQuestion"      
        />   
    </div>
</template>

<script>
import getPlayerName from '~/mixins/getPlayerName.js'
export default {
    mixins: [getPlayerName],
    middleware:['check-name'],
    data(){
        return {
            currentTime: 0,
            urlRandomMusic: '',
            musicFile:'',
            correctId:'',             
            nextQ: false,
            finish: false,            
        }
    },       
    async fetch({ store, $axios }) {  
        const fetchedData = await $axios.$get(
        'https://levi9-song-quiz.herokuapp.com/api/data'
        )
        await store.dispatch('setData', fetchedData) 
    },
    
    mounted(){
        // Loader     
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => {
            this.$nuxt.$loading.finish()
            this.finish = true
        }, 2000)
        })        
        this.$store.dispatch('loadData')
        this.urlRandomMusic = 'https://levi9-song-quiz.herokuapp.com/api/' +this.$store.getters.getRandomQuizMusic[0]        
        this.correctId = this.$store.getters.getRandomQuizMusic[1] 
        this.$store.dispatch('setCorrectId', this.correctId)  
        
       
   },

   methods: {
       nextQuestion(){ 
            this.nextQ = !this.nextQ             
            this.$store.dispatch('clearData')
            this.$store.dispatch('genreIncrease')
            this.$store.dispatch('loadData')
            this.urlRandomMusic= ''
            this.correctId = ''
            this.urlRandomMusic = 'https://levi9-song-quiz.herokuapp.com/api/' +this.$store.getters.getRandomQuizMusic[0]        
            this.correctId = this.$store.getters.getRandomQuizMusic[1] 
            this.$store.dispatch('setCorrectId', this.correctId)             
        },
       endQuiz(){
            this.nextQ = !this.nextQ
            this.urlRandomMusic= ''
            this.correctId = ''
            this.urlRandomMusic = 'https://levi9-song-quiz.herokuapp.com/api/' +this.$store.getters.getRandomQuizMusic[0]        
            this.correctId = this.$store.getters.getRandomQuizMusic[1] 
            this.$store.dispatch('setCorrectId', this.correctId)       
            this.$store.dispatch('clearData')           
            this.$store.dispatch('tryAgain')            
            this.$router.push('/summary')
       },  
   }
}
</script>
