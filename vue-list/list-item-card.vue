<template>
  <li class="list-item card" :key="item.id">
    <div class="img-wrapper">
      <div v-if="!isPosterLoaded" class="placeholder" />
      <img :src="item.poster_path" alt="" />
    </div>
    <div class="info">
      <section class="section title">
        {{ item.title }}
      </section>

      <section class="section rating">
        <div class="section-header">
          Rating
        </div>
        <p>{{ item.vote_average }}</p>
      </section>

      <section class="section release">
        <div class="section-header">
          Release date
        </div>
        <p>{{ item.release_date }}</p>
      </section>

      <section class="section overview">
        <div class="section-header">
          Overview
        </div>
        <p>{{ item.overview }}</p>
      </section>
    </div>
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
  },

  data() {
    return {
      isPosterLoaded: false,
    }
  },

  created() {
    this.img = new Image();
    this.img.addEventListener('load', () => this.isPosterLoaded = true)
    this.img.src = this.item.poster_path;
  },
}
</script>