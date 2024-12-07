<template>
  <div class="vsite">
    <!-- Header Section -->
    <header>
      <!-- Title of your site (this will be pulled from config.js) -->
      <h1>{{ $site.title }}</h1>

      <!-- Subtitle: npm version (this will be injected into the config) -->
      <p>{{ $site.subtitle }}</p>
    </header>

    <!-- Main Content Section: This is where your pages will be rendered -->
    <main>
      <slot /> <!-- This slot will render the content for each page -->
    </main>

    <!-- Optional Footer Section -->
    <footer>
      <p>© 2024 AmirSenpai - All Rights Reserved</p>
    </footer>
  </div>
</template>

<script setup>
// This section is for any Vue-specific logic or setup you may need
</script>

<style scoped>
/* You can add custom styles for your layout here */
header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
}
</style>
