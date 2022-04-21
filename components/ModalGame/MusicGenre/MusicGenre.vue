<template>
  <div class="quiz__music_genre">
            <ul class="quiz__music_genre__list">
                <li 
                    :class="{'correct' : blockState}"
                    class="quiz__music_genre__list--item active">JAZZ</li>

                <li 
                    :class="{'correct' : blockState}"
                    class="quiz__music_genre__list--item">
                    <svg 
                        width="20"
                        class="quiz__music_genre__list--item-arrow"
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
                <li class="quiz__music_genre__list--item">ROCK</li>
                <li class="quiz__music_genre__list--item">
                    <svg 
                        width="20"
                        class="quiz__music_genre__list--item-arrow"
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
                <li class="quiz__music_genre__list--item">POP</li>
                <li class="quiz__music_genre__list--item">
                    <svg 
                        width="20"
                        class="quiz__music_genre__list--item-arrow"
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
                <li class="quiz__music_genre__list--item">SOUNDTRACK</li>               
            </ul>
        </div>
</template>

<script>
export default {
    props:{
        blockState:{
            type: Boolean,
            required: false,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'MusicGenre.scss'
</style>