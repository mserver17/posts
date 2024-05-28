<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong>{{post.title}}</div>
            <div><strong>Описание:</strong>{{post.body}}</div>
        </div>
        <div class="delete_btn">
            <my-button>Удалить</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'; 
export default{
    props:{
        post:{
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.post{
    background-color: #c4dbec;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid #164a70;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;


}
.post div{
  margin-top: 10px
}
.post div strong{
  margin-right: 5px;
}
</style> 