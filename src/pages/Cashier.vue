<script setup lang='ts'>
import MenuCard from  '@/components/Cashier/MenuCard.vue';
import SalesCard from '@/components/Cashier/SalesCard.vue';

defineProps<{
  page: string
}>()
</script>

<template>
  <MenuCard :page=page />
  <SalesCard />
</template>