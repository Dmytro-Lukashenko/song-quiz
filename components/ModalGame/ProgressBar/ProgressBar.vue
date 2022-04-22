<template>
  <div 
           :class="{
               'correct__progress_1': jazzCorrect,   
               'active_2' : $store.state.genre === 1 && !rockCorrect,             
               'correct__progress_2' : rockCorrect, 
               'active_3' : $store.state.genre === 2 && !popCorrect,
               'correct__progress_3' : popCorrect,
               'active_4' : $store.state.genre === 3,
               'correct__progress_4' : soundtrackCorrect,               
               }"
            class="quiz__progress">            
        </div>
</template>

<script>
export default {
    props:{
        blockState:{
            type: Boolean,
            required: false,
        }
    },
    data(){
        return {
            jazzCorrect: false,
            rockCorrect: false,
            popCorrect: false,
            soundtrackCorrect: false,
        }
    },
    watch:{
        blockState(value){
            console.log('blockState value', value)
            if(this.$store.state.genre === 0 && this.blockState){
                this.jazzCorrect = true
                console.log('jazzCorrect',this.jazzCorrect)
            } else if (this.$store.state.genre === 1 && this.blockState){
                 this.rockCorrect = true
                 console.log('rockCorrect',this.rockCorrect)
            } else if (this.$store.state.genre === 2 && this.blockState){
                this.popCorrect = true
                console.log('popCorrect',this.popCorrect)
            } else if(this.$store.state.genre === 3 && this.blockState){
                this.soundtrackCorrect = true
                console.log('soundtrackCorrect',this.soundtrackCorrect)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ProgressBar.scss'
</style>