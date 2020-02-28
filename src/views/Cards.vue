
<template>
  <!-- <div class="h-full"> -->
  <!-- Cards -->
  <!-- <div class="grid-container flex-grow max-w-xl"> -->
  <transition-group
    name="cards-move"
    appear
    type="div"
    class="grid-container flex-grow max-w-xl"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div
      v-for="card in cards"
      :key="card.name"
      :class="card.name"
    >
      {{ card.name }}
    </div>
  </transition-group>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { TweenLite, gsap } from 'gsap';

export default {
  data() {
    return {
      cards: [
        { name: 'card-bottom' },
        { name: 'card-middle' },
        { name: 'card-top' },
        { name: 'card-hidden' },
      ],
      animating: false,
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
      el.style.transform = 'translateY(100px)';
      if (!this.animating) {
        this.animating = true;
      }
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;
      console.log(el);
      setTimeout(() => {
        gsap.to(
          el,
          0.5,
          {
            transform: 'translateY(0)',
            onComplete: done,
          },
        );
      }, delay);
    },
    afterEnter(el) {
      if (+el.dataset.index === this.cards.length - 1) {
        this.animating = false;
      }
    },
    beforeLeave() { if (!this.animating) { this.animating = true; } },
    leave(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        gsap.to(
          el,
          0.5,
          {
            transform: 'translateY(100px)',
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
  background: rgba(255, 000, 143, 1);
  /* grid-area: topcard; */
}
.card-middle {
  grid-column-start: 3;
  grid-column-end: 6;
  /*  */
  grid-row-start: 2;
  grid-row-end: 4;
  background: rgba(255, 255, 143, 1);
  /* grid-area: middle-card; */
}
.card-bottom {
  grid-column-start: 4;
  grid-column-end: 5;
  /*  */
  grid-row-start: 2;
  grid-row-end: 5;
  background: rgba(0, 255, 143, 1);
  /* grid-area: bottom-card; */
}
</style>
