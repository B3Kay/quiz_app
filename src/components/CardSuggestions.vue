<template>
  <div
    v-if="showPeopleList.length > 1"
    id="card-suggestions"
    class="p-4"
  >
    <suggestion-button
      v-for="people in showPeopleList"
      :key="people.Id"
      :content="people.Name"
      class="w-full"
      @click.native="checkIfCorrectPerson(people)"
    >
      {{ people.Name }}
    </suggestion-button>
  </div>
</template>

<script>
import SuggestionButton from './SuggestionButton.vue';

export default {
  components: {
    SuggestionButton,
  },
  props: {
    peopleList: {
      type: Array,
      default: () => []
      ,
    },
    level: Number,
  },
  data() {
    return {

    };
  },
  computed: {
    showPeopleList() {
      // console.log(this.peopleList);
      if (this.peopleList.length > 0) {
        return this.peopleList;
      }
      const placeholder = [];
      for (let index = 0; index < this.level.length; index += 1) {
        const dummy = { Name: ' ', Id: ' ' };
        placeholder.push(dummy);
      }
      return placeholder;
    },
  },
  // mounted() {
  //   this.$emit('check-person', this.value);
  // },
  methods: {
    nextPerson() {
      this.$store.dispatch('showNextPerson');
    },
    checkIfCorrectPerson(param) { this.$store.dispatch('checkIfCorrectPerson', param); },
  },
};
</script>

<style  scoped>


.suggestions-enter-active {
  animation: bounce-in .5s;
}
.suggestions-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
