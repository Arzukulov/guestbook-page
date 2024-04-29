<template>
    <div v-if="isActive" class="container" @click="handleClick">
        <div class="modal">
            <h3>Авторизация</h3>
            <form @submit="submitForm">
                <input type="email" id="email" placeholder="*Логин/Почта" required>
                <input type="password" id="password" placeholder="*Пароль" required>

                <button type="submit">Войти</button>
            </form>
            <div class="registration">
                Нет учетной записи?<br>
                <a href="">Зарегистрироваться</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true
        };
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive
        },
        submitForm() {
            console.log('submit');
        }
    }
}
</script>

<style scoped>
.container {
    background: #0000008c;
    z-index: 100000;
    position: fixed;
    margin: 0;
    margin-left: -8px;
    margin-top: -7px;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center
}

.modal {
    width: 25vw;
    height: 40vh;
    background-color: white;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -10%;
}

input {
    width: 80%;
}

button {
    background: #c34578;
    border: 1px solid #e4e4e4;
    align-items: center;
    padding: 8px 25px;
    border-radius: 12px;
    outline: none;
    width: 90%;
    margin-bottom: 25px;
    color: white;
}

button:hover {
    background: #a51a52;
}

.registration {
    margin-top: -20%;
}
</style>