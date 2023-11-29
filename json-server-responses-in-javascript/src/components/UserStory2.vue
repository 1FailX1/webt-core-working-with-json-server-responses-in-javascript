<script setup>
import { ref } from 'vue';

const sampleData = ref('')
/*getInput()

async function getInput() {
    const response = await fetch('http://opendata.wifi.at/OpenJsonData.json')
    response.json().then((data) => {
        sampleData.value = data
    })
}*/

//START

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Specify the URL to fetch data from
var url = "/api/OpenJsonData.json";

// Configure it to make a GET request
xhr.open("GET", url, true);

// Set up a callback function to handle the response
xhr.onreadystatechange = function () {
  // Check if the request is complete
  if (xhr.readyState == 4) {
    // Check if the request was successful
    if (xhr.status == 200) {
      // Parse the JSON response
      var jsonResponse = JSON.parse(xhr.responseText);

      // Log the JSON data to the console
      console.log(jsonResponse);
    } else {
      // Log an error message if the request was not successful
      console.error("Failed to fetch data. Status code: " + xhr.status);
    }
  }
};

// Send the request
xhr.send();


//END

</script>

<template>
    <p>{{ sampleData }}</p>
</template>
  