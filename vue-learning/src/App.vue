<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="selecters">
      <input type="button" value="dragmove" v-on:click="seedragmove">
      <input type="button" value="getnowtime" v-on:click="seegetnowtime">
      <input type="button" value="clock" v-on:click="seeclock">
      <input type="button" value="dragdrop" v-on:click="seedragdrop">
    </div>
    <dragmove v-show="seendragmove"></dragmove>
    <getnowtime v-show= "seengetnowtime"></getnowtime>
    <clock v-show="seenclock"></clock>
    <draganddrop v-show="seendragdrop"></draganddrop>
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
      seendragmove: true,
      seengetnowtime: false,
      seenclock:false,
      seendragdrop:false
    };
  },
  methods:{
    empty:function(){
      this.seendragmove = false;
      this.seengetnowtime = false;
      this.seenclock = false;
      this.seendragdrop = false;
    },
    seedragmove:function(){
      this.empty();
      this.seendragmove = true;
    },
    seegetnowtime:function(){
      this.empty();
      this.seengetnowtime = true;
    },
    seeclock:function(){
      this.empty();
      this.seenclock = true;
    },
    seedragdrop:function(){
      this.empty();
      this.seendragdrop = true;
    }
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
}
#selecters{
  position: absolute;
    width: 15%;
    font-size: 40px;
    top: 10%;
}
#selecters input{
  font-size: 25px;
}
</style>
