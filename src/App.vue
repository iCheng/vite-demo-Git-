<template>
  <div class="container">
    <div class="head">
      <my-header></my-header>
    </div>
    <div class="content">
      <!-- <el-aside>
        <aside-nav class="aside"></aside-nav>
      </el-aside> -->
      <Index class="main"></Index>
    </div>
  </div>
</template>

<script setup lang="ts">
import myHeader from './components/myHeader.vue';
// import asideNav from './components/asideNav.vue';
// import Index from './components/index.vue';

import {onMounted, createApp } from 'vue'

onMounted(() => {
  console.log('----', myHeader, createApp(myHeader))
})

</script>

<style scoped>
html,
body{
  height: 100%;
}
.container{
  height: 100%;
  width: 100%;
}
.head{
  height: 100px;
  width: 100%;
}
.content{
  width: 100%;
  display: flex;
  /* height: calc(100% - 100px); */
  height: 800px;
}
.aside{
  height: 100%;
}
.main{
  height: 100%;
  /* width: calc(100% - 300px); */
  width: 100%;
} 
</style>

