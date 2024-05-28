<template>
 <div class="form">
        <h3>Напишите пост</h3>
        <form @submit.prevent>
          <input 
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Название">
          <textarea 
            v-model="post.body"
            class="textarea" 
            type="text" 
            placeholder="Описание"></textarea>
          <div>
            <my-button 
            style="align-self: flex-end; margin-top: 15px;"
              class="btn" 
              @click="createPost"
              >Создать пост
            </my-button>
          </div>
        </form>
      </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'; 
export default{
    data(){
       return{
        post:{
            title: '',
            body: ''
        }
       } 
    },
    methods:{
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
            }
    }
}
</script>

<style scoped>

.input, textarea{
  outline: none;
  width: 50%;
  background-color: #bfd5e4;
  color: #164a70;
  border: 1px solid #164a70;
  border-radius: 7px;
  padding: 10px 15px;
  margin-top: 15px;
}
textarea::placeholder{
    color: #022040;
} 
input::placeholder{
    color: #022040;
}
form{
  display: flex;
  flex-direction: column;
}
.form{
  margin-bottom: 40px;
  
}
</style>