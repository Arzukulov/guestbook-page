<template>
  <div>
    <Modal />
    <PageHeader />
    <div :class="{ 'desktop-container': !isMobile() }">
      <AddItem @add-row="addRow" />
      <ReviewsItems :postsList="postsList" />
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import AddItem from './components/AddItem.vue'
import ReviewsItems from './components/ReviewsItems.vue';
import Modal from './components/ModalWindow.vue';
import axios from 'axios';


const host = '188.134.68.113:3000';
const ws = new WebSocket('ws://'+host);
export default {
  components: { AddItem, ReviewsItems, PageHeader, Modal },
  data() {
    return {
      postsList: [],
    }
  },
  async mounted() {
    let addRow = this.addRow;
    ws.onopen = function () {
      console.log('WebSocket connected');
    };

    ws.onmessage = function (event) {
      let data = JSON.parse(event.data);
      addRow(data);
    };

    ws.onclose = function () {
      console.log('WebSocket disconnected');
    };

    ws.onerror = function (err) {
      console.error('WebSocket error:', err);
    };


    try {
      const response = await axios.get('http://'+host+'/api/posts');

      for (let i = 0; i < response.data.length; i++)
        addRow(response.data[i])
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    addRow(newRow) {
      this.postsList.push({
        id: this.postsList.length,
        name: newRow.name,
        text: newRow.description
      })
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    isTablet() {
      return /iPad|Android/i.test(navigator.userAgent) && !this.isMobile();
    }
  },
};
</script>

<style>
.desktop-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

input {
  border: 1px solid #e4e4e4;
  align-items: center;
  padding: 8px 25px;
  border-radius: 12px;
  outline: none;
  width: 100%;
  margin-bottom: 25px;
}

textarea {
  border: 1px solid #e4e4e4;
  align-items: center;
  padding: 8px 25px;
  border-radius: 12px;
  outline: none;
  width: 100%;
  resize: vertical;
}
</style>