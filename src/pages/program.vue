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
          /></router-link>
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
  <section class="info">
    <div class="container">
      <div class="info__text">
        <h1 class="info__text__title">РЕГИСТРАЦИЯ В ПРОГРАММЕ</h1>
        <p class="info__text__subtitle info__text__subtitle1">
          Для вступления в программу лояльности Takamura sushi достаточно
          оформить заказ на сайте, номер бонусной карты будет присвоен
          автоматически.
        </p>
      </div>
      <div class="info__text1">
        <h1 class="info__text__title">КАК РАБОТАЕТ ПРОГРАММА ЛОЯЛЬНОСТИ</h1>
        <p class="info__text__subtitle info__text__subtitle2">
          Для накопления и списания бонусов введите на сайте или назовите
          оператору номер мобильного телефона, к которому привязана карта.
        </p>
        <p class="info__text__subtitle pd">
          При каждой оплате покупки Вам будут начислены баллы – 5% накоплений от
          суммы заказа.
        </p>
        <p class="info__text__subtitle">
          Один балл равен одному рублю. Вы можете оплатить бонусами до 100%
          стоимости покупки.
        </p>
        <p class="info__text__subtitle">
          Баллы действительны в течение 12 месяцев с даты последней покупки.
        </p>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <ul class="footer__info">
        <li class="footer__tel dfa">
          <a href="tel:+7(499)112-38-17 dfa">+7 (499) 112-38-17</a>
        </li>
        <li class="footer__mail dfa">
          <a href="mailto:feedback@takamura-eats.ru"
            >feedback@takamura-eats.ru</a
          >
        </li>
        <li class="dfa"><a href="">сотрудничество</a></li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const callMenu = ref(false);
</script>
<style scoped>
.call-menu__logo{
  padding-bottom: 30px;
  padding-top: 30px;
}

.burger__title{
  padding-top: 20px;
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
  font-weight: 500;
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

.info {
  margin-top: 50px;
  margin-bottom: 100px;
}
.info__text1 {
  margin-top: 50px;
}

.info__text__subtitle1 {
  font-family: "Victor Mono";
}
.info__text__subtitle2 {
  font-family: "Victor Mono";
}
.pd {
  padding: 20px 0;
  font-family: "Victor Mono";
}
.info__text__title {
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  color: #1f1e23;
  margin-bottom: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: "Victor Mono";
}
.info__text__subtitle {
  font-weight: 350;
  font-size: 21px;
  line-height: 115%;
  color: #7f7f7f;
  font-family: "Victor Mono";
}
.header__burger {
  padding-top: 4px;
}
.header__burger img:hover {
  opacity: 0.6;
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

@media screen and (max-width: 425px) {

  .info__text__subtitle {
    font-weight: 400;
    font-size: 15px;
  }

  .header__call {
    display: none;
  }

  .info__text__title {
    font-weight: 400;
    font-size: 23px;
  }
  .dfa {
    text-align: center;
  }
  .dfa a {
    font-size: 18px;
    padding-bottom: 30px;
  }
}
@media screen and (max-width: 375px) {
  
}
</style>
