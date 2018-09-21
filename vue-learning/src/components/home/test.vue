<template>
  <div id="app">
    <div id="selecters">
      <input type="button" v-for="(src,index) in srcList" :value='src' @click='choosePage(src)' :key="index">
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
        srcList:['clock','getnowtime','dragmove','draganddrop','translate','crossroad','svgtest']
    };
  },
  methods:{
    //选择路由
    choosePage(src) {
      console.log(src);
			this.$router.push({ path: `/demo/${src}` });
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