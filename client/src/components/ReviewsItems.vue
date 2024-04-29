<template>
  <div>
    <div v-for="item in postsList" :key="item.id" class="container">
      <div class="name">{{ item.name }}</div>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsItems',
  props: ['postsList'],
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.name {
  display: flex;
  align-items: flex-end;
  font-weight: 600;
}

.text {
  position: relative;
  margin-left: 30px;
  padding: 23px;
  background: #efefef;
  border-radius: 20px 20px 20px 0;
  font-size: 14px;
}
</style>
