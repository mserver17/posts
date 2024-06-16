<template>
    <div class="write">
        <div class="write__title">
             <div class="write__title__imageOwer">
                <div class="inscriptions">
                    <h5>Вы можете тут писать интересные посты для большой аудитории</h5>
                    <p>Важно: Посты публикуются по специальному алгоритму. Не забывайте указать связанные хэштеги</p>
                </div>
            </div>
        </div>
        <div class="write__wrapper">
        <post-form ></post-form>
        </div>
    </div>
</template>
<script>
import PostForm from './PostForm.vue';
export default {
    name: "write-post",
    components:{PostForm},
 
    
}
</script>
<style scoped lang="scss">
 @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
.write{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
    width: 100%;

    &__wrapper{
        padding: 20px;
    }
    &__title{

        &__imageOwer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            height: 200px;
            width: 100%;
            background-image: url('/src/assets/images/business-background.jpg'); /* Путь к вашему изображению */
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
            overflow: hidden;
            margin-bottom: 30px;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(131, 166, 255, 0.5); /* Черный оверлей с прозрачностью 0.5 для теневого эффекта */
                z-index: 1;
                }
            .inscriptions{
                z-index: 2;
                background-color: map-get($colors, 'orange' );
                padding: 8px;
                border-radius: 40px 0px 40px ;
                width: 80%;


                & h5{
                    color: rgb(255, 255, 255);
                 }
                 & p{
                    color:antiquewhite;
                    text-align: start;
                    text-indent: -55px;
                    padding-left: 60px;
                    
                 }
     
            }
           
        }
    }
}
</style>