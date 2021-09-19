<template>
<div class="list">
  <div class="list-title">
    {{ title }}
  </div>

  <div class="list-nav">
    <slot name="nav" />
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
    title: {
      type: String,
      default: 'The List'
    },
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>