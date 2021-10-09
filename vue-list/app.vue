<template>
  <div class="page" :class="[selectedPage.value]">
    <header>
      <h1>
        <span v-if="selectedPage.value !== 'home'">{{ selectedPage.title }} </span>
        {{ selectedPage.description }}
      </h1>
      <nav>
        <header-nav v-model="selectedPage" :options="pages" />
        <dropdown />
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
    selectedPage: pages[0]
  })
}
</script>