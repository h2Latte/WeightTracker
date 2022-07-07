<template>
  <table>
    <caption> Weights during time</caption>
    <tr>
      <th>Date</th>
      <th>Weight</th>
    </tr>
    <tr v-for="(item, index) in props.weightItems" :key="index">
      <td>{{ item.date.toLocaleString('fr-FR') }}</td>
      <td>{{ item.weight }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import type {WeightItem} from "@/core/model/weight-model";

const props = defineProps<{ weightItems: WeightItem[] }>();
</script>

<style scoped>
</style>
