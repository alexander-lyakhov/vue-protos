<template>
  <li class="list-item detailed" :key="item.id">
    <a href="#">
      <span class="line1">{{ item.title }}</span>
      <span class="line2">{{ item.genres.join(' / ') }}</span>
    </a>
  </li>
</template>

<script>

export default {
  name: 'list-item-detailed',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>