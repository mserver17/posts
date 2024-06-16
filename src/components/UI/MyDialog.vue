<template>
    <div class="dialog" v-if="show === true" @click.stop="hideDialog"> 
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name:'my-dialog',
    mixins: [toggleMixin],
    mounted(){
        // console.log('dialog Mounted');
    }
    
}
</script>
<style lang="scss">
 @use '/src/assets/variables' as *;
  @use '/src/assets/mixins' as *;
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    backdrop-filter: blur(8px);
    position: fixed;
    display: flex;
    z-index: 10;

    &__content{
        margin: auto;
        background-color: map-get($colors,'asideColor');
        border-radius: 13px;
        min-height: 360px;
        min-height: 350px;
        padding: 30px;


    }
}    

</style>