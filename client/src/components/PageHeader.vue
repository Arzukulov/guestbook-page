<template>
    <div class="header">
        <div>
            <h1>Гостевая книга</h1>
        </div>
        <AuthButton :text="textButton"/>
    </div>
</template>

<script>
import AuthButton from './ButtonTemplate.vue';
export default {
    components: {
        AuthButton
    },
    data() {
        return {
            textButton: 'Авторизация',
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    height: 77px;
    border-bottom: 1px solid #e4e4e4;
    flex: 0 0 auto;
    position: relative;
    z-index: 10;
    background: #fff;
    padding-left: 50px;
    justify-content: space-around;
}
</style>