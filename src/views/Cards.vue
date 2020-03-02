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
        :class="'card-middle rounded-lg relative'"
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
      el.style.transform = `scale(${0.0})`;
      el.style.top = '500px';
      el.style.zIndex = 1000 - this.renderZIndex;
      this.renderZIndex += 1;
      el.style.opacity = 0;
      // el.style.transform = `translateX(${index * 25})`;
      if (!this.animating) {
        this.animating = true;
      }
    },
    enter(el, done) {
      const { index } = el.dataset;
      const delay = index * 500;
      const offset = index * 25;
      setTimeout(() => {
        gsap.to(
          el,
          0.5,
          {
            // transform: `translateY(${offset}px) scale(${1 - (index / 10)}, 1)`,
            transform: `scale(${1 - (index / 10)}, 1)`,
            top: `${offset}px`,
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

      // console.log(this.cards);
      // console.log(this.$refs);
      this.cards.forEach((card) => {
        setTimeout(() => {
          const ref = this.$refs[`card-item-${card.name}`];

          // console.log(ref);
          const el = ref[0].$el;
          console.log(el.textContent);

          const { index } = el.dataset;
          const delay = index * 500;
          const offset = index === 0 ? 0 : index * 25;
          gsap.to(
            el,
            0.5,
            {
              transform: `scale(${1 - (index / 10)}, 1)`,
              top: `${offset}px`,
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
          0.5,
          {
            transform: 'translateY(-1000px)',
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
