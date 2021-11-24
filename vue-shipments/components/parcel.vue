<template>
  <div class="parcel" :class="{selected: isSelected}">
    <div class="parcel-item">
      <div class="parcel-caption" @click="select">
        <span class="title">Vase</span>
        <span class="actions">
          <a class="actions-btn actions-btn-edit" href="#">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
            </svg>
          </a>
          <a class="actions-btn actions-btn-delete" href="#">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
          </a>
        </span>
      </div>
      <div class="parcel-body">
        <table>
          <tr>
            <th class="name">John Farqhar Smithington</th>
            <th class="weight">Wight</th>
            <th class="delivery">Delivery Service</th>
            <th class="cover">Cover</th>
            <th class="proof">Proof of delivery</th>
          </tr>
          <tr>
            <td>
              <div class="postcode">CO62HB</div>
              <div class="delivery">Parcelshop drop off</div>
            </td>
            <td>1kg - 2kg</td>
            <td>Standard</td>
            <td>Free cover up to £15</td>
            <td>Not included</td>
          </tr>
        </table>
      </div>
      <div class="parcel-footer">
        <img src="../assets/csv.svg" />
        <span class="price">
          £4.40
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'parcel',

  props: {
    selectedParcel: {
      type: Object,
      default: null
    }
  },

  data() {
    return {}
  },

  computed: {
    isSelected() {
      return this.selectedParcel === this.$el
    }
  },

  methods: {
    select() {
      console.log('select', this.$el)
      this.$emit('select-parcel', this.$el);
    }
  }
}
</script>
