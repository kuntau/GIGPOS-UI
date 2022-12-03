<script setup lang="ts">
import TopNav from './components/TopNav.vue';
import SideNav from './components/SideNav.vue';

import { useStore } from './stores/gigpos';
import { useRoute } from 'vue-router'

const route = useRoute()
const gigpos = useStore();

/* This will fix grid overflow */
/* https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items */
const fixGrid = {
  minWidth: 0,
  minHeight: 0,
}
</script>
 
<template>
  <div class="box-border lg:container lg:mx-auto wrapper">
    <SideNav :page=gigpos.pageName class="sidebar" :style="fixGrid" />
    <TopNav class="topbar" :style="fixGrid" />
    <router-view :page=route.path class="main mt-4" :style="fixGrid" />
  </div>
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
  display: grid; 
  grid-template-columns: 200px minmax(0, 1fr); 
  grid-template-rows: 64px 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "SideBar TopBar"
    "SideBar Main"; 
  min-height: 0;
  min-width: 0;
}

.sidebar {
  grid-area: SideBar;
}
.topbar {
  grid-area: TopBar;
}
.main {
  grid-area: Main;
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
