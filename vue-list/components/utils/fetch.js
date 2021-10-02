export default {
  name: 'fetch',

  props: {
    url: {
      type: String
    }
  },

  data() {
    return {
      result: {}
    }
  },

  watch: {
    url: {
      async handler(url) {
        this.result = await fetch(url).then(res => res.json())
        console.log(url, this.result)
      },
      immediate: true
    }
  },

  render() {
    return this.$scopedSlots.default({
      result: this.result
    })
  }
}
