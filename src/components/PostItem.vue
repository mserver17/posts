<template>
    <div class="post">
        <div class="post__item">
            <div class="post__item__info">
                <div class="post-num">
                    <p class="post-num__ber">{{ post.id }} </p>
                </div>
                <div class="post__title" @click="$router.push(`/posts/${post.id}`)">{{post.title}}</div>
                <div><strong>Содержание:</strong>{{post.body}}</div>
            </div>
            <div class="post__any__info">
                <p> {{ post.createdAt }}</p>
                <div class="post__btn">
                    <my-button 
                        class="delete__btn"
                        @click="$emit('remove', post)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Bin-5--Streamline-Cyber.svg" height="48" width="48">
                            <desc>Bin 5 Streamline Icon: https://streamlinehq.com</desc>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M44.4522 11.7288H3.5478L6.6156 5.593H41.3844L44.4522 11.7288Z" stroke-width="2"></path>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M39.3392 11.7288H8.6608V46.4974H39.3392V11.7288Z" stroke-width="2"></path>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M29.113 1.5026H18.887L16.8418 5.593H31.1582L29.113 1.5026Z" stroke-width="2"></path>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M20.9322 17.8644V40.3618" stroke-width="2"></path>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M27.0678 17.8644V40.3618" stroke-width="2"></path>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.7966 17.8644V40.3618" stroke-width="2"></path>
                            <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.2034 17.8644V40.3618" stroke-width="2"></path>
                        </svg>
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
        transition: 0.5s ease ;
        border-color: #a7aeff;
        box-shadow: 0 0 5px rgb(142, 104, 255);
    }
    &__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        &__info{
        margin-bottom: 5px;
        width: auto;

        .post-num{
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
        .post__title{
          display: block;
          margin-bottom: 10px;
          text-decoration: none;
          color: #194a6f;
          font: {
            family: "IBM Plex Sans", sans-serif;
            weight: 500;
            size: 20px;
          }
          &:hover {
            transition: 0.5s ease ;
            color: #ff972f;
          }
        }  

        & strong{
            margin-right: 5px;
        }
        }
        .post__btn{
            display: flex;
            width: 50px;

            .delete__btn{
                width: 50px;
                height: auto;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0.3rem;

            }
            
        }
    }
  
    .post__parametrs{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: auto;
        height: auto;
        margin-top: 20px;

        p{
            padding: 2px 8px 2px 8px;
            margin: 0;
            width: auto;
            background-color: #dce1ff;
            border: 1px solid #b9c3ff;
            border-radius: 20px;
        }
    }
}
</style> 