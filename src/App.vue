<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterView />
  <p style="margin-top: 1000px">bottom</p>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
</template>
