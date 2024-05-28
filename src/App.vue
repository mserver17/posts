<template>
  <div id="app">
    <header>
      <h1>Posts about IT</h1>
    </header>
    <main>
      <nav>
      <router-link class="router-link" to="/">Главное</router-link>
      <router-link class="router-link" to="/about-us">О проекте</router-link>
      <router-link class="router-link" to="/posts">Страница постов</router-link>
      <router-link class="router-link" to="/settings">Настройки</router-link>
    </nav>
      <router-view :posts="posts" @create-post="createPost"></router-view>
    </main>
    <footer>
      <p>Powered by BigPost</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts:[
        { id:1, 
          title: 'JavaScript', 
          body: 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
        },
        { id:2, 
          title: 'Python', 
          body: 'Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью.'
        }, 
        { id:3, 
          title: 'GOland', 
          body: 'GO — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle).'
        },
        { id:4, 
          title: 'Java', 
          body: 'Java — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle).'
        },
        { id:4, 
          title: 'PHP', 
          body: 'PHP — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle).'
        },
      ]
      
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post);
    },
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
}

main {
  flex-grow: 1;
  padding: 30px;
}

footer {
  background-color: #282c34;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

</style>
