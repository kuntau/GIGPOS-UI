<script setup lang='ts'>
import MenuCard from  '@/components/Cashier/MenuCard.vue';
import SalesCard from '@/components/Cashier/SalesCard.vue';

const CashierStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(350px, 1fr) minmax(350px, 400px)',
  gridTemplateRows: '1fr',
  gap: '0px 10px',
  gridTemplateAreas: '"MenuCard SalesCard"'
}

const fixGrid = {
  minWidth: '0',
  maxWidth: '100%',
  minHeight: '0'
}

const MenuCardStyle = {
  ...fixGrid,
  gridArea: 'MenuCard'
}

const SalesCardStyle = {
  ...fixGrid,
  gridArea: 'SalesCard'
}

defineProps<{
  page: string
}>()
</script>

<template>
  <div :style=CashierStyle>
    <MenuCard 
      :page=page 
      :style=MenuCardStyle
    />
    <SalesCard 
      :style=SalesCardStyle
    />
  </div>
</template>
