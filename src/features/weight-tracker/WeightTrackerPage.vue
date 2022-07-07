<script setup lang="ts">
import WeightDisplay from './components/WeightDisplay.vue'
import WeightForm from "./components/WeightForm.vue";
import type {WeightItem} from "@/core/model/weight-model";
import {reactive} from "vue";

const weightsRecorded: WeightItem[] = reactive([]);

function addNewEntry(newEntry: WeightItem): void {
  weightsRecorded.push(newEntry);
}
</script>

<template>
  <main>
    <WeightDisplay :weight-items="weightsRecorded"/>
    <WeightForm @new-entry="addNewEntry"/>
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex: 1;
}

main > * {
  flex: 1;
}
</style>
