<script setup lang="ts">
import { RouterLink } from 'vue-router';
//
const pages = import.meta.glob('./client/*.vue', { eager: true })
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/client\/(.*)\.vue$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  }
})
console.log("#App.vue");
//console.log(routes);
//let items = routes;
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>

<!-- 
-->