<template>
    <div @click="handleClick" class="button-default button">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$emit('clickEvent')
        }
    }
}
</script>

<style scoped>
.button-default {
    background: #c34578;
    color: #fff;
    border: 1px solid #c34578;
}

.button {
    font-weight: 500;
    display: inline-flex;
    padding: 0 22px;
    height: 42px;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    margin-top: 15px;
    cursor: default;
}

.button:hover {
    background: #a51a52;
}
</style>