<template>
  <div class="page">
    <aside>
      <selector v-model="selectedIndex" :options="items" v-slot="slotData">
        <list :items="items">
          <template #list-title>
            <div class="list-title">Delivery method</div>
          </template>
          <template #list-body="{ item }">
            <list-item-simple :item="item" :selected="selectedIndex === item.index" @click="slotData.toggleSelect(item.index)" />
          </template>
        </list>
      </selector>
    </aside>
  </div>
</template>

<script>

import './styles/index.css'
import list from './components/list.vue'
import listItemSimple from './components/list-item-simple.vue'
import selector from './components/utils/selector.js'

export default {
  name: 'app',

  components: {
    list,
    listItemSimple,
    selector
  },

  data() {
    return {
      selectedIndex: 0,
      items: [
        {id: 1, title: 'stadnard'},
        {id: 2, title: 'courier collection'},
        {id: 3, title: 'parcel drop off'}
      ]
    }
  },

  methods: {
    onClick(e) {
      console.log(e)
    }
  }
}
</script>