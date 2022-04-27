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
        blockState(){            
            if(this.$store.state.genre === 0 && this.blockState){
                this.jazzCorrect = true               
            } else if (this.$store.state.genre === 1 && this.blockState){
                 this.rockCorrect = true                 
            } else if (this.$store.state.genre === 2 && this.blockState){
                this.popCorrect = true               
            } else if(this.$store.state.genre === 3 && this.blockState){
                this.soundtrackCorrect = true                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ProgressBar.scss'
</style>