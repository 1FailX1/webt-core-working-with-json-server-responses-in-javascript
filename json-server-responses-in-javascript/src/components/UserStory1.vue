<script setup>
import { ref } from 'vue';

const sampleData = ref('')
getSampleData()

async function getSampleData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    response.json().then((data) => {
        sampleData.value = data
    })
}

</script>

<template>
    <p>{{ sampleData }}</p>
</template>
  