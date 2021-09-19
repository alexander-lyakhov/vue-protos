<template>
<div class="list">
  <div class="list-title">Simple List</div>
  <div class="list-nav">
    <div class="list-nav__menu">
      <span class="selected">Simple</span>
      <span>Detailed</span>
    </div>
  </div>
  <ul class="list-body">
    <template v-for="item in items">
      <slot v-bind:item="item" />
    </template>
  </ul>
</div>
</template>

<script>

export default {
  name: 'list',

  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>