<template>
  <div class="page">
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
import home from './views/home.vue'

export default {
  name: 'app',

  components: {
    headerNav,
    home,
    ex1: () => import('./views/ex1.vue'),
    ex2: () => import('./views/ex2.vue'),
    ex3: () => import('./views/ex3.vue'),
  },

  data: () => ({
    pages: pages,
    selectedPage: pages[2]
  })
}
</script>