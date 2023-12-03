<script setup>
import { ref } from 'vue';

const availableJobs = [
    {
        title: 'Programmer',
        placeOfWork: 'Office',
        description: 'Develops software applications and programs.'
    },
    {
        title: 'Athlete',
        placeOfWork: 'Sports Arena',
        description: 'Engages in physical activities and sports competitions.'
    },
    {
        title: 'Cook',
        placeOfWork: 'Kitchen',
        description: 'Prepares and cooks food in various styles.'
    },
    {
        title: 'Painter',
        placeOfWork: 'Studio or on-site',
        description: 'Creates art through painting on canvas or other surfaces.'
    },
    {
        title: 'Artist',
        placeOfWork: 'Studio or exhibition space',
        description: 'Expresses creativity through various artistic mediums.'
    },
    {
        title: 'Body Builder',
        placeOfWork: 'Gym',
        description: 'Engages in strength training and bodybuilding exercises.'
    },
    {
        title: 'Model',
        placeOfWork: 'Photography Studio or Runway',
        description: 'Poses for photoshoots or walks the runway.'
    },
    {
        title: 'Powerlifter',
        placeOfWork: 'Gym',
        description: 'Competes in powerlifting competitions, focusing on strength.'
    },
    {
        title: 'Web Designer',
        placeOfWork: 'Office or Remote',
        description: 'Designs and creates user-friendly websites.'
    },
    {
        title: 'Video Game Coach',
        placeOfWork: 'Gaming Center or Online',
        description: 'Guides and coaches players to improve their gaming skills.'
    },
    {
        title: 'IT Consultant',
        placeOfWork: 'Office or Client Sites',
        description: 'Provides expert advice on information technology.'
    }
];
const yourNewJob = ref('')

function getRandomJob() {
    const maxIndex = availableJobs.length - 1
    yourNewJob.value = availableJobs[Math.round(Math.random() * maxIndex)]
}

</script>

<template>
    <form @submit.prevent="getRandomJob">
        <br>
        <button>Get random Career</button>
    </form>
    <p v-if="yourNewJob"><b>Job Title:</b> {{ yourNewJob.title }} <br> <b>Place of Work:</b> {{ yourNewJob.placeOfWork }} <br> <b>Job Description:</b> {{ yourNewJob.description }}</p>
    <p v-else>Click the button to receive your new job!</p>
</template>
  