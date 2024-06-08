<template>
    <div v-show="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="post-list">
          <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id" 
            @remove="handleRemove"
            />
        </transition-group>
    </div>
    <h4 v-show="posts.length === 0" class="messageNotPosts">
      Список постов пуст
    </h4>

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
    emits: ['remove'],
    methods: {
      handleRemove(post) {
        this.$emit('remove', post);
      },
    }
}
</script>

<style scoped lang="scss">
 @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
  
  .post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.6s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.post-list-move {
  transition: transform 0.6s ease;
}
</style>