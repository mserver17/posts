<template>
 <div class="form__container">
        <h3>Напишите пост</h3>
        <form 
          class="form"
          @submit.prevent>
            <my-input 
              v-model="post.title"
              class="form__input form-control" 
              type="text" 
              placeholder="Название">
            </my-input>
            <textarea 
              v-model="post.body"
              class="form__textarea form-control" 
              type="text" 
              placeholder="Описание"></textarea>
            <div>
              <my-button 
              style="align-self: flex-end; margin-top: 15px;"
                class="btn" 
                @click="handleSubmit"
                >Создать пост
              </my-button>
            </div>
        </form>
      </div>
</template>

<script>
 
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
        handleSubmit() {
          if (this.post.title && this.post.body) {
            this.$emit('create', { ...this.post });
            this.post = {
              title: '',
              body: ''
            };
          } else {
            alert('Заполните все поля');
          }
        }
    }
}
</script>

<style scoped lang="scss">

.form__container{
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  h3{
    color: #7d88ff;
  }
}
.form{

    &__input, &__textarea{
    outline: none;
    width: 80%;
    background-color: #ffffff;
    color: #788cff;
    border: 1px solid #b9c1ff;
    border-radius: 7px;
    padding: 10px 15px;
    margin-top: 15px;
    resize:vertical;
      
      &:hover{
        border-color:#68b5ec;

      }
    }
    &__textarea::placeholder{
        color: #857bb7;
    } 
    &__input::placeholder{
        color: #857bb7;
    }
}
</style>