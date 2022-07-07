<script setup lang="ts">
import Header from './core/components/Header.vue'
</script>

<template>
  <Header/>
  <router-view></router-view>
</template>

<style>
@import './assets/base.css';

#app {
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
