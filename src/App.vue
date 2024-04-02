<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'posts', params: { id: 'skajihara' } }">Posts</RouterLink>
  <div class="container">
    <main>
      <RouterView />
    </main>
    <RouterView name="Sidebar" />
  </div>
  <RouterView name="Footer" />
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
</style>
