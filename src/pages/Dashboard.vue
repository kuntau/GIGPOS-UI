<template>
  <div class="dashboard">
    <h1>This is dashboard</h1>
    <h2>With props {{ page }}</h2>
  </div>
</template>
<script setup lang='ts'>
defineProps<{
  page: string
}>()
</script>
