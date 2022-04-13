<template>
<form class="modal">
    <h1 class="modal__title">{{title}}</h1>
    <p class="modal__subtitle">{{subtitle}}</p>
    <div>
        <modal-input v-model="nameValue"/>
    </div>
    <div>
        <modal-button :name-value="nameValue"/>
    </div>
</form> 
</template>

<script>
export default {
    data() {
        return {
            nameValue:'',
            title: 'Wellcome!',
            subtitle: 'Please enter your name and let\'s start our quiz!'
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'ModalStart.scss'
</style>