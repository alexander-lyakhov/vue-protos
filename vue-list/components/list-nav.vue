<template>
  <div class="list-nav">
    <selector
      v-bind="$attrs"
      v-on="$listeners"
      v-slot="slotData"
    >
      <div ref="list-nav" class="list-nav__menu">
        <span
          v-for="(item, index) in slotData.options" :key="index"
          :class="{selected: index === slotData.selectedIndex}"
          @click="slotData.toggleSelect(index)"
        >
          {{ item.title }}
        </span>
      </div>
    </selector>
  </div>
</template>

<script>
import selector from '../utils/selector.js'

export default {
  name: 'list-nav',

  components: {
    selector
  },
}
</script>