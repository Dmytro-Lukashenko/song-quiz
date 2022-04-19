<template>
  <div class="actions__question" > 
    <div class="actions__question__container" @click="$emit('giveAnswer', answer)">
        <div class="actions__question__container--point">            
        </div>
        <h2 class="actions__question__container--title">0{{numAnswer+1}}: {{singer}} - {{song}}</h2>
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
       id:{
           type: String,
           required: true,
       },
       numAnswer:{
           type: Number,
           required: true,
       },
       singer:{
           type: String,
           required: true,
       },
       song:{
           type: String,
           required: true,
       },
       correctId:{
            type: String,
            required: false,
            default:''
        },     
        blockState:{
            type:Boolean,
            required: false,
        }
   },
   data(){
       return {
        
       }
   },
   methods:{
      
   }

}
</script>

<style lang="scss" scoped>
@import 'QuizQuestion'
</style>