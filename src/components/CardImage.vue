
<template>
  <div
    id="card-image"
    class="p-4"
  >
    <img
      v-if="true"
      class="w-full max-w-lg md:rounded-lg rounded-full"
      :src="'https://www.squeed.com/' + url"
    >
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue';

export default {
  components: {
    // OtherComponent,
  },
  props: {
    url: String,
  },
};
</script>

<style  scoped>

</style>
