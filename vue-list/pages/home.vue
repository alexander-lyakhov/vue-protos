<template>
  <div class="home">
    <ul class="feature-list">
      <li>Slots: Scoped / Namded / Default</li>
      <li>Dynamic components</li>
      <li>Functional components</li>
      <li>Renderless components</li>
      <li>v-model with Components</li>
      <li>Async components</li>
    </ul>

    <dropdown />
  </div>
</template>

<script>

import dropdown from '../components/dropdown.vue'

export default {
  name: 'home',

  components: {
    dropdown
  }
}
</script>