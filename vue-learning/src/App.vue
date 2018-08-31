<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <dragmove v-show="seendragmove"></dragmove>
    <getnowtime v-show= "seengetnowtime"></getnowtime>
    <!-- <clock></clock> -->
    <draganddrop></draganddrop>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import dragmove from "./components/DragMove.vue";
import getnowtime from "./components/GetNowTime.vue";
import clock from "./components/Clock.vue";
import draganddrop from "./components/DragAndDrop.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    dragmove,
    getnowtime,
    clock,
    draganddrop
  },
  data() {
    return {
      seendragmove: false,
      seengetnowtime: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
