<template>
    <div class="post">
        <div class="post__item-info">
            <div><strong>Название:</strong>{{post.title}}</div>
            <div><strong>Описание:</strong>{{post.body}}</div>
        </div>
        <div class="post__delete_btn">
            <my-button
                @click="$emit('remove', post)">Удалить</my-button>
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
    }
}
</script>

<style scoped lang="scss">
.post{
    background-color: #eff1ff;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #b9c3ff;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);

    &__item-info{
        margin-top: 10px;

        & strong{
            margin-right: 5px;
        }
    }

}


</style> 