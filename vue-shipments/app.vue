<template>
  <div class="page">
    <shipments v-slot="{selectParcel, selectedParcel}">
      <parcel
        v-for="(item, index) in 5"
        :key="index"
        :selectedParcel="selectedParcel"
        @select-parcel="selectParcel($event)"
      />
    </shipments>
    <!--
    <aside>
      <selector v-model="selectedIndex" v-slot="slotData">
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
    -->
  </div>
</template>

<script>

import './styles/index.css'
//import list from './components/list.vue'
//import listItemSimple from './components/list-item-simple.vue'
import shipments from './components/shipments.vue'
import parcel from './components/parcel.vue'
//import selector from './components/utils/selector.js'

export default {
  name: 'app',

  components: {
    shipments,
    parcel,
    //list,
    //listItemSimple,
    //selector
  },

  data() {
    return {
      selectedIndex: -1,
      items: [
        {value: 1, title: 'stadnard'},
        {value: 2, title: 'courier collection'},
        {value: 3, title: 'parcel drop off'},
        {value: 4, title: 'parcel drop off'}
      ],
    }
  },

  methods: {
    onClick(e) {
      console.log(e)
    }
  }
}
</script>