<template>
  <button
    id="suggestion-button"
    class="bg-transparent hover:bg-gradient-r-red-orange-red text-gray-700 font-semibold
    hover:text-white py-3 px-4 border-2 border-gray-500 hover:border-transparent
 rounded-full text-left mb-3 font-bold cursor-pointer focus:outline-none active:bg-blue-200"
    v-on:
  >
    <!-- @click="onClick" -->
    {{ content }}
    <!-- <button @onClick="log">
      bosse
    </button> -->
  </button>
</template>

<script>
// import OtherComponent from './OtherComponent.vue';

export default {
  components: {
    // OtherComponent,
  },
  props: {
    text: String,
    content: String,
    // class: String,
    // onClick: {
    //   type: Function,
    // },
  },
  data() {
    return {

    };
  },
  created() {
    this.$emit('on-click');
  },
  methods: {
    log() {
      console.log('oss');
    },
  },
};
</script>

<style  scoped>

</style>
