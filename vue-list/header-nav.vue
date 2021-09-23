<template>
  <nav-core
    v-bind="$attrs"
    v-on="$listeners"
    v-slot="slotData"
  >
    <ul class="steps">
      <li
        v-for="(item, index) in slotData.options" :key="index"
        :class="{selected: index === slotData.selectedIndex}"
        @click="slotData.toggleSelect(index)"
      >
        {{ item.title}}
      </li>
    </ul>
  </nav-core>
</template>

<script>
import navCore from './utils/nav-core.js'

export default {
  name: 'header-nav',

  components: {
    navCore
  },
}
</script>