<template>
  <div ref="list-nav" class="list-nav__menu">
    <span
      v-for="(item, index) in items" :key="index"
      :class="{selected: item.selected}"
      @click="toggleSelect(index)"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<script>
import listTypes from './list-types.js'

export default {
  name: 'list-nav',

  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },

  model: {
    prop: 'value',
    event: 'type-change'
  },

  data: () => ({
    items: listTypes
  }),

  mounted() {
    const index = this.items.findIndex(el => el?.type === this.value?.type) || 0
    this.toggleSelect(index)
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal.type !== oldVal.type) {
        this.checkValue()
      }
    }
  },

  methods: {
    checkValue() {
      const index = this.items.findIndex(el => el?.type === this.value?.type) || 0
      this.toggleSelect(index)
    },

    toggleSelect(selectedIndex) {
      this.items.forEach((el, index) => el.selected = index === selectedIndex)
      this.$emit('type-change', this.items[selectedIndex])
    }
  }
}
</script>