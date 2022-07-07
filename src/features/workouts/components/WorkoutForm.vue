<template>
  <div>
    <h3>Add a new workout</h3>
    <form>
      <fieldset>
        <legend> workout information</legend>
        <input type="date" placeholder="date of the workout" v-model="workoutFormControl.date"/>
        <select v-model="workoutFormControl.type">
          <option disabled selected :value="null">Please select one</option>
          <option value="legs">legs</option>
          <option value="pull">pull</option>
          <option value="push">push</option>
        </select>
      </fieldset>
      <fieldset v-for="(exercise, index) in exercisesFormControl.collection" :key="index">
        <legend> exercise information</legend>
        <input type="text" placeholder="exercise name" v-model="exercise.name">
        <input type="number" placeholder="number of sets" v-model="exercise.setNumber"/>
        <input type="number" placeholder="number of repetitions" v-model="exercise.repNumber"/>
        <input type="number" placeholder="weight" v-model="exercise.weight"/>
      </fieldset>
      <button type="button" @click.prevent="addAnExercise"> Add an exercise</button>
    </form>
    <button type="button" @click.prevent="validateNewWorkout" :disabled="exercisesValidator$.$invalid || workoutValidator$.$invalid"> Validate the Workout of the day !</button>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import type {Exercise, ExercisesFormControl, Workout, WorkoutFormControl} from "@/core/model/workout-model";
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";

const emits = defineEmits<{ (e: 'new-workout', value: Workout): void }>()

let workoutFormControl: WorkoutFormControl = reactive({type: null, date: null});
const workoutFormControlRules = {
  date: {required},
  type: {required},
}
const workoutValidator$ = useVuelidate(workoutFormControlRules, workoutFormControl);

let exercisesFormControl: ExercisesFormControl = reactive({collection: []});
const exercisesFormControlRules = {
  collection: {
    $each: helpers.forEach({
      name: {required},
      weight: {required},
      repNumber: {required},
      setNumber: {required}
    })
  }
}
const exercisesValidator$ = useVuelidate(exercisesFormControlRules, exercisesFormControl);


function addAnExercise() {
  exercisesFormControl.collection.push({weight: null, repNumber: null, setNumber: null, name: null});
}

async function validateNewWorkout() {
  if (await exercisesValidator$.value.$validate() && await workoutValidator$.value.$validate()) {
    const newWorkout: Workout = {
      ...(workoutFormControl as Omit<Workout, 'exercises'>),
      exercises: exercisesFormControl.collection as Exercise[]
    }
    emits('new-workout', newWorkout);
  }
  workoutFormControl = Object.assign(workoutFormControl,{date: null, type: null});
  exercisesFormControl.collection = []
}

</script>

<style scoped>

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  width: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

fieldset {
  margin: 0.5rem 0;
}

input {
  margin: 0.5rem;
}
</style>
