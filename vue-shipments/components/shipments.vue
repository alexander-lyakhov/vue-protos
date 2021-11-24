<template>
  <div class="shipments">
    <slot v-bind="{selectParcel, selectedParcel}"></slot>
  </div>
</template>

<script>
export default {
  name: 'shipments',

  data() {
    return {
      selectedParcel: null
    }
  },

  methods: {
    selectParcel(el) {
      console.log('selectedParcel', el)
      this.selectedParcel = el;
    }
  }
}
</script>