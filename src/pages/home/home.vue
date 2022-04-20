<template>
  <div @click="jump">这里是Home主页</div>
  <Button>123</Button>
</template>

<script setup lang="ts">
import apis from "./apis";
import Button from "./button.vue";

// const router = useRouter()

const jump = () => {
  apis
    .getHomeData({
      a: "ss",
      b: "cc",
    })
    .then((res) => {
      console.log(res);
    });
  // router.push({
  //   path: '/mine'
  // })
};
</script>

<style></style>
