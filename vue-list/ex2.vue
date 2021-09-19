<template>
  <div>
    <header>
      <h1>
        <span>Ex.2</span>
        Scoped slots / Dynamic components / functional components
      </h1>
    </header>
    <main>
      <list :title="listTitle" :items="items">
        <template #nav>
          <!--
          <list-nav @type-change="onListTypeChange"/>
          -->
          <list-nav v-model="listType" />
        </template>
        <template #default="{ item }">
          <components :is="`list-item-${listType.type}`" :item="item" />
        </template>
      </list>
    </main>
  </div>
</template>

<script>

import './css/index.css'
import list from './list.vue'
import listNav from './list-nav.vue'
import listItemSimple from './list-item-simple.vue'
import listItemDetailed from './list-item-detailed.vue'
import listTypes from './list-types.js'

export default {
  name: 'app',

  components: {
    list,
    listNav,
    listItemSimple,
    listItemDetailed
  },

  data() {
    return {
      items: null,
      options: null,
      listType: listTypes[0]
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
      return `${this.listType.title || listTypes[0].title} view`
    },
  }
}
</script>