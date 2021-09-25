<template>
  <main>
    <fetch :url="url" v-slot="{result}">
      <list :title="listTitle" :items="result.data">
        <template #nav>
          <list-nav v-model="selectedListType" :options="listTypes" />
        </template>
        <template #default="{ item }">
          <components :is="`list-item-${selectedListType.value}`" :item="item" />
        </template>
      </list>
    </fetch>
  </main>
</template>

<script>

import fetch from '../utils/fetch.js'
import list from '../list.vue'
import listNav from '../list-nav.vue'
import listItemSimple from '../list-item-simple.vue'
import { listTypes } from '../defs'

export default {
  name: 'ex3',

  components: {
    fetch,
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

  computed: {
    listTitle() {
      return `${this.selectedListType.title || listTypes[0].title}`
    },

    url() {
      return 'http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=0&limit=12'
    }
  }
}
</script>