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

                <audio-player file="https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis-Emmanuel_Jadin_-_Nocturne_No._3_in_G_minor_-_2._Allegro_molto.ogg"/>
                                 
                <!-- <div class="actions__question"> 
                    <div class="actions__question__container">
                        <div class="actions__question__container--point"></div>
                        <h2 class="actions__question__container--title">01:Louis Armstrong - What a Wonderful World</h2>
                    </div>
                </div>
                <div class="actions__question">
                    <div class="actions__question__container">
                        <div class="actions__question__container--point"></div>
                        <h2 class="actions__question__container--title">01:Louis Armstrong - What a Wonderful World</h2>
                    </div>
                </div>
                <div class="actions__question">                    
                    <div class="actions__question__container">
                        <div class="actions__question__container--point"></div>
                        <h2 class="actions__question__container--title">01:Louis Armstrong - What a Wonderful World</h2>
                    </div>
                </div>
                <div class="actions__question">                    
                    <div class="actions__question__container">
                        <div class="actions__question__container--point"></div>
                        <h2 class="actions__question__container--title">01:Louis Armstrong - What a Wonderful World</h2>
                    </div>
                </div>
            </div>
            <div class="info">
                <img class="info__picture" src="images/desktop/union.png" alt="union-quiz-picture">
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
    data() {
        return {  
        }
    },    
    computed:{
        getPlayerName(){
          return this.$store.getters.getPlayerName
        },
        getScore(){
            return this.$store.getters.getScore
        }
    },
    methods:{
        endQuiz() {
            this.$router.push('/summary')
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalGame.scss'
</style>