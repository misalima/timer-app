<script setup lang="ts">
import Timer from './components/Timer.vue'
import { ref } from 'vue'
</script>

<template>
  <header>
    <h1>Timer App</h1>
  </header>

  <main>
    <Timer />
  </main>
</template>

<style scoped>
header {
  text-align: center;
}

header h1 {
  font-size: 2em;
  font-weight: bold;
  color: var(--color-dark);
}

@media (min-width: 481px) {
  header h1 {
    font-size: 4em;
  }
}
</style>
