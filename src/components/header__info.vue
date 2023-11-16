<template>
  <div class="block">
    <div class="title">
      <p class="block__title">{{ title }}</p>
      <!-- <div class="ffff"></div> -->
    </div>

    <p class="block__description">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
interface PropType {
  title: string;
  description: string;
}

defineProps<PropType>();
</script>
<style scoped>
.ffff {
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: black;
}
.block__title {
  border-bottom: 1px solid black;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #1f1e23;
  font-family: "Victor Mono";
  margin-bottom: 15px;
}
.block__description {
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
  padding: 0;
  color: #7f7f7f;
  font-family: "Victor Mono";
}
@media screen and (max-width: 320px) {
  .block__description {
    font-weight: 500;
    font-size: 15px;
    padding-left: 9px;
  }
  .title {
    padding-left: 9px;
  }
  .block__title {
    margin-bottom: 8px;
  }
}
</style>
