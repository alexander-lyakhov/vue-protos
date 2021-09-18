<template>
  <main>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a href="#" @click.prevent="setURL(link)">{{link}}</a>
      </li>
    </ul>

    <fetch :url="selectedURL" v-slot={result}>
      <printer :title="selectedURL" :text="result" />
    </fetch>
  </main>
</template>

<script>
import fetch from './fetch.js'
import printer from './printer.vue'
export default {
  name: 'app',

  components: {
    fetch,
    printer
  },

  data() {
    return {
      links: [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums',
        'https://jsonplaceholder.typicode.com/todos',
        'https://jsonplaceholder.typicode.com/users',
      ],

      selectedURL: ''
    }
  },

  methods: {
    setURL(val) {
      this.selectedURL = val
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
  padding: 2rem;
}

ul {
  background: #808080;
  display: inline-block;
  margin: 0 0 2rem 0;
  padding: 4px;
}

li {
  background: #303030;
  line-height: 2.5rem;
  display: block;
  margin: 1px 0;
}

a {
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 0 .5rem;
}

a:hover {
  background: #406080;
}

</style>