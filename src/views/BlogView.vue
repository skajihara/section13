<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate')
})
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave')
  return window.confirm('本当にこのページを離れますか？')
})
</script>
<template>
  <div>
    <h2>Blog(id: {{ $route.params.id }})</h2>
    <RouterLink :to="{ name: 'blog', params: { id: Number($route.params.id) + 1 } }"
      >Next</RouterLink
    >
  </div>
</template>
