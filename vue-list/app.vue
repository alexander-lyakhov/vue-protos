<template>
  <div class="page">
    <header>
      <h1>
        <span>Ex.3</span>
        Renderless components / Dynamic components / Scoped slots / functional components
      </h1>
      <ul class="steps">
        <li class="selected">Home</li>
        <li>Ex.1</li>
        <li>Ex.2</li>
        <li>Ex.3</li>
      </ul>
    </header>

    <components :is="name" />
  </div>
</template>

<script>

// import ex1 from './ex1.vue'

import './css/index.css'

export default {
  name: 'app',

  components: {
    ex1: () => import('./ex1.vue'),
    ex2: () => import('./ex2.vue'),
    ex3: () => import('./ex3.vue'),
  },

  data: () => ({
    name: 'ex3'
  })
}
</script>