<template>
  <div id="app">
    <header>
      <div class="contact-info">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" class="call__icon" x="0" y="0" viewBox="0 0 492.456 492.456" style="enable-background:new 0 0 512 512" xml:space="preserve"><g transform="matrix(1,0,0,1,0,0)"><path d="M13.448 208.9c-8.7-23.5-15-47.5-13.1-73 1.2-15.7 7.1-29.1 18.6-40.1 12.5-11.8 24.3-24.2 36.6-36.2 16-15.8 36.1-15.7 52.1 0 9.9 9.7 19.7 19.6 29.5 29.5 9.5 9.5 19.1 19 28.6 28.6 16.7 16.9 16.8 36.6.1 53.4-12 12-23.9 24.1-36.1 35.9-3.2 3.1-3.5 5.7-1.8 9.6 8 19.2 19.6 36.3 32.6 52.3 26.2 32.2 55.8 60.8 91.1 82.9 7.6 4.7 15.9 8.2 23.8 12.5 4.1 2.2 6.8 1.5 10.1-1.9 11.9-12.3 24.1-24.4 36.3-36.5 16-15.8 36-15.9 52 0 19.6 19.4 39.1 38.9 58.5 58.5 16.3 16.4 16.2 36.5-.2 53-11.1 11.2-22.8 21.8-33.2 33.5-15.2 17-34.4 22.6-56.2 21.4-31.8-1.7-61.1-12.3-89.4-26-62.8-30.5-116.4-72.8-161.3-126.2-33.2-39.6-60.6-82.6-78.6-131.2zm479 35.8c0-134.9-109.8-244.7-244.7-244.7v46.6c109.2 0 198.1 88.9 198.1 198.1h46.6zm-134 0h46.6c0-86.7-70.6-157.3-157.3-157.3V134c29.6 0 57.4 11.5 78.3 32.4s32.4 48.7 32.4 78.3z"  opacity="1" data-original="#000000"></path></g></svg> -->
        <video class="call__icon" preload="none" style="background: transparent  url('https://cdn-icons-png.flaticon.com/512/6172/6172514.png') 50% 50% / fit no-repeat;" autoplay="autoplay" loop="true" muted="muted" playsinline="">
        <source src="https://cdn-icons-mp4.flaticon.com/512/6172/6172514.mp4" type="video/mp4">
        </video>
        <a class="tel" href="tel:+79178149841">+7917 814 98 41</a>
        <router-link 
          class="rout_user" 
          to="/authorization"
        >
          <i class="fa-regular fa-user fa-lg"></i>
        </router-link>
      </div>
      
    </header>
    <div class="conteiner">
        <div class="nav__wrapper">
          <div class="logo__block">
            <a href="*">
              <img class="logo" src="/Logo.ico" alt="logo">
            </a>
          </div>
          <nav-bar></nav-bar>
        </div>
        <main :class="$route.name">
          <router-view></router-view>
        </main>
        <aside-bar></aside-bar>
    </div>
        <footer>
          <p>Powered by Postim</p>
        </footer>
  </div>
</template>

<script>
import AsideBar from '@/components/AsideBar.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components:{
    AsideBar, 
    NavBar
  }
}
</script>

<style lang="scss">
.contact-info{

  a{
    text-decoration: none;
    padding-top: 7px;
  }
  &.call__icon{
      width: 22px;
      height: auto;
      fill: #205279;
      background-color: aqua;
      margin-bottom: 9px;

      &:hover{
        fill: aqua;
      }
    }
}
</style>
