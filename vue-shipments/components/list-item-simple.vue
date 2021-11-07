<template functional>
  <li
    class="list-item simple"
    :class="{'selected': props.selected}"
    :key="props.item.id"
    @click="listeners.click"
  >
    <a href="#">{{ props.item.title }}</a>
  </li>
</template>

<script>

export default {
  name: 'list-item',

  props: {
    item: {
      type: Object,
      default: () => ({})
    },

    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>