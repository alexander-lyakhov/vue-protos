<template>
  <selector
    v-bind="$attrs"
    v-on="$listeners"
    v-slot="{isSelected, toggleSelect}"
  >
    <ul class="steps noselect">
      <li
        v-for="(item, index) in options" :key="index"
        :class="{selected: isSelected(index)}"
        @click="toggleSelect(index)"
      >
        {{ item.title}}
      </li>
    </ul>
  </selector>
</template>

<script>
import selector from '../components/utils/selector.js'

export default {
  name: 'header-nav',

  components: {
    selector
  },

  props: {
    options: {
      type: Array,
      default: () => ([])
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },
}
</script>