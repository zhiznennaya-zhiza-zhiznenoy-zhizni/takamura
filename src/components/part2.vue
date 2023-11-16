<template>
  <div class="block">
    <img class="block__img" :src="img" alt="" />
    <p class="block__title">{{ title }}</p>
    <p class="block__description">{{ description }}</p>
    <p class="block__gramm">{{ gramm }}</p>
    <p class="block__info">{{ info }}</p>
    <p class="block__portion">{{ portion }}</p>
    <div class="roditel">
      <div class="flex">
        <p class="block__more">{{ price }}</p>
        <h1 class="block__cherta">{{ cherta }}</h1>
      </div>
      <div class="btn__roditel">
        <button @click="sub" :class="none" class="btn">-</button>

        <p class="count" :class="none">
          {{ result }}
        </p>
        <button @click="add" class="btn">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let result = ref(0);
let none = ref("none");
let have = ref("have");
interface PropType {
  img: string;
  title: string;
  description: string;
  gramm: string;
  info: any;
  portion: string;
  price: string;
  cherta: string;
  btn: string;
}

defineProps<PropType>();

function add() {
  result.value++;
  if (result.value > 0) {
    none.value = "have";
  } else if (result.value < 0) {
    none.value = "none";
  }
}
function sub() {
  if (result.value > 1) {
    have.value = "have";
    result.value--;
  } else {
    none.value = "none";
  }
}
</script>
<style scoped>
* {
  font-family: "Victor Mono";
}
.razdelitel {
  display: flex;
  justify-content: space-between;
}
.btn__roditel {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.block__portion {
  padding-bottom: 18px;
}

.flex {
  display: flex;
  align-items: center;
}
.none {
  display: none;
}
.have {
  display: block;
}
.count {
  margin: 0px 5px;
}
.block__title {
  font-weight: 1000;
  font-size: 20px;
  line-height: 28px;
  color: #1f1e23;
  padding: 30px 0 15px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.block__description {
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: #7f7f7f;
  font-family: "Victor Mono";
}
.block__portion {
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: #7f7f7f;

  font-family: "Victor Mono";
}
.block__gramm {
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: #7f7f7f;

  font-family: "Victor Mono";
}
.block__info {
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: #7f7f7f;

  font-family: "Victor Mono";
}
.block__more {
  font-weight: 1000;
  font-size: 20px;
  line-height: 25px;
  color: #1f1e23;
  letter-spacing: 0.06em;
}
.roditel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.block__cherta {
  background-color: black;
  width: 13px;
  height: 3px;
  margin-left: 5px;
}
.block__img {
  /* height: 255px; */
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
