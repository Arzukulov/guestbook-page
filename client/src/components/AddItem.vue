<template>
  <div class="guest_book">
    <h2>Оставить отзыв</h2>
    <div>
      <input type="text" v-model="name" placeholder="Ваше имя*">
    </div>
    <div>
      <textarea v-model="description" placeholder="Ваш отзыв*"></textarea>
    </div>
    <div>
      <AddItemButton @clickEvent="addRow" :text="textButton" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AddItemButton from './ButtonTemplate.vue';

export default {
  components: {
    AddItemButton
  },
  props: ['postsList'],
  data() {
    return {
      name: '',
      description: '',
      textButton: 'Добавить комментарий'
    };
  },
  methods: {
    async addRow() {
      if (!this.name || !this.description) {
        return;
      }

      // const newRow = {
      //   name: this.name,
      //   description: this.description
      // };

      // const response = await this.axios.post('http://188.134.68.113:8080/api/posts', {
      //   name: 'Test',
      //   email: 'example@gmail.com'
      // })
      // console.log(response)
      try {
        const response = await axios.post('http://188.134.68.113:3000/api/posts', {
          name: this.name,
          description: this.description,
        });

        console.log('Успешный ответ от сервера:', response.data);
      } catch (error) {
        console.error(error);
      }
      //this.$emit('add-row', newRow);

      //this.name = '';
      this.description = '';
    },
  },
};
</script>

<style>
.guest_book {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  width: 300px;
}
</style>
