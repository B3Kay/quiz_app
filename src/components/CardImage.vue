
<template>
  <div
    id="card-image"
    class="p-4"
  >
    <v-lazy-image
      v-if="true"
      class="w-full max-w-lg md:rounded-lg rounded-full"
      :src="url ? 'https://www.squeed.com/' + url : null"
      src-placeholder="https://image.flaticon.com/icons/svg/616/616495.svg"
    />
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue';
import VLazyImage from 'v-lazy-image';

export default {
  components: {
    VLazyImage,
  },
  props: {
    url: String,
  },
};
</script>

<style  scoped>
/* .v-lazy-image {
  filter: blur(10px);
  transition: filter 0.8s;
}

.v-lazy-image-loaded {
  filter: blur(0);
} */
</style>
