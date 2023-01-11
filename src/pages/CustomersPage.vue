<script setup lang='ts'>

defineProps<{
  page: string,
}>()
</script>

<template>
  <div class="customers">
    <h1>This is <strong>{{ page }}</strong> page.</h1>
  </div>
</template>
