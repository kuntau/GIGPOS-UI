<script setup lang='ts'>
import { ref } from 'vue'

const categories = [
  [ 'Favorite', 'fad fa-stars' ],
  [ 'Foods', 'fad fa-utensils' ],
  [ 'Cold drinks', 'fad fa-beer' ],
  [ 'Hot drinks', 'fad fa-coffee' ],
  [ 'Search', 'fad fa-search' ],
  [ 'Repeat', 'fad fa-cogs' ],
  [ 'Foods', 'fad fa-utensils' ],
  [ 'Cold drinks', 'fad fa-beer' ],
  [ 'Hot drinks', 'fad fa-coffee' ],
  [ 'Search', 'fad fa-search' ],
  [ 'Repeat', 'fad fa-cogs' ],
];

const tabActive = ref(1)
const wrapper = ref<HTMLDivElement|null>(null)
// const wrapper = ref<HTMLDivElement | null>(null)

const step = 200
const duration = 200
let position = 0
const tabGoLeft = () => {
  console.log('we go left!')
  scrollTo(wrapper.value as HTMLDivElement, -step, duration)
}
const tabGoRight = () => {
  console.log('we go right!')
  scrollTo(wrapper.value as HTMLDivElement, step, duration)
}
const scrollTo = (element: HTMLDivElement, step: number, duration:number) : void => {
  const scrollPos = element.scrollLeft
  position = element.scrollLeft
  console.log('lets scroll', scrollPos, position)

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

</script>

<template>
  <button class="rounded-l border-r" @click="tabGoLeft"><i class="fad fa-chevron-left"></i></button>
  <div ref="wrapper" class="whitespace-nowrap flex-auto flex overflow-x-hidden w-full">
    <a class="tab px-4 py-4 font-normal hover:bg-slate-100 border-r" href="#" :class="{ active: index === tabActive }" v-for="(category, index) in categories" :key="index">
      <i :class="category[1]"></i> {{ category[0] }}
    </a>
  </div>
  <button class="rounded-r" @click="tabGoRight"><i class="fad fa-chevron-right"></i></button>
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
}
</style>
