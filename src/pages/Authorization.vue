<template>
    <div class="conteiner__auth">
    <div class="input-group 1">
    <div class="input-group-prepend">
        <span class="input-group-text" id="first-name-label">First name</span>
    </div>
    <input type="text" id="first-name" name="first-name" class="form-control">
    </div>

    <div class="input-group 1">
    <div class="input-group-prepend">
        <span class="input-group-text" id="last-name-label">Last name</span>
    </div>
    <input type="text" id="last-name" name="last-name" class="form-control">
    </div>
    
    <div class="input-group 2">
    <div class="input-group-prepend">
        <span class="input-group-text" id="email-label" >Email</span>
    </div>
    <input type="email"  id="email" class="form-control">
    </div>

    
</div>
</template>
<script>

</script>
<style scoped lang="scss">
.conteiner__auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимает всю высоту экрана */
  background-color: #ffffff; /* Фоновый цвет для наглядности */
}

.input-group {
  margin-bottom: 17px;
  width: 60%;
  display: flex;
  justify-content: center;
  
  .input-group-prepend {
    margin-right: 10px;
  }

  .input-group-text {
    width: 100px; /* Заданный размер для input-group-text */
  }

  .form-control {
    flex: 1; /* Занимает оставшееся пространство */
  }
}
</style>