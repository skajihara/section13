<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="'/?lang=ja#title'" replace>Home</RouterLink> |
  <button @click="$router.push({ path: '/about' })">About</button>
  <RouterView />
</template>
