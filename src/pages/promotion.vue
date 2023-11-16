<template>
  <header class="header">
    <div class="container">
      <div class="header__navbar">
        <div class="header__navbar__logo">
          <router-link to="/">
            <img
              class="header__navbar__logo__img"
              src="https://takamura-eats.ru/custom/my/img/logo22.png"
              alt=""
            />
          </router-link>
        </div>
        <ul class="header__navbar__menu">
          <li class="header__call">
            <a href="tel:+7(499)112-38-17" class="header__tel"
              >+7(499)112-38-17</a
            >
          </li>
          <li class="header__info">
            <router-link to="/info">
              <img
                src="https://takamura-eats.ru/custom/my/img/info22.png"
                alt=""
              />
            </router-link>
          </li>
          <li class="header__map">
            <router-link to="/map">
              <img
                src="https://takamura-eats.ru/custom/my/img/map22.png"
                alt=""
              />
            </router-link>
          </li>
          <li class="header__burger">
            <a href="#">
              <img
                @click="callMenu = true"
                src="https://takamura-eats.ru/custom/my/img/menu22.png"
                alt=""
              />
            </a>
            <div class="call-menu" :class="{ calledMenu: callMenu }">
              <div class="razdelitel">
                <li>
                  <img
                    src="https://takamura-eats.ru/custom/my/img/close22.png"
                    @click="callMenu = false"
                    alt=""
                  />
                </li>
                <div class="roditel">
                  <li class="call-menu__logo">
                    <img
                      src="https://takamura-eats.ru/custom/my/img/logo22.png"
                      alt=""
                    />
                  </li>
                  <div class="razdelitel2">
                    <li class="burger__title">
                      <router-link to="/program"
                        >ПРОГРАММА ЛОЯЛЬНОСТИ</router-link
                      >
                    </li>
                    <li class="burger__menu">
                      <router-link to="/promotion">АКЦИИ</router-link>
                    </li>
                    <li class="burger_sell">МЕНЮ</li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a class="asd" href="#nabors">Наборы</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#sushi">Суши</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#rolly">Роллы</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#nabors">Теплые роллы</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#sushi">Маки</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#rolly">Салаты</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#sousi">Напитки</a>
                    </li>
                    <li @click="callMenu = false" class="burger__menu">
                      <a href="#sousi">Соусы</a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <section class="promotion__info">
    <div class="container">
      <div class="promotion-flex">
        <img
            class="promotion__img"
          src="https://takamura-eats.ru/userfls/editor/medium/skidka_v_dr.png"
          alt=""
        />
        <h3 class="promotion-flex__title">СКИДКА 15% В ДЕНЬ РОЖДЕНИЯ!</h3>
        <p class="promotion-flex__subtitle">01.06.2018 - 01.06.2023</p>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <ul class="footer__info">
        <li class="footer__tel">
          <a href="tel:+7(499)112-38-17">+7 (499) 112-38-17</a>
        </li>
        <li class="footer__mail">
          <a href="mailto:feedback@takamura-eats.ru"
            >feedback@takamura-eats.ru</a
          >
        </li>
        <li><a href="">сотрудничество</a></li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const callMenu = ref(false);
</script>
<style scoped>
.promotion-flex__title{
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #1F1E23;
  padding: 30px 0 15px;
  text-transform: uppercase;
  font-family: "Victor Mono";

}
.promotion__info {
  display: flex;
  justify-content: center;
  height: 100vh; /* Adjust the height as needed */
  padding-bottom: 30px;
}
.promotion__img{
  padding-top: 30px;
  width: 500px;
  @media screen and (max-width: 517px) {
    width: 400px;
  }
  @media screen and (max-width: 418px) {
    width: 380px;
  }
  @media screen and (max-width: 380px) {
    width: 320px;
  }
  }


.promotion-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Take full width */
}

/* ... (existing styles) ... */

@media screen and (max-width: 768px) {
  .promotion__info {
    height: auto; /* Adjust the height for smaller screens */
  }

  .container {
    padding: 0 20px; /* Adjust padding for smaller screens */
  }
}








.btn {
  font-size: 22px;
  color: #7f7f7f;
  background-color: #fff;
  border: 1px solid #7f7f7f;
  width: 34px;
  height: 34px;
  line-height: 32px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  vertical-align: middle;
  padding: 0;
}
.swiper {
  margin-top: 50px;
}
.razdelitel2 {
  padding-top: 20px;
  padding-left: 8 px;
}
body {
  background-color: white;
}
.burger_sell {
  font-weight: 500;
  font-size: 16px;
  line-height: 115%;
  color: #4a4853;
  letter-spacing: 0.04em;
  font-family: "Victor Mono";
  padding-top: 4px;
  padding-bottom: 4px;
}
.burger__title a {
  font-weight: 450;
  font-size: 16px;
  line-height: 115%;
  color: #4a4853;
  letter-spacing: 0.04em;
  font-family: "Victor Mono";
  padding-top: 4px;
  padding-bottom: 4px;
}
.burger__menu {
  padding-top: 4px;
  padding-bottom: 4px;
}
.burger__menu a {
  font-weight: 500;
  font-size: 16px;
  line-height: 115%;
  color: #4a4853;
  letter-spacing: 0.04em;
  font-family: "Victor Mono";
  padding-top: 4px;
  padding-bottom: 4px;
}
.roditel {
  margin-left: 40px;
}
.razdelitel {
  display: flex;
}
.call-menu__logo img {
  height: 60px;
  width: auto;
}
.call-menu {
  z-index: 5;
  width: 305px;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  transition: 0.7s;
  display: none;
  padding-top: 15px;
  padding-left: 15px;
  position: fixed;
}

.calledMenu {
  display: block;
}

.asd {
  font-size: 15px;
  font-family: "Victor Mono";
  line-height: 21px;
  color: #7f7f7f;
}
.top-menu__el a {
  font-size: 15px !important;
  font-family: "Victor Mono" !important;
  line-height: 21px !important;
}
.footer__tel a {
  color: #1f1e23;
}
.footer__info a {
  color: #1f1e23;
}
.footer__mail {
  color: #1f1e23;
}
.footer__tel {
  font-size: 22px;
  line-height: 31px;
  font-weight: 400;
  font-family: "Victor Mono";
}
.footer__info {
  color: #1f1e23;
  font-size: 22px;
  line-height: 31px;
  font-weight: 400;
  font-family: "Victor Mono";
}
.footer__mail {
  font-size: 22px;
  line-height: 31px;
  font-weight: 400;
  font-family: "Victor Mono";
}
.components {
  margin-top: 60px;
}
.nabors {
  margin-top: 60px;
}
.top__menu {
  margin-top: 50px;
}

.top-menu {
  cursor: pointer;
}

.top-menu:hover {
  color: red;
}

.top-menu__el a {
  font-family: "victor_monoregular";
  color: #000;
}
.top-menu__el {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 6px 22px;
  border: 1px solid #7f7f7f;
  border-radius: 10px;
  font-size: 15px;
}
.header__menu__contacts a {
  font-family: Victor Mono;
}
body {
  font-family: "Victor Mono";
}
.none {
  display: none;
}
.have {
  display: block;
}
.our-jobs__box {
  display: flex;
  flex-wrap: wrap;
  margin-left: -35px;
}
.our-jobs__card {
  width: 25%;
  padding-bottom: 50px;
  padding-left: 35px;
}
.header__burger {
  padding-top: 4px;
}

.header__call {
  padding-top: 3px;
}
.header__call a {
  font-weight: 600;
  font-size: 16px;
  color: #7f7f7f;
  font-family: "Victor Mono";
}
.header__map {
  padding-right: 25px;
}
.header__info {
  padding: 0 25px;
}
.header__tel {
  color: #7f7f7f;
  font-weight: 600;
  font-size: 16px;
  font-family: "victor_monoregular";
}

.header {
  margin-top: 15px;
}
.header__navbar__logo__img {
  width: auto;
  height: 60px;
}
.header__navbar__menu {
  display: flex;
  margin-top: 23px;
}
.header__navbar {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 1140px) {
}
@media screen and (max-width: 992px) {
  .block__img {
    height: 200px;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    text-align: center;
    background-size: cover;
    background-position: center;
  }
  .block__title {
    padding-top: 16px;
  }
  .block__description {
    padding-top: 5px;
  }
  .our-jobs__card {
    width: 33.3333%;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
  .block__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #1f1e23;
    letter-spacing: 0.06em;
  }
  .block__description {
    padding-top: 0px;
    font-weight: 500;
    font-size: 14px;
    line-height: 115%;
    color: #7f7f7f;
  }
  .our-jobs__card {
    width: 33.333333%;
  }
}
@media screen and (max-width: 576px) {
  .our-jobs__card {
    width: 50%;
  }
  .block__img {
    width: 100%;
    height: 190px;
    margin: 0 auto;
  }
  .block__title {
    padding-top: 16px;
    font-weight: 500;
  }
}
@media screen and (max-width: 425px) {
  .container {
    width: 90%;
  }
  .razdelitel {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .roditel {
    padding: 0px;
    margin: 0px;
  }
  .call-menu__close {
    margin-right: 15px;
  }
  .dfa {
    text-align: center;
    font-size: 0px;
    line-height: 25px;
  }
  .dfa a {
    font-weight: 20px;
    font-size: 20px;
  }
  .block__img {
    width: 100%;
    height: 120px;
    margin: 0 auto;
  }
  .block__title {
    padding-top: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #1f1e23;
  }
  .block__description {
    padding-top: 0px;
    font-weight: 100;
    font-size: 14px;
    line-height: 115%;
    color: #7f7f7f;
    width: 135px;
  }
  .header__call {
    display: none;
  }
  .call-menu {
    width: 100%;
  }
}
@media screen and (max-width: 375px) {
  .dfa {
    text-align: center;
    font-size: 0px;
    line-height: 25px;
  }
  .dfa a {
    font-weight: 20px;
    font-size: 20px;
  }
}

@media screen and (max-width: 320px) {
  .block__img {
    width: 100%;
    height: 140px;
    margin: 0 auto;
  }
  .block__title {
    padding-top: 16px;
    font-weight: 560;
    font-size: 12px;
    line-height: 28px;
    color: #1f1e23;
  }
  .block__description {
    width: 120px;
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 115%;
    color: #7f7f7f;
  }
  .block__info {
    font-weight: 500;
    font-size: 12px;
    line-height: 115%;
    color: #7f7f7f;

    font-family: "Victor Mono";
  }
  .header__call {
    display: none;
  }

  .footer__info a {
    font-size: 20px;
  }
  .dfa {
    text-align: center;
    font-size: 0px;
    line-height: 25px;
  }
  .dfa a {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
