<template>
  <div class="dropdown">
    <div class="dropdown-title noselect" @click="toggleList">
      <div class="dropdown-toggle-button">A</div>
    </div>
    <div v-show="isListVisible">
      <list :items="options">
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

  props: {
    options: {
      type: Array,
      default: () => ([])
    }
  },

  data() {
    return {
      isListVisible: true,
    }
  },

  methods: {
    toggleList() {
      this.isListVisible = !this.isListVisible
    }
  }
}
</script>