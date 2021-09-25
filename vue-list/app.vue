<template>
  <div class="page" :class="[selectedPage.value]">
    <header>
      <h1>
        <span v-if="selectedPage.value !== 'home'">{{ selectedPage.title }} </span>
        {{ selectedPage.description }}
      </h1>
      <header-nav v-model="selectedPage" :options="pages" />
    </header>
    <keep-alive>
      <components :is="selectedPage.value" />
    </keep-alive>
  </div>
</template>

<script>

import './styles/index.css'
import { pages } from './defs'
import headerNav from './header-nav'
import home from './pages/home.vue'

export default {
  name: 'app',

  components: {
    headerNav,
    home,
    ex1: () => import('./pages/ex1.vue'),
    ex2: () => import('./pages/ex2.vue'),
    ex3: () => import('./pages/ex3.vue'),
  },

  data: () => ({
    pages: pages,
    selectedPage: pages[2]
  })
}
</script>