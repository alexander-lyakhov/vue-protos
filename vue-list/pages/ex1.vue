<template>
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
</template>

<script>

import list from '../components/list.vue'
import listItemSimple from '../components/list-item-simple.vue'
import listItemDetailed from '../components/list-item-detailed.vue'

export default {
  name: 'ex1',

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