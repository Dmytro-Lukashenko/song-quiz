<template>
    <div class="container">
        <div class="quiz__header">        
            <img class="quiz__header-logo" src="@/static/images/desktop/logo.png" alt="logo">
            <div class="quiz__header-content">
                <h2 class="quiz__header-content--playerName">{{playerName}}</h2>                
                <h2 class="quiz__header-content--title">Your Score: <span class="quiz__header-content--score">10</span> </h2>                
            </div>
        </div>
        <div class="quiz__progress">
        </div>
        <div class="quiz__music_type">
            <ul class="quiz__music_type__list">
                <li class="quiz__music_type__list--item active">JAZZ</li>
                <li class="quiz__music_type__list--item">
                    <svg 
                        width="20"
                        class="quiz__music_type__list--item-arrow"
                        fill="currentColor"
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg" 
                        ><path                             
                            fill-rule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clip-rule="evenodd">
                    </path>
                    </svg>
                </li>
                <li class="quiz__music_type__list--item">ROCK</li>
                <li class="quiz__music_type__list--item">
                    <svg 
                        width="20"
                        class="quiz__music_type__list--item-arrow"
                        fill="currentColor"
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg" 
                        ><path                             
                            fill-rule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clip-rule="evenodd">
                    </path>
                    </svg>
                </li>
                <li class="quiz__music_type__list--item">POP</li>
                <li class="quiz__music_type__list--item">
                    <svg 
                        width="20"
                        class="quiz__music_type__list--item-arrow"
                        fill="currentColor"
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg" 
                        ><path                             
                            fill-rule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clip-rule="evenodd">
                    </path>
                    </svg>
                </li>
                <li class="quiz__music_type__list--item">SOUNDTRACK</li>               
            </ul>
        </div>        
        <div class="quiz__wrapper">
            <div class="actions">
                <h2 class="actions__title">Jazz song</h2>
                <p class="actions__subtitle">Listen to the audio and guess what song is it from the list</p>
                <div class="actions__player">                    
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
            <quiz-button title="NEXT QUESTION"></quiz-button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        playerName:{
            type: String,
            required: true,
        }
    },
    data() {
        return {  
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'ModalGame.scss'
</style>