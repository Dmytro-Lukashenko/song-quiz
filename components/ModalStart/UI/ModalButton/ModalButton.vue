<template>
  <button 
        class="modal__button" t
        ype="submit" 
        tabindex="0"
        :disabled = !nameValue
        @click.prevent = "startQuiz()"
        >
        START QUIZ
        <svg width="50" _ngcontent-fam-c19="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="modal__button-arrow">
          <path 
              _ngcontent-fam-c19="" 
              fill-rule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.14l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a20 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd">
          </path>
        </svg>
    </button>
</template>

<script>
export default {
    props:{
        nameValue:{
            type: String,
            required: false,
            default:''
        }
    },
    methods:{
        startQuiz(){
            this.$store.dispatch('setPlayerName', this.nameValue)
            this.$router.push('/quiz')
        }
    }

}
</script>

<style lang="scss" scoped>
@import 'ModalButton.scss'
</style>