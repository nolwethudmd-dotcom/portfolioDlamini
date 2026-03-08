

<script setup>

//Nolwethu Dlamini u24978966

import { ref, onMounted } from 'vue'

const weather = ref(null)
const loading = ref(true)

async function getWeather() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=8d0bae1603239fcd2f2d53e1a80256c7&units=metric'
    )
    if (response.ok) {
      weather.value = await response.json()
    } else {
      throw new Error('Failed to fetch')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => getWeather())
</script>

<template>
  <div class="weather-widget">
    <h3>Weather Forecast</h3>
    <div v-if="loading">Loading...</div>
    <div v-else-if="weather" class="weather-details">
      <p> Temperature: {{ weather.main.temp }}°C</p>
      <p> Humidity: {{ weather.main.humidity }}%</p>
      <p> {{ weather.weather[0].description }}</p>
    </div>
    <div v-else>Weather unavailable</div>
  </div>
</template>


<style>

  h3 {
    text-align:center;
  }
  .weather-widget {
    margin: auto;
    width: 30%;
    border: 5px solid black;
    border-radius: 8px;
    padding: 20px;
  }

  .weather-details {
    text-align: center;
  }
</style>