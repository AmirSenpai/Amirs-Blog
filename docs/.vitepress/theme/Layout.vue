<template>
  <header>
    <h1>{{ title }} - Version: {{ version }}</h1>
    <!-- Other header content here -->
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup>
import { defineProps } from 'vue';

// Define props for the title and version
const props = defineProps({
  title: {
    type: String,
    default: 'AmirSenpai', // Default title, can be overridden
  },
  version: {
    type: String,
    default: 'Unknown Version', // Default version text
  }
});
</script>

<style scoped>
/* Optional custom styles */
header {
  padding: 1rem;
  background-color: #f4f4f4;
  border-bottom: 2px solid #ccc;
}
</style>
