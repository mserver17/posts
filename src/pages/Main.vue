<template>
    <div class="home">
      <h1 class="h1_main-screen">Posts App</h1>
      <div class="btn">
      <my-button @click="goToComments">Перейти к постам</my-button>
    </div>
      <!-- <button >Перейти к постам</button> -->
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import MyButton from '@/components/UI/MyButton.vue'; 

const router = useRouter();
  
function goToComments() {
  router.push('/posts');
}
</script>
  
<style scoped lang="scss">
  .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-image: url('/src/assets/images/business-background.jpg'); /* Путь к вашему изображению */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Черный оверлей с прозрачностью 0.5 для теневого эффекта */
  z-index: 1;
  }

  .h1_main-screen {
  margin-bottom: 20px;
  // font-family: "Montserrat", sans-serif;
  z-index: 2;
  position: relative;
  color: antiquewhite;
  }
  .btn{
    z-index: 2;
  }
}
  // button {
  //   padding: 10px 20px;
  //   font-size: 16px;
  //   cursor: pointer;
  //   background-color: #91551f;
  //   color: white;
  //   border: none;
  //   border-radius: 5px;
  //   outline: none;
  //   transition: background-color 0.3s;
  // }
  
  // button:hover {
  //   background-color: #6a3408;
  // }

  </style>