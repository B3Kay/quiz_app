<template>
  <div
    id="card-suggestions"
    class="p-4"
  >
    <suggestion-button>
      Rose Baladatti
    </suggestion-button>
    <suggestion-button>Bosse Bengtsån </suggestion-button>
    <suggestion-button>Anna Ingridsson</suggestion-button>
  </div>
</template>

<script>
import SuggestionButton from './SuggestionButton.vue';

export default {
  components: {
    SuggestionButton,
  },
  data() {
    return {

    };
  },
};
</script>

<style  scoped>

</style>
