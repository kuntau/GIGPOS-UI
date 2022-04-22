<script setup lang="ts">
import TopNav from './components/TopNav.vue';
import SideNav from './components/SideNav.vue';

import { useStore } from './stores/gigpos';
import { useRoute } from 'vue-router'

const route = useRoute()

const gigpos = useStore();

</script>
 
<template>
  <SideNav :page=gigpos.pageName />
  <section class="main container box-border relative w-full">
    <TopNav />
    <div class="box-border my-10 flex">
      <router-view :page=route.path />
      <!-- <router-view :key="$route.path" v-show="showPage" @ready="pageReady" /> -->
    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

:root {
  --bg-color: #e4e8ee;
  --card-bg-color: #f7fafc;
  --main-color: #5469d4;
  --link-color: #5469d4;
  --link-hover-color: #555555;
  --bg-dark: #fff;
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: 'Open Sans', 'Helvetica Neue', Arial, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-monospace: 'Operator Mono', Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', SFMono-Regular, monospace;
  background-color: var(--bg-color);
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  min-width: 1024px;
}

.sidebar {
  width: 240px;
  z-index: 10;
}

section.main {
  padding-left: 240px;
}

/* links */
a {
  color: var(--link-color);
}
a:hover {
  color: var(--link-hover-color);
}
a.active {
  color: var(--link-color);
  font-weight: 600;
}

/* buttons */
.btn {
  transition: 0.2s ease-in;
}
</style>
