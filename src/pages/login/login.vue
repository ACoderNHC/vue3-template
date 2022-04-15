<template>
  <div class="top">
    这是登录页
  </div>
  <button @click="test">
    测试
  </button>
</template>
  
<script setup lang='ts'>
import { useStore } from 'vuex'
import homeTypes from '@/store/module/home/mutation-types'
  
const s = useStore()

const test = () => {
  s.dispatch(homeTypes.HOME_NAME, 'cc').then(()=>{
    console.log(333,s.state.homeData.name)
  })

}
</script>
  
<style lang="scss" scoped>
  .top {
    display: flex;
    width: 750px;
    background: yellow;
  }
</style>