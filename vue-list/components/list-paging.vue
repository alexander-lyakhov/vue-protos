<template>
  <div class="list-paging">
    <div>
      <a href="#" @click.prevent="prev">Prev</a>
      <a href="#" @click.prevent="next">Next</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'list-paging',

  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },

  model: {
    value: 'value',
    event: 'change'
  },

  methods: {
    prev() {
      const {offset, size, total} = this.value

      if (offset >= size) {
        this.$emit('change', {
          offset: offset - size,
          size,
          total
        })
      }
    },

    next() {
      const {offset, size, total} = this.value

      this.$emit('change', {
        offset: offset + size,
        size,
        total
      })
    }
  }
}
</script>