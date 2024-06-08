<template>
 <div class="form__container">
        <h4>Напишите пост</h4>
        <form 
          class="form"
          @submit.prevent="handleSubmit">
          <div class="parameterS">
            <div class="parameter">
              <label for="category">Категория:</label>
              <select v-model="post.category" id="category" class="form-select form-select-sm mb-3" required>
                <option value="Советы">Советы</option>
                <option value="Новости">Новости</option>
                <option value="Обзоры">Обзоры</option>
              </select>
            </div>
            <div class="parameter">
              <label for="direction">Направление:</label>
              <select v-model="post.direction" id="direction" class="form-select form-select-sm" required>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="IOS">IOS</option>
                <option value="Android">Android</option>
                <option value="Data_science">Data science</option>
                <option value="DevOps">DevOps</option>
                <option value="AI">AI</option>
                <option value="Аналитика">Аналитика</option>
                <option value="SEO">SEO-маркетинг</option>
                <option value="Общее">Общее</option>
              </select>
            </div>
            <div class="parameter">
              <label for="intended">Предназначение:</label>
              <select v-model="post.intended" id="intended" class="form-select form-select-sm" required>
                <option value="Образование">Образование</option>
                <option value="Развлечение">Развлечение</option>
                <option value="Информация">Информация</option>
                <option value="Иное">Иное</option>
              </select>
            </div>
            <div class="parameter">
              <label for="stack">Стэк:</label>
              <select v-model="post.stack" id="stack" class="form-select form-select-sm" required>
                <option value="Vue">Vue</option>
                <option value="React">React</option>
                <option value="DataBase">DataBase</option>
                <option value="Django">Django</option>
                <option value="Laravel">Laravel</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="API">API</option>
                <option value="REST">REST</option>
                <option value="Парсинг">Парсинг</option>
                <option value="иное">иное</option>
              </select>
            </div>
        </div>
            <my-input 
              v-model="post.title"
              class="form__input form-control" 
              type="text" 
              placeholder="Название"
              required >
            </my-input>
            <textarea 
              v-model="post.body"
              class="form__textarea form-control" 
              type="text" 
              placeholder="Начните писать ..."
              required ></textarea>
            <div>
              <my-button 
              style="align-self: flex-end; margin-top: 15px;"
                class="btn"
                type="submit" 
                @click="handleSubmit"
                >Создать пост
              </my-button>
            </div>
        </form>
      </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        category: '',
        direction: '',
        intended: '',
        stack: '',
        createdAt: ''
      }
    };
  },
  computed: {
    isFormValid() {
      return this.post.title && this.post.body && this.post.category && this.post.direction && this.post.intended && this.post.stack;
    }
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid) {
        const formattedDate = new Date().toLocaleString('ru-RU', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
        this.$emit('create', { ...this.post, createdAt: formattedDate });
        this.post = {
          title: '',
          body: '',
          category: '',
          direction: '',
          intended: '',
          stack:'',
          createdAt: ''
        };
      } else {
        alert('Пожалуйста, заполните все поля формы.');
      }
    }
  },
  // watch:{
  //   post:{
  //     handler(newVal){
  //     console.log(newVal);   //Для примера наблюдения, можно удалять
  //     },
  //     deep: true
  //   }
  // }
};
</script>


<style scoped lang="scss">
@use '/src/assets/variables' as *;
@use '/src/assets/mixins' as *;

.form__container{
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  h4{
    color: #7d88ff;
  }
}
.form{
  .parameterS{
    @include d-flex(space-between,none ,wrap);
    margin-top: 10px;
    padding: 15px;

    .parameter{
      width: 150px;
      font-family: "Arial", sans-serif;
      // font-weight: 400;
      // font-style: normal;
      color: map-get($colors, $key:"navBarColor");
      margin-right: 5px;

      & select{
        border: 1px solid #788cff
      }
    }
  }

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