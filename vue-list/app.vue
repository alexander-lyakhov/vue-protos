<template>
  <div>
    <main>
      <list :items="movies" v-slot="{ item }">
        <list-item-simple :item="item" />
      </list>
      <list :items="movies" v-slot="{ item }">
        <list-item-detailed :item="item" />
      </list>
    </main>
  </div>
</template>

<script>

import './css/index.css'
import list from './list.vue'
import listItemSimple from './list-item-simple.vue'
import listItemDetailed from './list-item-detailed.vue'

export default {
  name: 'app',

  components: {
    list,
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