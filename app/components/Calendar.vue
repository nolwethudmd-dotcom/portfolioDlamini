
<script setup>

//Nolwethu Dlamini u24978966

import { ref, onMounted } from 'vue'

const holidays = ref([])
const loading = ref(true)

async function getHolidays() {
  try {
    const response = await fetch(
      'https://holidays.abstractapi.com/v1/?api_key=d46c26c88ca944e5833cb3d5fd9f5d12&country=US&year=2026&month=12&day=25'
    )
    if (response.ok) {
      holidays.value = await response.json()
    } else {
      throw new Error('Failed to fetch')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => getHolidays())
</script>

<template>
  <div class="holiday-widget">
    <h3>Holidays</h3>
    <div v-if="loading">Loading...</div>
    <div v-else-if="holidays.length > 0">
      <div v-for="holiday in holidays" :key="holiday.name">
        <p> {{ holiday.name }}</p>
        <p> {{ holiday.location }}</p>
        <p> {{ holiday.date }}</p>
        <p> {{ holiday.type }}</p>
        <p> {{ holiday.week_day }}</p>
      </div>
    </div>
    <div v-else>No holidays found</div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
 h3 {
    font-size: 1.5rem;
    font-family: "Lexend";
 }
</style>