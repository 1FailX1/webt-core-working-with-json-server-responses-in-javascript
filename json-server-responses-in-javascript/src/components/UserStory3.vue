<script setup>
import { ref } from 'vue';

const availableJobs = ['Programmer', 'Athlete', 'Cook', 'Painter', 'Artist', 'Body Builder', 'Model', 'Powerlifter', 'Web Designer', 'Video Game Coach', 'IT Consultant']
const yourNewJob = ref('')

function getRandomJob() {
    const maxIndex = availableJobs.length-1
    yourNewJob.value = availableJobs[Math.round(Math.random()*maxIndex)]
}

</script>

<template>
    <form @submit.prevent="getRandomJob">
        <br>
        <button>Get random Career</button>
    </form>
    <p>{{ yourNewJob }}</p>
</template>
  