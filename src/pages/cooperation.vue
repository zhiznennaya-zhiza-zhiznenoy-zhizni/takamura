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
      <p class="info__title">ИП Чекмарева Зоя Васильевна</p>
      <p class="info__title">ИНН 370413639112 / ОГРН 315370400002375</p>
      <p class="info__title">
        По вопросам сотрудничества, пожалуйста, пишите на почту
        feedback@takamura-eats.ru
      </p>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer__tel">
        <a href="tel:+7(499)112-38-17">+7 (499) 112-38-17</a>
      </div>
      <div class="footer__gmail">
        <a href="mailto:feedback@takamura-eats.ru">feedback@takamura-eats.ru</a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const callMenu = ref(false);
</script>
<style scoped>
.header {
  margin-bottom: 50px;
}
.footer {
  margin-top: 500px;
}
.info__title {
  font-weight: 500;
  font-size: 18px;
  line-height: 115%;
  color: #000;
  letter-spacing: 0.04em;
  font-family: "Victor Mono";
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

.footer__tel a {
  display: block;
  margin: 0 auto;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  color: #1f1e23;
  font-family: "Victor Mono";
}
.footer__gmail a {
  display: block;
  font-family: "Victor Mono";
  margin: 0 auto;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  color: #1f1e23;
  padding-bottom: 30px;
}
.map__btn {
  border-radius: 15px;
  border: 1px solid #000000;
  max-width: 90%;
  width: 240px;
  margin: 30px auto 50px auto;
  display: block;
  background-color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.map__btn__txt {
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  color: #000000;
  font-family: "Victor Mono";
  border-radius: 15px;
}

.info__subtitle {
  text-align: center;
  padding-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  color: #000;
  font-family: "Victor Mono";
}
.info__description {
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  color: #000;
  font-family: "Victor Mono";
}
.header {
  margin-top: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
}
.header__btn img {
  max-width: 100%;
  height: auto;
}
.header__img img {
  height: 60px;
  width: auto;
}
.header__burger {
  padding-top: 4px;
}
.header__burger img {
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
.header__burger {
  padding-top: 4px;
}
.header__burger img {
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
@media screen and (max-width: 425px) {
  .header__tel {
    display: none;
  }
}
</style>
