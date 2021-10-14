<template>
  <div class="page" :class="[selectedPage.value]">
    <header>
      <h1>
        <span v-if="selectedPage.value !== 'home'">{{ selectedPage.title }} </span>
        {{ selectedPage.description }}
      </h1>
      <nav class="nav">
        <header-nav v-model="selectedPageIndex" :options="pages" />
      </nav>
    </header>
    <keep-alive>
      <components :is="selectedPage.value" />
    </keep-alive>
  </div>
</template>

<script>

import './styles/index.css'
import { pages } from './defs'
import headerNav from './components/header-nav'
import dropdown from './components/dropdown.vue'
import home from './pages/home.vue'

export default {
  name: 'app',

  components: {
    headerNav,
    dropdown,
    home,
    ex1: () => import('./pages/ex1.vue'),
    ex2: () => import('./pages/ex2.vue'),
    ex3: () => import('./pages/ex3.vue'),
  },

  data: () => ({
    pages: pages,
    selectedPageIndex: 0,
  }),

  computed: {
    selectedPage() {
      return this.pages[this.selectedPageIndex] || this.pages[0]
    }
  }
}
</script>