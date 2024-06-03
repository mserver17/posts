<template>
  <div class="containerList">
    <h1>Posts about IT</h1>
    <post-form @create="createPost"/>
    <post-list :posts="posts" @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'JavaScript — мультипарадигменный язык программирования.' },
        { id: 2, title: 'Python', body: 'Python — высокоуровневый язык программирования.' },
        { id: 3, title: 'GOland', body: 'GO — строго типизированный язык программирования.' },
        { id: 4, title: 'Java', body: 'Java — строго типизированный язык программирования.' },
        { id: 5, title: 'PHP', body: 'PHP — строго типизированный язык программирования.' }
      ]
    }
  },
  methods: {
    createPost(post) {
      post.id = Date.now()
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>
<style scoped lang="scss">
.containerList{
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // height: 100%;
  // width: 100%;
  padding: 20px;

  h1{
  color: #7c8fff;
  text-align: center;  
  margin-bottom: 20px;         
}
}


</style>