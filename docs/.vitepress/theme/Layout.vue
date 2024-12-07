<template>
  <header>
    <h1>{{ title }} - Version: {{ version }}</h1>
    <!-- Your other header content here -->
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  version: String
});
</script>
