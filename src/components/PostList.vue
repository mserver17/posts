<template>
    <div>
        <h3>Список постов</h3>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id" 
      @remove="handleRemove"
      />
    
    </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default{
    components:{
        PostItem
    },
    props:{
        posts:{
            type: Array,
            required: true
        }
    },
    methods: {
    handleRemove(post) {
      this.$emit('remove', post);
    }
  }
}
</script>

<style scoped lang="scss">

</style>