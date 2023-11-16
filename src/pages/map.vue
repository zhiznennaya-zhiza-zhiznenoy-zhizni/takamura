<template>
  <div class="container">
    <div class="header">
      <div class="navbar">
        <div class="navbar__logo">
          <router-link to="/"
          ><img
              src="https://takamura-eats.ru/custom/my/img/logo22.png"
              alt=""
          /></router-link>
        </div>
        <div class="navbar__close">
          <router-link to="/">
          <img
              src="https://takamura-eats.ru/custom/my/img/close22.png"
              alt=""/>
          </router-link>

        </div>
      </div>
    </div>
    <section class="info">
      <div class="container">
        <h1 class="info__title">ИНФОРМАЦИЯ О ДОСТАВКЕ</h1>
        <p class="info__subtitle">Мы принимаем заказы с 10.00 до 22.30</p>
        <p class="info__description">Доставляем заказы с 11.00 до 23.20</p>
      </div>
    </section>
    <section class="">
      <div class="block__map">
        <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2300421.7626201552!2d71.0852738873337!3d39.98560333131973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc35b99dc9f579%3A0x4590139fc0c83acb!2z0J3QvtC-0LrQsNGC!5e0!3m2!1sru!2skg!4v1683379402356!5m2!1sru!2skg"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="map__btn">
        <router-link to="/info" class="map__btn__txt"
        >Посмотреть списком
        </router-link
        >
      </div>
    </section>
    <footer class="footer">
      <div class="footer__tel">
        <a href="tel:+7(499)112-38-17">+7 (499) 112-38-17</a>
      </div>
      <div class="footer__gmail">
        <a href="mailto:feedback@takamura-eats.ru">feedback@takamura-eats.ru</a>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const callMenu = ref(false);
</script>
<style scoped>
.navbar__logo img {
  height: 60px;
}

.map {
  height: 600px;
  width: 100%;
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
  text-align: center;
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
  text-align: center;
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

.info__title {
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  color: #1f1e23;
  font-family: "Victor Mono";
  padding-top: 30px;
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

.block__map {
  width: 100%;
  height: 600px;
  margin-top: 30px;
}

.info {
  padding-bottom: 15px;
}

@media screen and (max-width: 425px) {
  .info__title {
    text-align: start;
    font-size: 23px;
    font-weight: 400;
  }

  .info__subtitle {
    text-align: start;
    font-size: 19px;
  }

  .info__description {
    text-align: start;
    font-size: 19px;
  }
}

@media screen and (max-width: 375px) {
  .info__title {
    font-weight: normal;
  }

  .info__subtitle {
    text-align: start;
    font-size: 16px;
  }

  .info__description {
    text-align: start;
    font-size: 16px;
  }
}

@media screen and (max-width: 320px) {
  .info__title {
    font-weight: 400;
  }
}
</style>
