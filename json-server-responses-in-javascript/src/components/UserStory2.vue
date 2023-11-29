<script setup>
import { ref } from 'vue';

const sampleData = ref('')
logMovies()

async function logMovies() {
    const response = await fetch('http://opendata.wifi.at/OpenJsonData.json')
    response.json().then((data) => {
        sampleData.value = data
    })
}

</script>

<template>
    <p>{{ sampleData }}</p>
</template>
  