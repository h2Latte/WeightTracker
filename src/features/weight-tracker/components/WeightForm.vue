<template>
  <section>
    <h3>Weight at the indicated date</h3>
    <form>
      <label for="date"> Date: </label>
      <input id="date" type="date" placeholder="add a date" v-model="date"/>

      <label for="weight"> Weight: </label>
      <input id="weight" type="number" placeholder="add a weight" v-model="weight"/>
    </form>
    <button type="button" @click="onNewEntry"> validate</button>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {Ref} from "vue";
import type {WeightItem} from "@/core/model/weight-model";

let weight: Ref<number | null > = ref(null);
let date: Ref<Date | null> = ref(null)
const emit = defineEmits<{ (e: 'new-entry', value: WeightItem): void }>()

function onNewEntry() {
  if( !date.value || !weight.value) {
    alert("a input is empty")
    return;
  }
  emit('new-entry', {date: date.value, weight: weight.value});

  weight.value = null;
  date.value = null;
}
</script>

<style scoped>
section {
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  height: fit-content;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
