<template>
  <div class="containerList">
    <h1>Posts about IT</h1>
    <my-button @click="showDialog" class="btn__open-modal">Написать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
     <post-form @create="createPost"/>
    </my-dialog>

    <div class="filterInstuments">
      <my-input 
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
      <div class="page__wrapper">
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
      </div>
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
      post.id = Date.now()
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    } ,
    showDialog(){
      this.dialogVisible = true
    },
    changePage(pageNumber){
      this.page = pageNumber
      // this.fetchPosts()
    },
    async fetchPosts(){
      try{
        this.isPostsLoading = true;
        // setTimeout(async()=>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page: this.page,
              _limit: this.limit,

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
  },
  watch:{
    // selectedSort(newValue){
    //   this.posts.sort((post1, post2)=>{      //Это второй способ сортировки. Первый в Computed
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // },
    page(){
      this.fetchPosts()
    }

  }
}
</script>
<style scoped lang="scss">
  @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
.containerList{
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // height: 100%;
  // width: 100%;
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
  

}


</style>