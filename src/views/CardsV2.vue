
<template>
  <!-- <div class="h-full"> -->
  <!-- Cards -->
  <!-- <div class="grid-container flex-grow max-w-xl"> -->
  <div
    class="flex-grow"
  >
    <button
      class="bg-blue-500"
      @click="add"
    >
      Next
    </button>
    <transition-group
      name="cards-move"
      appear
      class="grid-container flex-grow max-w-xl h-full"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <card
        v-for="(card, index) in cards"
        :key="index"
        :data-index="index"
        appear
        :class="'card-middle rounded-lg'"
        :style="{background: card.color}"
      >
        {{ card.name }} {{ index }}
      </card>
    </transition-group>
  <!-- </div> -->
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { TweenLite, gsap } from 'gsap';
import Card from '../components/test/Card.vue';


export default {
  components: { Card },
  data() {
    return {
      cards: [
        { name: 'first', position: 'top', color: 'rgba(255, 000, 143, 1)' },
        { name: 'second', position: 'middle', color: 'rgba(255, 255, 143, 1)' },
        { name: 'third', position: 'bottom', color: 'rgba(0, 255, 143, 1)' },
        { name: 'hidden', position: 'hidden', color: 'rgba(0, 0, 143, 1) ' },
      ],
      animating: false,
      nextNum: 10,
    };
  },
  watch: {
    animating(val) {
      if (val) console.log('Stopped Animating');
    },
  },
  methods: {
    // Next Cards
    toggleNextCard() {
      this.add();
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.cards.splice(0, 1);
      // this.cards.splice(this.cards.length, 0, {
      // name: 'hidden', position: 'hidden', color: 'rgba(0, 0, 143, 1) ' });
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 40px 40px 40px auto 40px 40px 40px;
  grid-template-rows: 5rem auto 3rem 3rem 100px;
}
.card-top {
  grid-column-start: 2;
  grid-column-end: 7;
  /*  */
  grid-row-start: 2;
  grid-row-end: 3;
  /* background: rgba(255, 000, 143, 1); */
  /* grid-area: topcard; */
}
.card-middle {
  grid-column-start: 3;
  grid-column-end: 6;
  /*  */
  grid-row-start: 2;
  grid-row-end: 4;
  /* background: rgba(255, 255, 143, 1); */
  /* grid-area: middle-card; */
}
.card-bottom {
  grid-column-start: 4;
  grid-column-end: 5;
  /*  */
  grid-row-start: 2;
  grid-row-end: 5;
  /* background: rgba(0, 255, 143, 1); */
  /* grid-area: bottom-card; */
}
</style>
