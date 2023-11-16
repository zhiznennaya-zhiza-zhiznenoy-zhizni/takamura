<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="carousel">
      <div class="carousel__baner">
        <img
          class="df"
          src="https://takamura-eats.ru/userfls/bs/3_41.jpg"
          alt=""
        />
      </div>
      <div class="carousel__txt">
        <h1 class="carouseltxttitle">РОЛЛЫ TAKAMURA</h1>
        <p class="carouseltxtdescription">
          Мы выбираем качественные моропродукты, соединяем их со свежими овощами
          и добавляем немного риса
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="carousel">
      <div class="carousel__baner">
        <img
          class="df"
          src="https://takamura-eats.ru/userfls/bs/2_43.jpg"
          alt=""
        />
      </div>
      <div class="carousel__txt">
        <h1 class="carouseltxttitle">РОЛЛЫ TAKAMURA</h1>
        <p class="carouseltxtdescription">
          У нас особая любовь к авокадо, и поэтому мы заворачиваем роллы в него
          и добавляем ночинку.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="carousel">
      <div class="carousel__baner">
        <img
          class="df"
          src="https://takamura-eats.ru/userfls/bs/1_42.jpg"
          alt=""
        />
      </div>
      <div class="carousel__txt">
        <h1 class="carouseltxttitle">РОЛЛЫ TAKAMURA</h1>
        <p class="carouseltxtdescription">
          Лосось, тунец, тигровые креветки и морской гребешок в наших роллах
          приправлены исключительно натуральными соусами.
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { ref } from "vue";

const modules = ref([Navigation]);
</script>
<style>
.carouseltxtdescription2 {
  width: 100%;
}
.carousel__txt {
  width: 60%;
  margin-bottom: 60px;
  margin-left: 10px;
}
.carouseltxttitle {
  font-weight: 600;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: 0.06em;
  margin-bottom: 2px;
  font-family: "Victor Mono";
  text-align: start;
  margin-left: 30px;
}
.carouseltxtdescription {
  min-height: 100%;
  position: relative;
  font-family: "Victor Mono";
  margin-left: 30px;
  text-align: left;
  width: 100%;
}
.df {
  width: 150px;
  height: 50px;
}
.carousel {
  padding: 40px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start !important;
}
.carousel__baner {
  width: 45%;
  height: 108%;
}
.carousel img {
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
  object-position: center;
}
.swiper-button-prev {
  display: none !important;
  width: 300px;
}
.swiper-button-next:after {
  content: "Что ещё →";
  display: flex;
  color: black;
  width: 300px !important;
  margin-right: 40px;
  font-size: 12px;
  display: flex;
  margin-top: 200px;
  margin-right: 100px;
  white-space: nowrap;
}
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}




@media screen and (max-width: 1140px) {
 
}


@media screen and (max-width: 992px) {
 
}

@media screen and (max-width: 768px) {
  .swiper-slide img {
  display: block;
  width: 115%;
  height: 85%;
  object-fit: cover;
  margin-top: 25px;
}

.carouseltxttitle{
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.06em;
  margin-bottom: 5px;
  font-family: "Victor Mono";
  text-align: start;
  margin-left: 40px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
 
}

@media screen and (max-width: 576px) {
  .carousel {
    border: 0px solid white;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding-right: 55px;
}

.carouseltxttitle{
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.06em;
  margin-bottom: 5px;
  font-family: "Victor Mono";
  text-align: start;
  margin-left: -10px;
}


.carouseltxtdescription {
  min-height: 50%;
  position: relative;
  font-family: "Victor Mono";
  margin-left: 40px;
  text-align: left;
  width: 100%;
  margin-bottom: -40px;
  font-size: 14px;
  margin-left: -5px;
}
.swiper-slide img {
  display: block;
  width: 200%;
  height: 110%;
  object-fit: cover;
  margin-top: 2px;
  margin-left: -70px;
}
.swiper-button-next:after {
  content: "Что ещё →";
  display: flex;
  color: black;
  width: 300px !important;
  font-size: 12px;
  display: flex;
  white-space: nowrap;
  margin-left: 70px;
}
}

@media screen and (max-width: 414px) {
 
  .carousel {
    border: 0px solid white;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding-right: 55px;
}

.carouseltxttitle{
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.06em;
  margin-bottom: 5px;
  font-family: "Victor Mono";
  text-align: start;
  margin-left: -55px;
  width: 300px;
}


.carouseltxtdescription {
  min-height: 50%;
  position: relative;
  font-family: "Victor Mono";
  margin-left: 40px;
  text-align: center;
  width: 170%;
  margin-bottom: -40px;
  font-size: 14px;
  margin-left: -75px;
  width: 300px;
}
.swiper-slide img {
  display: block;
  width: 250%;
  height: 90%;
  object-fit: cover;
  margin-top: 2px;
  margin-left: -60px;
}
.swiper-button-next:after {
  content: "Что ещё →";
  display: flex;
  color: black;
  width: 300px !important;
  font-size: 12px;
  display: flex;
  white-space: nowrap;
  margin-top: 390px;
  margin-left: -135px;
}

}
@media screen and (max-width: 320px) {
  .carousel {
    border: 0px solid white;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding-right: 55px;
}

.carouseltxttitle{
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.06em;
  margin-bottom: 5px;
  font-family: "Victor Mono";
  text-align: start;
  margin-left: -55px;
  width: 300px;
}


.carouseltxtdescription {
  min-height: 50%;
  position: relative;
  font-family: "Victor Mono";
  margin-left: 40px;
  text-align: center;
  width: 170%;
  margin-bottom: -40px;
  font-size: 14px;
  margin-left: -75px;
  width: 300px;
}
.swiper-slide img {
  display: block;
  width: 250%;
  height: 90%;
  object-fit: cover;
  margin-top: 2px;
  margin-left: -60px;
}
.swiper-button-next:after {
  content: "Что ещё →";
  display: flex;
  color: black;
  width: 300px !important;
  font-size: 12px;
  display: flex;
  white-space: nowrap;
  margin-top: 390px;
  margin-left: -135px;
}

}

</style>