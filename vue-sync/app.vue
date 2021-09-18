<template>
  <div>
    <custom-button
      :label.sync="btnText"
    />
    {{ btnText }}
  </div>
</template>

<script>

import customButton from './custom-button.vue'

export default {
  name: 'app',

  components: {
    customButton
  },

  data() {
    return {
      btnText: 'Click me'
    }
  }
}
</script>

<style>

document {
  font: 16px verdana;
}

body {
  color: #e0e0e0;
  background: #404040;
  margin: 0;
  padding: 20px;
}
</style>