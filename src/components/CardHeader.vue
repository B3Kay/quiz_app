<template>
  <div
    id="card-header"
    class="flex justify-between p-4"
  >
    <div>
      <h5 class="font-bold uppercase text-left">
        <span class="">Squeeders</span>
        <br>
        <span>{{ currentQuestion }} av {{ totalQuestions }}</span>
      </h5>
    </div>

    <div class="font-bold uppercase text-right">
      <h5 class="font-bold uppercase">
        <span class="">Level</span><br><span> 2</span>
      </h5>
    </div>
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

    };
  },
  computed: {
    currentQuestion() {
      return this.$store.state.game.currentQuestion;
    },
    totalQuestions() {
      return this.$store.getters.totalQuestions;
    },
  },
};
</script>

<style  scoped>

</style>
