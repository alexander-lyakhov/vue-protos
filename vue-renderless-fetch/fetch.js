export default {
  name: 'fetch',

  props: {
    url: {
      type: String
    }
  },

  data() {
    return {
      result: null
    }
  },

  watch: {
    async url(url) {
      this.result = await fetch(url).then(res => res.text())
    }
  },

  render() {
    return this.$scopedSlots.default({
      result: this.result
    })
  }
}
