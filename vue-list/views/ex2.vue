<template>
  <main>
    <list :title="listTitle" :items="items">
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

import list from '../list.vue'
import listNav from '../list-nav.vue'
import listItemSimple from '../list-item-simple.vue'
import { listTypes } from '../defs'

export default {
  name: 'ex2',

  components: {
    list,
    listNav,
    listItemSimple,
    listItemDetailed: () => import('../list-item-detailed.vue'),
    listItemCard: () => import('../list-item-card.vue')
  },

  data() {
    return {
      items: null,
      listTypes,
      selectedListType: listTypes[0],
    }
  },

  async mounted() {
    const res = await fetch('http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=0&limit=12')
    const { data } = await res.json()

    this.items = data
    console.log(this.items)
  },

  computed: {
    listTitle() {
      return `${this.selectedListType.title || listTypes[0].title}`
    },
  }
}
</script>