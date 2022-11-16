<script setup lang='ts'>
import MenuCard from  '@/components/Cashier/MenuCard.vue';
import SalesCard from '@/components/Cashier/SalesCard.vue';

const CashierStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(55%, 1fr) 400px',
  gridTemplateRows: '1fr',
  gap: '0px 10px',
  gridTemplateAreas: '"MenuCard SalesCard"'
}

const MenuCardStyle = {
  minWidth: '0',
  maxWidth: '100%',
  /* flex: '0 1 auto', */
}

const SalesCardStyle = {
  marginLeft: '10px',
  /* flex: '0 0 330px', */
}

defineProps<{
  page: string
}>()
</script>

<template>
  <div class="flex w-full" :style=CashierStyle>
    <MenuCard 
      :page=page 
      :style=MenuCardStyle
    />
    <SalesCard 
      :style=SalesCardStyle
    />
  </div>
</template>
