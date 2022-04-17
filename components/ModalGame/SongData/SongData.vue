<template>
    <div class="data__container">
        <div class="title">
            <h1 class="title__content">{{answer.name}} - {{answer.songTitle}}</h1>
        </div>
        <div class="image">
            <img :src="imageSrc" alt="Photo of a musician" class="image__content">
        </div>
        <audio-player class="actions__player_right" :file="musicFile"/>
        <div class="description">
            <h2 class="description__content">{{answer.description}}</h2>
        </div>
    </div>
</template>

<script>

export default {
    props:{       
       answer:{
           type: Object,
           required: true,
       },        
    },
    computed: {
        imageSrc(){
            return 'https://levi9-song-quiz.herokuapp.com/api/' + this.answer.image
        },
        musicFile(){
            return 'https://levi9-song-quiz.herokuapp.com/api/' + this.answer.audio
        }
    }

}
</script>

<style lang="scss" scoped>
@import "SongData.scss"
</style>