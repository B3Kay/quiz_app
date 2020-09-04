<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="https://github.com/b3kay.png"
      class="m-auto mb-4"
    >
    <HelloWorld msg="This is a Sandbox for my personal Vue.js Training." />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
