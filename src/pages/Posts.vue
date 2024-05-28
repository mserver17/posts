<template>
  <div class="container">
    <post-form @create="createPost"/>
    <PostList :posts="posts" />
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
export default{
    components:{
      PostForm, 
      PostList
    },
    props:{
        posts:{
            type: Array,
            required: true
        },
        
    },
    methods:{
      createPost(post) {
        this.posts.push(post);
    },
    }

}
</script>
<style>

</style>