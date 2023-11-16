<template>
  <header class="header">
    <div class="container">
      <div class="header__navbar">
        <div class="navbar__logo">
          <img
            class="navbar__logo__img"
            src="https://takamura-eats.ru/custom/my/img/logo22.png"
            alt=""
          />
        </div>
        <div class="navbar__btn">
          <router-link to="/">
            <img
              src="https://takamura-eats.ru/custom/my/img/close22.png"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <section class="info">
    <div class="container">
      <h1 class="info__title">ИНФОРМАЦИЯ О ДОСТАВКЕ</h1>
      <p class="info__subtitle">Мы принимаем заказы с 10.00 до 22.30</p>
      <p class="info__description">Доставляем заказы с 11.00 до 23.20</p>
    </div>
  </section>
  <section class="components">
    <div class="container">
      <div class="components__title">Доставка осуществляется по зонам:</div>
      <div class="component__box">
        <div v-for="item in items" class="component__card">
          <Items :title="item.title" :description="item.description"></Items>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer__btn">
        <router-link to="/map" class="footer__btn__txt"
          >Посмотреть на карте</router-link
        >
      </div>
      <div class="footer__tel">
        <a href="tel:+7(499)112-38-17">+7 (499) 112-38-17</a>
      </div>
      <div class="footer__gmail">
        <a href="mailto:feedback@takamura-eats.ru">feedback@takamura-eats.ru</a>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { items } from "../consts/header__info";
import Items from "../components/header__info.vue";
</script>
<style scoped>
.components {
  padding-left: 18px;
  padding-right: 10px;
}
.header {
  padding-left: 18px;
  padding-right: 10px;
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
.footer__btn {
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
.footer__btn__txt {
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  color: #000000;
  font-family: "Victor Mono";
}
.component__card {
  width: 33.3333%;
  padding-right: 15px;
  padding-bottom: 15px;
}
.component__box {
  display: flex;
  flex-wrap: wrap;
}
.components__title {
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  color: #000000;
  font-family: "Victor Mono";
  padding-top: 40px;
  padding-bottom: 20px;
}
.info {
  padding-top: 50px;
}
.info__title {
  font-weight: 500;
  font-size: 25px;
  line-height: 35px;
  margin-bottom: 10px;
  color: #1f1e23;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Victor Mono";
}
.info__subtitle {
  text-align: center;
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
.navbar__logo__img {
  height: 60px;
  width: auto;
}
.header__navbar {
  display: flex;
  justify-content: space-between;
}
.header {
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .component__card {
    width: 50%;
  }
  .info__title {
    font-weight: 400;
    font-size: 25px;
  }
}

@media screen and (max-width: 425px) {
  .component__card {
    width: 100%;
  }

  .info__subtitle {
    font-weight: 420;
    font-size: 16px;
  }
  .info__description {
    font-weight: 420;
    font-size: 16px;
  }
}
@media screen and (max-width: 320px) {
  .header {
    padding-left: 25px;
  }

  .components__title {
    padding-left: 9px;
  }
  .info__title {
    display: flex;
    justify-content: flex-start;
    padding-left: 18px;
    font-weight: 400;
    font-size: 23px;
    padding-left: 25px;
  }
  .info__subtitle {
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    padding-left: 25px;
  }
  .info__description {
    padding-left: 25px;
    font-weight: 400;
    text-align: left;
    font-size: 17px;
  }
  .navbar__logo__img {
    width: 30px;
    height: 100%;
  }
  .footer__tel a {
    font-size: 17px;
    padding-left: 25px;
    font-weight: 430;
  }
  .footer__gmail a {
    font-size: 17px;
    padding-left: 25px;
    font-weight: 430;
  }
  .footer__btn {
    margin-bottom: 25px;
  }
}
</style>
