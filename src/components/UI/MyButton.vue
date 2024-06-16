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
  background-color: rgba(110, 80, 231, 0.961);
  color: #ffffff;
  align-self: flex-end;
  border: 1px solid #a06dff ;
  border-radius: 10px; 
  transition: transform 0.3s ease;
  margin-right: 8px;

  &:hover{
  background-color: rgba(85, 56, 205, 0.961);
  color: #ffffff;
  transform: translateY(-3px);
  }
}

</style>