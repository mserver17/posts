<template>
    <div class="home">
      <div class="image__container">
        <div class="image__underflow">
          <h1 class="h1_main-screen">Posts App</h1>
          <div class="btn">
            <my-button @click="goToComments">Перейти к постам</my-button>
          </div>
        </div>
      </div>
      <section class="cards__wrapper">
                <figure class="card">
                    <h3 class="card__title">Card 1</h3>
                    <blockquote class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim atque, nesciunt culpa fugiat maxime non voluptatum! Nisi, ut adipisci.
                    </blockquote>
                    <figcaption class="card__captions">Munar</figcaption>
                </figure>
                <figure class="card">
                    <h3 class="card__title">Card 2</h3>
                    <blockquote class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim atque, nesciunt culpa fugiat maxime non voluptatum! Nisi, ut adipisci.
                    </blockquote>
                    <figcaption class="card__captions">Munar</figcaption>
                </figure>
                <figure class="card">
                    <h3 class="card__title">Card 3</h3>
                    <blockquote class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim atque, nesciunt culpa fugiat maxime non voluptatum! Nisi, ut adipisci.
                    </blockquote>
                    <figcaption class="card__captions">Munar</figcaption>
                </figure>
                <figure class="card">
                    <h3 class="card__title">Card 4</h3>
                    <blockquote class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim atque, nesciunt culpa fugiat maxime non voluptatum! Nisi, ut adipisci.
                    </blockquote>
                    <figcaption class="card__captions">Munar</figcaption>
                </figure>
            </section>
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
@use '../assets/_variables' as *;
@use '../assets/_mixins' as *;


  .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: flex-start; // Ensure content starts from the top
  min-height: 100vh; // Ensure home takes full height
  width: 100%;
  overflow: auto; // Allow scrolling if content exceeds view height

  .image__container{
    width: 100%;
    height: 650px;

    .image__underflow{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-image: url('/src/assets/images/business-background.jpg'); /* Путь к вашему изображению */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
      // z-index: 1;
      }

      .h1_main-screen {
      margin-bottom: 20px;
      z-index: 2;
      position: relative;
      color: map-get($colors, 'orange');
      text-shadow: 1px 1px 0px #ffffff,
          -1px 1px 0px #ffffff,
          1px -1px 0px #ffffff,
          -1px -1px 0px #ffffff,
          1px 0px 0px #ffffff,
          -1px 0px 0px #ffffff,
          0px 1px 0px #ffffff,
          0px -1px 0px #ffffff;;
      }
      .btn{
        z-index: 2;
      }
    }
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