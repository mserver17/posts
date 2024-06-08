<template>
    <div class="post">
        <div class="post__item">
            <div class="post__item__info">
                <div class="post-num">
                    <p class="post-num__ber">{{ post.id }}</p>
                </div>
                <a href="*"><div>{{post.title}}</div></a>
                <div><strong>Содержание:</strong>{{post.body}}</div>
            </div>
            <div class="post__any__info">
                <p> {{ post.createdAt }}</p>
                <div class="post__delete_btn">
                    <my-button
                        @click="$emit('remove', post)">Удалить
                    </my-button>
                </div>
            </div>
        </div>
        <div class="post__parametrs">
            <p> {{ post.category }}</p>
            <p> {{ post.direction }}</p>
            <p> {{ post.intended }}</p>
            <p> {{ post.stack }}</p>
            
        </div>
    </div>
</template>

<script> 
export default{
    props:{
        post:{
            type: Object,
            required: true,
        }
    },
    emits: ['remove']

}
</script>

<style scoped lang="scss">
 @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
.post{
    background-color: #eff1ff;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #b9c3ff;
    margin-top: 15px;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;

    &:hover{
        border-color: #a7aeff;
        box-shadow: 0 0 5px rgb(104, 117, 255);
    }


    &__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        &__info{
        margin-bottom: 5px;

        & .post-num{
            margin-bottom: 10px;
            padding: 1px 10px 1px 10px;
            width: 15%;

            &__ber{
                width: 30px;
                text-align: center;
                border-radius: 10px;
                border: 1px solid #ff8e03;
                background-color: map-get($colors,'orange');
            }
        }
        & a{
          display: block;
          margin-bottom: 10px;
          text-decoration: none;
          color: #194a6f;
          font: {
            family: "IBM Plex Sans", sans-serif;
            weight: 500;
            size: 20px;

          }
        //   font-family: "IBM Plex Sans", sans-serif;

  
          &:hover {
            color: #2f93ff;
          }
        }  

        & strong{
            margin-right: 5px;
        }
        }
    }
  
    .post__parametrs{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50%;
        height: auto;
        margin-top: 20px;

        p{
            padding: 2px 8px 2px 8px;
            margin: 0;
            background-color: #dce1ff;
            border: 1px solid #b9c3ff;
            border-radius: 20px;
        }

    }

}


</style> 