<template>
  <div ref="list-nav" class="list-nav__menu">
    <span
      v-for="(item, index) in options" :key="index"
      :class="{selected: index === selectedIndex}"
      @click="toggleSelect(index)"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'list-nav',

  props: {
    item: {
      type: Object,
      default: () => ({})
    },

    options: {
      type: Array,
      default: () => ([])
    }
  },

  model: {
    prop: 'item',
    event: 'type-change'
  },

  data: () => ({
    selectedIndex: 0
  }),

  mounted() {
    const index = this.options.findIndex(el => el?.value === this.item?.value) || 0
    this.toggleSelect(index)
  },

  watch: {
    item(newVal, oldVal) {
      if (newVal.value !== oldVal.value) {
        this.checkValue()
      }
    }
  },

  methods: {
    checkValue() {
      const index = this.options.findIndex(el => el?.value === this.item?.value) || 0
      this.toggleSelect(index)
    },

    toggleSelect(selectedIndex) {
      this.selectedIndex = selectedIndex;
      this.$emit('type-change', this.options[selectedIndex])
    }
  }
}
</script>