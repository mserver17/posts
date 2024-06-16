<template>
    <div class="conteiner__auth">
      <div class="login-card">
      <h2>Login</h2>
      <h3>Введите свои учетные данные</h3>
      <form class="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <a href="https://website.com">Забыли пароль?</a>
        <button type="submit">Login</button>
      </form>
    </div>

    
</div>
</template>
<script>

</script>
<style scoped lang="scss">
@keyframes rotate {
  100% {
    background-position: 15% 50%;
  }
}
.conteiner__auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимает всю высоту экрана */
  background-color: #ffffff; /* Фоновый цвет для наглядности */
}

.login-card {
  position: relative;
  z-index: 3;
  width: 50%;
  margin: 0 20px;
  padding: 70px 30px 44px;
  border-radius: 20px;
  background: rgba(110, 80, 231, 0.82);
  backdrop-filter: blur(10px);
  text-align: center;

  h2 {
  color: #fdfcff;
  font-size: 36px;
  font-weight: 400;
  margin: 0 0 12px;
  }

  h3 {
    color: #f6f3fc;
    margin: 0 0 48px;
    font-weight: 400;
    font-size: 16px;
  }

  .login-form {
    width: 100%;
    margin: 0;
    display: grid;
    gap: 16px;

    input {
      color: rgb(255, 255, 255);
      background: rgb(255 255 255 / 8%);
      font-family: inherit;
      font-size: 16px;
      padding: 0 16px;

      &:focus {
        outline: var(--color-primary);
      }

      &::placeholder {
        color: rgb(255 255 255 / 38%);
        font-size: auto
      }
    }
    :is(input, button) {
      width: 100%;
      height: 56px;
      border-radius: 6px;
      border: 0;
    }
    a {
      color: #f7f3ff;
      font-size: 16px;
      text-align: left;
      text-decoration: none;
      margin-bottom: 30px;
    }
    button {
      cursor: pointer;
      width: 100%;
      height: 56px;
      padding: 0 16px;
      background: #7645f1;
      color: #f9f9f9;
      border: 0;
      font-family: inherit;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      transition: all 0.375s;
    }
  }




  @media (width >= 448px) {
  .login-card {
    margin: 0;
    width: 70%;
    min-width: 400px;
  }
}

@media (width >= 500px) {
  body {
    padding: 0;
  }
}

@media (width >= 628px) {
  .login-card {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 44px;
    width: 50%;
    max-width: 500px;
    min-width: auto;
    display: flex;
    border-radius: 0;
    flex-direction: column;
    justify-content: center;
  }
}









// .login-form > input::placeholder {
//   color: rgb(255 255 255 / 38%);
// }



// .login-form > a {
//   color: var(--color-primary);
//   font-size: 16px;
//   text-align: left;
//   text-decoration: none;
//   margin-bottom: 30px;
// }
}


</style>