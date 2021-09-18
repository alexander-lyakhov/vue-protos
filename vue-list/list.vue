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
    <li class="list-item simple">
      <a href="#">Item 1</a>
    </li>
    <li class="list-item simple">
      <a href="#">Item 1</a>
    </li>
    <li class="list-item simple">
      <a href="#">Item 1</a>
    </li>
    <li class="list-item simple">
      <a href="#">Item 1</a>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'list',
}
</script>

<style scoped>
</style>