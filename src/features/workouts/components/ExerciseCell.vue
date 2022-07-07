<template>
  <section>
    <span>{{ exercise.name }}</span>
    <div class="metadata">
      <div>{{ tempo }}</div>
      <div> {{ weightPipe }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {Exercise} from "@/core/model/workout-model";
import {computed, toRef} from "vue";
import type {ComputedRef} from "vue";

const props = defineProps<{ exercise: Exercise }>()
const exercise = toRef(props, 'exercise');
const tempo: ComputedRef<string> = computed(() => `${exercise.value.setNumber} X ${exercise.value.repNumber}`);
const weightPipe: ComputedRef<string> = computed(() => `${exercise.value.weight} kg`)
</script>

<style scoped>

</style>
