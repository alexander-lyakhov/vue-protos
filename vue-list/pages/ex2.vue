<template>
  <main>
    <list :title="listTitle" :items="dataset.data">
      <template #list-header>
        <list-nav v-model="selectedListType" :options="listTypes" />
      </template>

      <template #default="{ item }">
        <components :is="`list-item-${selectedListType.value}`" :item="item" />
      </template>

      <template #list-footer>
        <list-paging v-model="pagingConfig" />
      </template>
    </list>
  </main>
</template>

<script>

import list from '../components/list.vue'
import listNav from '../components/list-nav.vue'
import listItemSimple from '../components/list-item-simple.vue'
import listPaging from '../components/list-paging.vue'
import { listTypes } from '../defs'

export default {
  name: 'ex2',

  components: {
    list,
    listNav,
    listItemSimple,
    listItemDetailed: () => import('../components/list-item-detailed.vue'),
    listItemCard: () => import('../components/list-item-card.vue'),
    listPaging,
  },

  data() {
    return {
      dataset: {},
      listTypes,
      selectedListType: listTypes[0],
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
    listTitle() {
      return `${this.selectedListType.title || listTypes[0].title}`
    },

    url() {
      return `http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title&sortBy=title&sortOrder=asc&offset=${this.pagingConfig.offset}&limit=${this.pagingConfig.size}`
    }
  },

  methods: {
    async getData() {
      this.dataset = await fetch(this.url).then(res => res.json())
      this.pagingConfig.total = this.dataset.total

      console.log(this.dataset)
    },
  },
}
</script>