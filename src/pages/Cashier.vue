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
  // width: 'fit-content',
  width: '100%',
  flex: '1 1 auto',
}

const SalesCardStyle = {
  // width: '300px'
  marginLeft: '10px',
  flex: '0 0 330px',
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
