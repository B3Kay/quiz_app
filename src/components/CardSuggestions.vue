<template>
  <div
    v-if="showPeopleList.length > 1"
    id="card-suggestions"
    class="p-4"
  >
    <transition-group name="suggestions">
      <suggestion-button
        v-for="people in showPeopleList"

        :key="people.Id"
        :content="people.Name"
        @click.native="checkIfCorrectPerson(people)"
      >
        {{ people.Name }}
      </suggestion-button>
    </transition-group>
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
    checkIfCorrectPerson(param) { console.log(param); this.$store.dispatch('checkIfCorrectPerson', param); },
  },
};
</script>

<style  scoped>

.suggestions-item {
  display: inline-block;
  margin-right: 10px;
}
.suggestions-enter-active, .suggestions-leave-active {
  transition: all 1s;
}
.suggestions-enter,.suggestions-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
