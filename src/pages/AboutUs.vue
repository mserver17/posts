<template>
    <!-- <div class="contr"> -->
    <div class="container__about">
        <div class="banner-list">
            <video src="/src/assets/images/banner.mp4" class="banner" autoplay loop muted ></video>
        </div>
        <h1>About Us</h1>
    <p>Welcome to our IT information platform, where you can read posts on various IT topics.</p>

    <section class="history">
      <h2>Our History</h2>
      <p>Our platform started as a small blog and has grown into a comprehensive resource for IT enthusiasts.</p>
    </section>

    <section class="team">
      <h2>Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <img src="/src/assets/images/business-background.jpg" alt="Team Member 1">
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div class="team-member">
          <img src="/src/assets/images/business-background.jpg" alt="Team Member 2">
          <h3>Jane Smith</h3>
          <p>Chief Editor</p>
        </div>
        <!-- Добавьте больше участников команды здесь -->
      </div>
    </section>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>Our mission is to provide high-quality, reliable information on various IT topics to help our readers stay informed and up-to-date.</p>
    </section>

    <section class="it-directions">
      <h2>IT Directions</h2>
      <ul>
        <li>Web Development</li>
        <li>Data Science</li>
        <li>Artificial Intelligence</li>
        <li>Cybersecurity</li>
        <li>Cloud Computing</li>
        <!-- Добавьте больше направлений здесь -->
      </ul>
    </section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <img src="/src/assets/images/business-background.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
            <img src="/src/assets/images/business-background.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
            <img src="/src/assets/images/business-background.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    <!-- <aside-bar></aside-bar> -->
<!-- </div> -->
</template>
  
<script>
// import AsideBar from '@/components/AsideBar.vue'
export default {
    name: 'AboutUs',
    // components:{ AsideBar}
    }
</script>
  
<style scoped lang="scss">
// .contr{
//     display: flex;

    .container__about{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;

        .h1, h2 {
        text-align: center;
        margin-bottom: 20px;
        }
        .history, .team, .mission, .it-directions, .testimonials, .video-banner {
        margin-bottom: 40px;
        }
        .team-members {
        display: flex;
        justify-content: center;
        gap: 20px;
        }

        .team-member {
        text-align: center;
        }
        .team-member img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        }

        .it-directions ul {
        list-style: none;
        padding: 0;
        text-align: center;
        }

        .it-directions li {
        display: inline;
        margin: 0 10px;
        font-weight: bold;
        }

        .banner-list{
            width: 100%;
            height: auto;
            max-width: 800px;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;

            .banner{
                width:95%;
                height: auto;
                display: block;
                object-fit: cover;
            }
        }
        .carousel{
            width: 95%;
            padding-top: 20px;

            .carousel-item {
                height: 300px; 

                .carousel-item img {
                object-fit: cover; 
                height: 100%;
                }
            }
        }
    }
//     aside-bar{

//     }
// }
  </style>
  