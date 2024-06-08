<template>
    <div>
        <write-post @create="createPost"></write-post>
    </div>
</template>
<script>
import WritePost from '@/components/WritePost.vue';
export default {
    name: "CreateNewPost",
    components:{
        WritePost
    },
    methods: {
    createPost(post) {
      post.id = Date.now()
      this.posts.push(post)
    }
  }
}
</script>
<style scoped lang="scss">
    
</style>