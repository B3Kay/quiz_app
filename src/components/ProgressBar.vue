<template>
  <div
    class=" rounded h-2 flex overflow-hidden"
    :style="{background: '#ffffff59'}"
  >
    <div
      v-for="(bar, index) in bars"
      id="progress-correct"
      :key="index"
      :style="{width: bar.width + '%', background: bar.color}"
      class="h-full rounded"
    />
  </div>
</template>

<script>
export default {
  components: {
    // OtherComponent,
  },
  props: {
    // class: String,
    // onClick: {
    //   type: Function,
    // },
    bars: {
      type: Array,
      default: () => [{ width: 30, color: '#f0f' }],
    },
  },
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
    log() {
      console.log('oss');
    },
  },
};
</script>

<style scoped>
</style>;
