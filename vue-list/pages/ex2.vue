<template>
  <main>
    <list :title="listTitle" :items="items" @prev-page="prev" @next-page="next">
      <template #nav>
        <list-nav v-model="selectedListType" :options="listTypes" />
      </template>
      <template #default="{ item }">
        <components :is="`list-item-${selectedListType.value}`" :item="item" />
      </template>
    </list>
  </main>
</template>

<script>

import list from '../components/list.vue'
import listNav from '../components/list-nav.vue'
import listItemSimple from '../components/list-item-simple.vue'
import { listTypes } from '../defs'

export default {
  name: 'ex2',

  components: {
    list,
    listNav,
    listItemSimple,
    listItemDetailed: () => import('../components/list-item-detailed.vue'),
    listItemCard: () => import('../components/list-item-card.vue')
  },

  data() {
    return {
      items: null,
      listTypes,
      selectedListType: listTypes[0],
      pageOffset: 0,
      pageCapacity: 12,
    }
  },

  mounted() {
    this.$watch('pageOffset', () => this.getData(), {immediate: true})
  },

  computed: {
    listTitle() {
      return `${this.selectedListType.title || listTypes[0].title}`
    },
  },

  methods: {
    async getData() {
      const res = await fetch(`http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=${this.pageOffset}&limit=${this.pageCapacity}`)
      const { data } = await res.json()

      this.items = data
      console.log(this.items)
    },

    prev() {
      console.log('page')
      if (this.pageOffset >= this.pageCapacity) {
        this.pageOffset -= this.pageCapacity
      }
    },

    next() {
      console.log('next')
      this.pageOffset += this.pageCapacity
    }
  },
}
</script>