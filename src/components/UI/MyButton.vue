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

<style scoped>
.btn{
  padding: 10px;
  background-color: #1b4f75;
  color: #fff;
  align-self: flex-end;
  border: 2px solid #286d9e ;
  border-radius: 10px; 
  transition: transform 0.3s ease;
}
.btn:hover{
  background-color: #0a2e48;
  transform: translateY(-3px);


}
</style>