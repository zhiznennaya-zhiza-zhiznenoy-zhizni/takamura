<template>
  <header class="header">
    <div class="container">
      <div class="header__navbar">
        <div class="header__navbar__logo">
          <img
            class="header__navbar__logo__img"
            src="https://takamura-eats.ru/custom/my/img/logo22.png"
            alt=""
          />
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
                <li class="call-menu__close">
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
  <div class="container">
    <swiper1 class="swiper"></swiper1>
  </div>
  <section class="top__menu">
    <div class="container">
      <ul class="top-menu">
        <li class="top-menu__el"><a class="asd" href="#nabors">Наборы</a></li>
        <li class="top-menu__el"><a href="#sushi">Суши</a></li>
        <li class="top-menu__el"><a href="#rolly">Роллы</a></li>
        <li class="top-menu__el">
          <a href="#nabors">Теплые роллы</a>
        </li>
        <li class="top-menu__el"><a href="#sushi">Маки</a></li>
        <li class="top-menu__el"><a href="#rolly">Салаты</a></li>
        <li class="top-menu__el"><a href="#sousi">Напитки</a></li>
        <li class="top-menu__el"><a href="#sousi">Соусы</a></li>
      </ul>
    </div>
  </section>
  <section class="components">
    <div class="container">
      <div id="nabors" class="our-jobs__box">
        <div v-for="item in part1" class="our-jobs__card">
          <part1item
            :img="item.img"
            :title="item.title"
            :description="item.descripion"
            :price="item.price"
            :cherta="item.cherta"
            :info="item.info"
            :gramm="item.gramm"
            :portion="item.portion"
          ></part1item>
        </div>
      </div>
      <div id="sushi" class="our-jobs__box">
        <div v-for="item in Items" class="our-jobs__card">
          <card
            :img="item.img"
            :title="item.title"
            :description="item.descripion"
            :price="item.price"
            :cherta="item.cherta"
            :info="item.info"
            :gramm="item.gramm"
            :portion="item.portion"
          ></card>
        </div>
      </div>
      <div id="rolly" class="our-jobs__box">
        <div v-for="item in part2" class="our-jobs__card">
          <part2item
            :img="item.img"
            :title="item.title"
            :description="item.descripion"
            :price="item.price"
            :cherta="item.cherta"
            :info="item.info"
            :gramm="item.gramm"
            :portion="item.portion"
          ></part2item>
        </div>
      </div>
      <div id="sousi" class="our-jobs__box">
        <div v-for="item in part3" class="our-jobs__card">
          <part3item
            :img="item.img"
            :title="item.title"
            :gramm="item.gramm"
            :price="item.price"
            :cherta="item.cherta"
          ></part3item>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <ul class="footer__info">
        <li class="footer__tel dfa">
          <a href="tel:+7(499)112-38-17">+7 (499) 112-38-17</a>
        </li>
        <li class="footer__mail dfa">
          <a href="mailto:feedback@takamura-eats.ru"
            >feedback@takamura-eats.ru</a
          >
        </li>
        <li class="dfa">
          <router-link to="/cooperetion">сотрудничество</router-link>
        </li>
      </ul>
    </div>
  </footer>
  <Swiper></Swiper>
</template>
<script lang="ts" setup>
import { Items } from "../consts/index";
import card from "../components/HelloWorld.vue";
import { part1 } from "../consts/part1";
import part1item from "../components/part1.vue";
import { part2 } from "../consts/part2";
import part2item from "../components/part2.vue";
import { part3 } from "../consts/part3";
import part3item from "../components/part3.vue";
import swiper1 from "../components/swiper1.vue";
import { ref } from "vue";
let none = ref("none");

let have = ref("have");
let result = ref(0);

const callMenu = ref(false);

function add() {
  result.value++;
  if (result.value > 0) {
    none.value = "have";
  } else if (result.value < 1) {
    none.value = "none";
  }
}
function sub() {
  result.value--;
  if (result.value > 0) {
    have.value = "have";
  } else {
    none.value = "none";
    result.value--;
  }
}
</script>
<style scoped>
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
