<template>
  <div class="dropdown">
    <div class="dropdown-title noselect" @click="toggleList">
      Theme
    </div>
    <div v-show="isListVisible">
      <list :items="theme">
        <template #default="{ item }">
          <div class="dropdown-item">{{ item.title }}</div>
        </template>
      </list>
    </div>
  </div>
</template>

<script>

import list from './list.vue'

export default {
  name: 'Dropdown',

  components: {
    list
  },

  data() {
    return {
      isListVisible: true,
      theme: [
        {title: 'FC6', val: 'fc6'},
        {title: 'Dark', val: 'dark'},
        {title: 'SD', val: 'sd'},
      ]
    }
  },

  methods: {
    toggleList() {
      this.isListVisible = !this.isListVisible
    }
  }
}
</script>