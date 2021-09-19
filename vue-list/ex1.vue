<template>
  <div>
    <header>
      <h1>
        <span>Ex.1</span>
        Scoped slots / functional components
      </h1>
    </header>
    <main>
      <list title="Simple list" :items="movies">
        <template #default="{ item }">
          <list-item-simple :item="item" />
        </template>
      </list>

      <list title="Detailed list" :items="movies">
        <template #default="{ item }">
          <list-item-detailed :item="item" />
        </template>
      </list>
    </main>
  </div>
</template>

<script>

import './css/index.css'
import list from './list.vue'
//import listNav from './list-nav.vue'
import listItemSimple from './list-item-simple.vue'
import listItemDetailed from './list-item-detailed.vue'

export default {
  name: 'app',

  components: {
    list,
    //listNav,
    listItemSimple,
    listItemDetailed
  },

  data() {
    return {
      movies: null
    }
  },

  async mounted() {
    const res = await fetch('http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=0&limit=12')
    const { data } = await res.json()

    this.movies = data
    console.log(this.movies)
  }
}
</script>