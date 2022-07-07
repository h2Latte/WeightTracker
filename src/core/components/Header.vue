<template>
  <header>
    <div class="left">
      <img alt="Vue logo" class="logo" src="../../assets/logo.svg"/>
      <span> Weight Tracker </span>
    </div>

    <div class="links">
      <router-link :to="{name: 'weight'}">Weight</router-link>
      <router-link :to="{name: 'workouts'}">Workouts</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  z-index: 1;
}

header img {
  height: 40px;
  padding-right: 1rem;
}

header .left {
  display: flex;
  align-items: center;
}

header .links {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
