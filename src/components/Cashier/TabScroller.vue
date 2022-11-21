<script setup lang='ts'>
import { ref } from 'vue'
import { useProducts } from '../../stores/products';

interface ScrollTo {
  (element: HTMLDivElement, step: number, duration: number): void
}

type TabItem = string

const products = useProducts();
const wrapper = ref()

// Animation part
const step = 200
const duration = 200

const tabGoLeft = () => {
  scrollTo(wrapper.value, -step, duration)
}

const tabGoRight = () => {
  scrollTo(wrapper.value as HTMLDivElement, step, duration)
}

const scrollTo: ScrollTo = (element, step, duration) => {
  const scrollPos = element.scrollLeft

  // condition to check if scrolling is required
  if (!((scrollPos === 0 || step > 0)
    && (element.clientWidth + scrollPos === element.scrollWidth
    || step < 0 ))) {
    let start: number
    const scroll = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      // we * (progress/duration) to have to elastic/easy scrolling effect
      element.scrollLeft = scrollPos + step * (progress/duration)
      if (progress < duration) {
        window.requestAnimationFrame(scroll)
      }
      return
    }
    window.requestAnimationFrame(scroll)
  }
}

defineProps<{
  tabItems: TabItem[]
}>()
</script>
<template>
  <!-- <div class="flex"> -->
    <button class="rounded-l" @click="tabGoLeft"><i class="fad fa-chevron-left"></i></button>
    <button class="border-x" @click="tabGoLeft"><i class="fad fa-search"></i></button>
    <!-- <div ref="wrapper" class="flex truncate w-full"> -->
    <div ref="wrapper" class="whitespace-nowrap flex flex-shrink flex-grow overflow-x-hidden">
      <a
        class="tab px-4 py-4 font-normal hover:bg-slate-100 border-r cursor-pointer" 
        @click="products.selectTab(index)" 
        :class="{ active: index === products.tabActive }" 
        v-for="(item, index) in tabItems" :key="index"
      >
        <i :class="item.faIcon"></i> {{ item.name }}
      </a>
    </div>
    <button class="rounded-r border-l" @click="tabGoRight"><i class="fad fa-chevron-right"></i></button>
  <!-- </div> -->
</template>

<style scoped>
button {
  @apply p-4 hover:bg-slate-400 hover:text-slate-100 hover:shadow-inner;
}

a:hover {
  /* color: var(--link-hover-color); */
  color: var(--link-color);
}

a.active {
  @apply text-blue-700 bg-slate-200 shadow-inner;
  /* color: var(--link-color); */
  font-weight: 400;
}

.tab:last-child {
  /* @apply flex-1 text-green-700; */
  color: red;
  border: none;
}
</style>
