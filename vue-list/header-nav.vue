<template>
  <selector
    v-bind="$attrs"
    v-on="$listeners"
    v-slot="slotData"
  >
    <ul class="steps noselect">
      <li
        v-for="(item, index) in slotData.options" :key="index"
        :class="{selected: index === slotData.selectedIndex}"
        @click="slotData.toggleSelect(index)"
      >
        {{ item.title}}
      </li>
    </ul>
  </selector>
</template>

<script>
import selector from './utils/selector.js'

export default {
  name: 'header-nav',

  components: {
    selector
  },
}
</script>