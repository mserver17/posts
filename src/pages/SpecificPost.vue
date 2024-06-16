<template>
    <div>
      <h2>Это страница конкретного поста c ID = {{$route.params.id}}</h2>
      <div v-if="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <!-- Вы можете добавить сюда другие данные поста -->
      </div>
      <div v-else>
        <p>Загрузка поста...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: null,
      };
    },
    created() {
      this.fetchPost();
    },
    methods: {
      async fetchPost() {
        const postId = this.$route.params.id;
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
          this.post = response.data;
        } catch (e) {
          console.error(e);
          alert('Error loading post');
        }
      },
    },
  };
  </script>
<style>

</style>  