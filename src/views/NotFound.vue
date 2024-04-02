<script setup>
defineProps({
  catchAll: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="error">
    <h1>404 Not Found</h1>
  </div>
  <div>
    <p>{{ $route.params.catchAll }}</p>
    <p>{{ catchAll }}</p>
  </div>
</template>

<style>
.error {
  min-height: 10vh;
  display: flex;
  align-items: center;
}
.error h1 {
  color: red;
}
</style>
