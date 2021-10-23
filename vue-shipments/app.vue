<template>
  <div class="page">
    <aside>
      <list :items="items">
        <template #list-title>
          <div class="list-title">Delivery method</div>
        </template>
        <template #list-body="{ item }">
          <list-item-simple :item="item" />
        </template>
      </list>
    </aside>
  </div>
</template>

<script>

import './styles/index.css'
import list from './components/list.vue'
import listItemSimple from './components/list-item-simple.vue'

export default {
  name: 'app',

  components: {
    list,
    listItemSimple
  },

  data() {
    return {
      items: [
        {id: 1, title: 'stadnard'},
        {id: 2, title: 'courier collection'},
        {id: 3, title: 'parcel drop off'}
      ]
    }
  }
}
</script>