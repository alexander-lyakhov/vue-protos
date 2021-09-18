<template>
  <a class="btn" href="#" @click.prevent="onClick">{{ label }}</a>
</template>

<script>
export default {
  name: 'custom-button',

  props: {
    label: {
      type: String,
      default: 'Button'
    }
  },

  methods: {
    onClick() {
      this.$emit('update:label', this.label.split('').reverse().join(''))
    }
  }
}
</script>

<style scoped>

a {
  color: #000;
  text-decoration: none;
}

.btn {
  font-size: 1.125rem;
  background: #c8c4c0;
  border: 1px solid transparent;
  text-align: center;
  min-width: 80px;
  display: inline-block;
  padding: 4px 12px;
}

.btn:hover {
  color: #f0f0f0;
  background: #008080;
  border: 1px solid #f0f0f0;
}
</style>