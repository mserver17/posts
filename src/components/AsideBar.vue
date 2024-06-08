<template>
    <div class="aside">
      <ul class="aside__nav">
        <li class="aside__nav__item" v-for="post in posts" :key="post.id">
          <a :href="post.link" class="aside__nav__item__link">{{ post.title }}</a>
          <p>{{ post.excerpt }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AsideBar',
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Когда это наступит? Чем грозит предстоящий релиз улучшенной версии GPT AI',
            link: '#',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur deserunt nisi omnis veniam eos ratione sapiente quod voluptates eaque itaque?'
          },
          {
            id: 2,
            title: 'Another Post Title',
            link: '#',
            excerpt: 'Short excerpt for another post. It will give a brief insight into the content.'
          },
          {
            id: 3,
            title: 'Third Post Title',
            link: '#',
            excerpt: 'Yet another brief description of the post content to attract users.'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped lang="scss">
  @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
  .aside {
    background-color: map-get($colors, "asideColor");
    flex: 1 1 300px;
    max-width: 300px; 
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    overflow: auto;
  
    &__nav {
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      height: 100%;
  
      &__item {
        width: 100%;
        background-color: #fff;
        margin-bottom: 20px;
        padding: 25px;
        border: 2px solid #9caaff;
        border-radius: 1% 13% / 1% 99%;
        box-sizing: border-box;
        overflow: hidden;
        transition: transform 0.3s ease;

        &:hover{
            transform: translateY(-3px);
        }
  
        &__link {
          display: block;
          margin-bottom: 10px;
          text-decoration: none;
          color: #095590;
  
          &:hover {
            color: #2f93ff;
          }
        }
  
        p {
          margin: 0;
          padding: 0;
          color: #333;
        }
      }
    }
  }
  </style>
  
  