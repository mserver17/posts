<template>
  <div class="containerList">
    <h1>Posts about IT</h1>
    <my-button @click="showDialog" class="btn__open-modal">Написать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
     <post-form @create="createPost"/>
    </my-dialog>

    <div class="filterInstuments">
        <my-input 
          v-focus
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск постов" 
          class="search-input" 
        />
        <my-select 
          v-model="selectedSort"
          :options="sortOptions">        
        </my-select>
    </div>
    <post-list 
      :posts="sortedAndSelectedPost" 
      @remove="removePost"
      v-if="!isPostsLoading"
      />
    <div v-else>Идет загрузка постов...</div>
  
    <div v-intersection="loadMorePosts" class="observer">
      <span class="spinner-border spinner-border-md"></span> 
      <h6>Посты загружаются ... </h6>
    </div>
      <!-- <div class="page__wrapper">  // Ручная пагинация 
        <div  
          v-for="pageNumber in totalPage"
          :key="pageNumber"
          class="page"
          :class="{
            'current-page': page === pageNumber 
          }"
          @click="changePage(pageNumber)"
          >
            {{ pageNumber }}
        </div>
      </div> -->
  </div>
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios';
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      searchQuery: '',
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ],
    }
  },
  methods: {
    createPost(post) {
      const maxId = this.posts.reduce((max, post) => (post.id > max ? post.id : max), 0);
      post.id = maxId + 1;
      // post.id = Date.now()
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    } ,
    showDialog(){
      this.dialogVisible = true
    },
    // changePage(pageNumber){
    //   this.page = pageNumber  // Функция дял Ручной пагинации 
    //   // this.fetchPosts()
    // },
    async fetchPosts(){
      try{
        this.isPostsLoading = true;
        // setTimeout(async()=>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page: this.page,
              _limit: this.limit

            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit)
          this.posts = response.data;
          this.isPostsLoading = false;
        // }, 1000)
      } catch (e) {
        alert('Error')
      } 
      finally{
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts(){
      try{
        this.page +=1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page: this.page,
              _limit: 10,
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit)
          this.posts = [...this.posts, ...response.data]
          this.isPostsLoading = false;
      } catch (e) {
        alert('Error')
      }
    }
  },
  computed:{
    sortedPosts(){
      return[...this.posts].sort((post1, post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSelectedPost(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }

  },
  mounted(){
    this.fetchPosts();
    // console.log(this.$refs.observer);
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPage){
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
  },
  watch:{
    // selectedSort(newValue){
    //   this.posts.sort((post1, post2)=>{      //Это второй способ сортировки. Первый в Computed
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // },

    // page(){
    //   this.fetchPosts()
    // }

  }
}
</script>
<style scoped lang="scss">
  @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
.containerList{
  width: 100%;
  padding: 20px;

  h1{
  color: map-get($colors, "orange");
  text-align: center;  
  margin-bottom: 20px;         
  }
  .btn__open-modal{
    margin: 30px 0 30px 0;
  }
  .search-input{
    width: 300px;
    border: 1px solid #8293ff;
    margin-bottom: 10px;
  }
  .filterInstuments{
    display: flex;
    justify-content: space-around;
    margin: 10px;
    padding: 10px;
  }
  .page__wrapper{
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    
    .page{
      border: 1px solid #8293ff;
      border-radius: 10px;
      margin-right: 10px;
      padding: 15px;
      transform: translateY(5px);
      cursor: pointer;
      transition: transform 0.3s ease;
      z-index: 0;
      
      &:hover{
        background-color: map-get($colors,'orange');
        transform: translateY(-1px);
        color: white
      }
    }
    .current-page{
      border: 3px solid map-get($colors,'orange');
    }
  }
  .observer{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    padding: 10px;
    background: rgb(255, 231, 187);
    width: 30%;
    border-radius: 20px;
    margin-top: 30px;

    span{
      color: #8293ff;
    }
    
    h6{ 
    text-align: center;
    }
  }
}
</style>