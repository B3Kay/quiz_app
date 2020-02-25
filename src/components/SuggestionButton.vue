<template>
  <div
    id="suggestion-button"
    class="bg-transparent hover:bg-gradient-r-red-orange-red text-gray-700 font-semibold
    hover:text-white py-5 px-6 border-2 border-gray-500 hover:border-transparent
 rounded-full text-left mb-3 font-bold cursor-pointer"
  >
    <slot />
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue';

export default {
  components: {
    // OtherComponent,
  },
  prop: {
    text: String,
  },
  data() {
    return {
      data: 'Stiff',
    };
  },
};
</script>

<style  scoped>

</style>
