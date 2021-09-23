export default {
  name: 'nav-core',

  props: {
    value: {
      type: Object,
      default: () => ({})
    },

    options: {
      type: Array,
      default: () => ([])
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  data: () => ({
    selectedIndex: 0
  }),

  created() {
    this.checkValue();
  },

  methods: {
    checkValue() {
      const index = this.options.findIndex(el => el?.value === this.value?.value) || 0
      this.toggleSelect(index)
    },

    toggleSelect(selectedIndex) {
      this.selectedIndex = selectedIndex;
      this.$emit('input', this.options[selectedIndex])
    },
  },

  render() {
    return this.$scopedSlots.default({
      selectedIndex: this.selectedIndex,
      options: this.options,
      toggleSelect: this.toggleSelect
    })
  }
}
