<script setup>
import { ref } from 'vue';

const sampleData = ref('')
logMovies()

async function logMovies() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  response.json().then((data) => {
    sampleData.value = data
  })
}

</script>

<template>
  <p>{{ sampleData }}</p>
</template>
