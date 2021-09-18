<template functional>
  <div>
    <header>{{ props.title }}</header>
    <pre>{{ props.text }}</pre>
  </div>
</template>

<script>
export default {
  name: 'printer',

  props: {
    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
header {
  font-size: 1.5rem;
}

pre {
  font: 1.25rem 'courier new';
  background: #282828;
  border: 1px solid #008080;
  line-height: 1.5rem;
  overflow: auto;
  padding: 1rem;
}

</style>