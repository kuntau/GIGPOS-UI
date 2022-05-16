<script setup lang='ts'>
import MenuCard from  '@/components/Cashier/MenuCard.vue';
import SalesCard from '@/components/Cashier/SalesCard.vue';

const CashierStyle1 = {
  display: 'grid',
  gridTemplateColumns: 'minmax(55%, 1fr) 320px',
  gridTemplateRows: '1fr',
  gap: '0px 10px',
  gridTemplateAreas: '"MenuCard SalesCard"'
}

const MenuCardStyle = {
  flex: '1',
  gridArea: 'MenuCard'
}

const SalesCardStyle = {
  // width: '300px'
  marginLeft: '10px',
  flex: '0 0 330px',
  gridArea: 'SalesCard'
}

defineProps<{
  page: string
}>()
</script>

<template>
  <div class="flex">
    <MenuCard 
      :page=page 
      :style=MenuCardStyle
    />
    <SalesCard 
      :style=SalesCardStyle
    />
  </div>
</template>
