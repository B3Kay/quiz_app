/* eslint-disable no-plusplus */

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
      appear
      name="cards-move"
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
        :key="`card-item-${card.name}`"
        :ref="`card-item-${card.name}`"

        :data-index="index"
        :class="'card-item rounded-lg relative shadow-2xl'"
        :style="{background: card.color}"
      >
        <h2 class="text-white text-2xl uppercase font-bold">
          {{ card.name }} {{ index }}
        </h2>
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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
      initialAnimation: true,
      renderZIndex: 1,
      nextNum: 10,
    };
  },
  watch: {
    animating(val) {
      if (val) console.log('Stopped Animating');
    },
  },
  methods: {
    beforeEnter(el) {
      // el.style.opacity = 0;
      const { index } = el.dataset;
      el.style.transform = `scale(${0.3})`;
      el.style.top = '500px';
      el.style.zIndex = 1000 - this.renderZIndex;
      this.renderZIndex += 1;
      el.style.opacity = 0;
      if (!this.animating) {
        this.animating = true;
      }
    },
    enter(el, done) {
      const { index } = el.dataset;
      const delay = index * 500;
      const offset = index * 1;
      setTimeout(() => {
        gsap.to(
          el,
          0.5,
          {
            transform: `scale(${1 - (index / 10)}, 1)`,
            top: `${offset}rem`,
            opacity: 1,
            onComplete: done,
          },
        );
      }, this.initialAnimation ? delay : 0);
    },
    afterEnter(el) {
      if (+el.dataset.index === this.cards.length - 1) {
        this.animating = false;
        this.initialAnimation = false;
      }
    },
    beforeLeave() {
      if (!this.animating) { this.animating = true; }

      this.cards.forEach((card) => {
        setTimeout(() => {
          const ref = this.$refs[`card-item-${card.name}`];

          const el = ref[0].$el;

          const { index } = el.dataset;
          const delay = index * 500;
          const offset = index === 0 ? 0 : index * 1;
          gsap.to(
            el,
            0.8,
            {
              transform: `scale(${1 - (index / 10)}, 1)`,
              top: `${offset}rem`,
              opacity: 1,
              // onComplete: done,
            },
          );
        }, 50);
      });
    },
    leave(el, done) {
      const delay = el.dataset.index * 150;
      // console.log(el);
      setTimeout(() => {
        gsap.to(
          el,
          0.8,
          {
            top: '-1000px',
            // transform: 'scale(0, 0)',
            // opacity: 0,
            onComplete: done,
          },
        );
      }, delay);
    },
    afterLeave(el) {
      if (+el.dataset.index === this.cards.length - 1) {
        this.animating = false;
      }
    },
    // Next Cards
    toggleNextCard() {
      this.add();
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      console.log('clicked');
      this.cards.splice(0, 1);
      // setTimeout(() => {
      this.cards.splice(this.cards.length, 0, { name: this.nextNum += 1, position: 'hidden', color: getRandomColor() });
      // }, 1);
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  /* grid-template-columns: 40px 40px 40px auto 40px 40px 40px; */
  grid-template-columns: 1rem auto  1rem;
  grid-template-rows: 1rem auto 4rem;
  /* grid-template-rows: 5rem auto 3rem 3rem 100px; */
}

.card-item {
  grid-column-start: 2;
  grid-column-end: 3;
  /*  */
  grid-row-start: 2;
  grid-row-end: 3;
  /* background: rgba(255, 255, 143, 1); */
  /* grid-area: middle-card; */
}
</style>
