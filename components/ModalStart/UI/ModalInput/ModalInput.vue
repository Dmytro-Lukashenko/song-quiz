<template>
  <input          
        class="modal__input"
        type="text"
        maxlength="20"
        placeholder="TYPE YOUR NAME HERE..."
        autocomplete="off"       
        @input="inputHandle($event)"
        >
</template>

<script>
export default {   
    methods: {
        inputHandle(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'ModalInput.scss'
</style>