export default {
  name: 'selector',

  props: {
    value: {
      type: Number,
      default: -1
    },
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  created() {
    this.toggleSelect(this.value)
  },

  methods: {
    toggleSelect(selectedIndex) {
      this.selectedIndex = selectedIndex;
      this.$emit('change', this.selectedIndex)
    },
  },

  render() {
    console.log({
      selectedIndex: this.selectedIndex,
      options: this.options,
      toggleSelect: this.toggleSelect
    })

    return this.$scopedSlots.default({
      selectedIndex: this.selectedIndex,
      options: this.options,
      toggleSelect: this.toggleSelect
    })
  }
}
