<template>
  <div
    id="game-card"
    class="bg-white rounded-lg items-center"
  >
    <card-header />
    <card-image />
    <card-title />
    <h2 class="text-3xl font-bold mb-4">
      Agile coach and
    </h2>
    <card-suggestions />
  </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import CardImage from './CardImage.vue';
import CardSuggestions from './CardSuggestions.vue';
// import OtherComponent from './OtherComponent.vue';
export default {
  components: {
    CardHeader,
    CardImage,
    CardSuggestions,
  },
  data() {
    return {
      greeting: 'Hello',
    };
  },
};
</script>

<style  scoped>

</style>
