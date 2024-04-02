<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
watch(
  () => route.params.id,
  () => {
    console.log('watch')
  }
)
onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>
<template>
  <h2>Blog(id: {{ $route.params.id }})</h2>
  <h2>ver: {{ $route.params.version }}</h2>
  <RouterLink
    :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1, version: $route.params.version }
    }"
    >Next</RouterLink
  >
</template>
