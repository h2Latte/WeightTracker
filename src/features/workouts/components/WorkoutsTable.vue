<template>
  <div class="table-container">
    <table>
      <tr class="table-header">
        <th>Date</th>
        <th>Type</th>
        <th :colspan="workoutsMaxLength">Exercises</th>
      </tr>
      <tr v-for="(workout, index) in workouts" :key="index">
        <td>{{ workout.date.toLocaleString('fr-FR') }}</td>
        <td>{{ workout.type.toUpperCase() }}</td>
        <td v-for="(exercise, index) in workout.exercises" :key="index">
          <ExerciseCell :exercise="exercise"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {Workout} from "@/core/model/workout-model";
import {computed, toRef} from "vue";
import type {ComputedRef} from "vue";
import ExerciseCell from './ExerciseCell.vue'

const props = defineProps<{ workouts: Workout[]}>();
const workouts = toRef(props, "workouts")


const workoutsMaxLength: ComputedRef<number> = computed(() => {
  return workouts.value.map(workout => workout.exercises.length).reduce((acc, val) => val > acc ? val : acc, 0)
})
</script>

<style scoped>
.table-container {
  flex: 1;
  overflow: auto;
  position: relative;
}

.table-header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
