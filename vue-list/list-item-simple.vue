<template>
  <li class="list-item simple" :key="item.id">
    <a href="#">{{ item.title }}</a>
  </li>
</template>

<script>

export default {
  name: 'list-item',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>