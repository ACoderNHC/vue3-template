<template>
  <div @click="jump">这里是Home主页</div>
</template>

<script setup lang="ts">
import apis from "./apis";

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
