<template>
  <main>
    <WorkoutForm @new-workout="addNewWorkoutToTable"/>
    <WorkoutsTable :workouts="workouts"/>
  </main>

</template>

<script setup lang="ts">
import WorkoutForm from './components/WorkoutForm.vue';
import WorkoutsTable from './components/WorkoutsTable.vue';
import type {Workout} from "@/core/model/workout-model";
import {reactive} from "vue";

const workouts: Workout[] = reactive([]);

function addNewWorkoutToTable(newWorkout: Workout) {
  workouts.push(newWorkout);
}
</script>

<style scoped>
main {
  height: calc(100% - 83px);
  display: flex;
  flex-direction: column;
}
</style>
