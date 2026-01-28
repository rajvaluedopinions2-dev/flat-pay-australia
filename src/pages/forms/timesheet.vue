<template>
  <form @submit.prevent="submitForm">
    <h2>Timesheet Form</h2>
    <label>Employee Name</label>
    <input v-model="form.name" required />

    <label>Week Ending</label>
    <input type="date" v-model="form.weekEnding" required />

    <label>Total Hours</label>
    <input type="number" v-model="form.totalHours" required />

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  weekEnding: '',
  totalHours: 0
})

const submitForm = () => {
  console.log("Timesheet submitted:", form)
  alert('Form Submitted!')
  // TODO: Replace with API call to store on backend
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
input, button {
  margin: 10px 0;
  padding: 8px;
}
button {
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
