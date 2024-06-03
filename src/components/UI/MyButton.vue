<template>
    <button class="btn">
     <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped lang="scss">
.btn{
  padding: 10px;
  background-color: #788cff;
  color: #ffffff;
  align-self: flex-end;
  border: 2px solid #9caaff ;
  border-radius: 10px; 
  transition: transform 0.3s ease;

  &:hover{
  background-color: #6179ff;
  color: #ffffff;
  transform: translateY(-3px);
  }
}

</style>