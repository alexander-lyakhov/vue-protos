<template>
  <main>
    <list title="Simple list" :items="movies.data" :is-loading="isLoading">
      <template #default="{ item }">
        <list-item-simple :item="item" />
      </template>

      <template #list-footer>
        <list-paging v-model="pagingConfig" />
      </template>
    </list>

    <list title="Detailed list" :items="movies.data" :is-loading="isLoading">
      <template #default="{ item }">
        <list-item-detailed :item="item" />
      </template>

      <template #list-footer>
        <list-paging v-model="pagingConfig" />
      </template>
    </list>
  </main>
</template>

<script>

import list from '../components/list.vue'
import listItemSimple from '../components/list-item-simple.vue'
import listItemDetailed from '../components/list-item-detailed.vue'
import listPaging from '../components/list-paging.vue'

export default {
  name: 'ex1',

  components: {
    list,
    listItemSimple,
    listItemDetailed,
    listPaging
  },

  data() {
    return {
      movies: {},
      isLoading: false,
      pagingConfig: {
        offset: 0,
        size: 12,
        total: 0
      }
    }
  },

  mounted() {
    this.$watch('pagingConfig', () => this.getData(), {
      deep: true,
      immediate: true
    })
  },

  computed: {
    url() {
      return `http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=${this.pagingConfig.offset}&limit=${this.pagingConfig.size}`
    }
  },

  methods: {
    async getData() {
      this.isLoading = true
      this.movies = await fetch(this.url).then(res => res.json())
      this.pagingConfig.total = this.movies.total
      this.isLoading = false

      console.log(this.movies)
    },
  },
}
</script>