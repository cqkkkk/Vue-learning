<template>
  <div id="app">
    <div id="selecters">
      <input type="button" value="dragmove" v-on:click="choosePage('dragmove')">
      <input type="button" value="getnowtime" v-on:click="choosePage('getnowtime')">
      <input type="button" value="clock" v-on:click="choosePage('clock')">
      <input type="button" value="dragdrop" v-on:click="choosePage('draganddrop')">
      <input type="button" value="translate" v-on:click ="choosePage('translate')">
      <input type="button" value="crossroad" v-on:click ="choosePage('crossroad')">
      <input type="button" value="svgtest" v-on:click = "choosePage('svgtest')">
    </div>
    <!-- <dragmove v-show="seendragmove"></dragmove>
    <getnowtime v-show= "seengetnowtime"></getnowtime>
    <clock v-show="seenclock"></clock>
    <draganddrop v-show="seendragdrop"></draganddrop>
    <translate v-show="seentranslate"></translate>
    <crossroad v-show="seencrossroad"></crossroad> -->
    <!-- <svgtest :grade="3"></svgtest> -->
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HelloWorld from "./components/demo/HelloWorld.vue";
// import dragmove from "./components/demo/DragMove.vue";
// import getnowtime from "./components/demo/GetNowTime.vue";
// import clock from "./components/demo/Clock.vue";
// import draganddrop from "./components/demo/DragAndDrop.vue";
// import translate from "./components/demo/Translate.vue";
// import crossroad from "./components/demo/CrossRoad.vue";
// import svgtest from "./components/demo/SvgTest.vue";

export default {
  name: "app",
  components: {
  },
  data() {
    return {
    };
  },
  methods:{
    choosePage(src) {
      console.log(src);
			this.$router.push({ path: `/demo/${src}` });
		}
    // empty:function(){
    //   this.seendragmove = false;
    //   this.seengetnowtime = false;
    //   this.seenclock = false;
    //   this.seendragdrop = false;
    //   this.seentranslate = false;
    //   this.seencrossroad = false;
    // },
    // seedragmove:function(){
    //   this.empty();
    //   this.seendragmove = true;
    // },
    // seegetnowtime:function(){
    //   this.empty();
    //   this.seengetnowtime = true;
    // },
    // seeclock:function(){
    //   this.empty();
    //   this.seenclock = true;
    // },
    // seedragdrop:function(){
    //   this.empty();
    //   this.seendragdrop = true;
    // },
    // seetranslate:function(){
    //   this.empty();
    //   this.seentranslate = true;
    // },
    // seecrossroad:function(){
    //   this.empty();
    //   this.seencrossroad = true;
    // }
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