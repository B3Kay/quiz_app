
<template>
  <div
    id="card-image"
    class="p-4"
  >
    <img
      v-if="true"
      class="w-full max-w-lg md:rounded-lg rounded-full"
      :src="'https://www.squeed.com/' + person.ImageUrl"
    >
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue';

export default {
  components: {
    // OtherComponent,
  },
  data() {
    return {
      person: {
        ImageUrl: '/media/1002/magnus-siverbrant-700x700.jpg',
      },
    };
  },
};
</script>

<style  scoped>

</style>
