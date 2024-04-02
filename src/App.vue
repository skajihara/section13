<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'posts', params: { id: 'skajihara' } }">Posts</RouterLink>
  <RouterView />
</template>
