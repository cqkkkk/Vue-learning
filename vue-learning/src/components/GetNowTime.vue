<template>
    <div>
        <input type="button" value="获取当前时间" v-on:click="gettime">
        <input id="time" v-model="realtime" type="button">
    </div>
    
</template>

<script>
export default {
  name: "getnowtime",
  components: {},
  data() {
    return {
      realtime: ""
    };
  },
  methods: {
    gettime: function() {
      //创建Data对象,并获取年月日时分秒
      var start = new Date();
      var year = start.getFullYear();
      var month = start.getMonth() + 1;
      var day = start.getDate();
      var hour = start.getHours();
      var minute = start.getMinutes();
      var second = start.getSeconds();
      //时分秒是一位时在前面补0
      if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
      if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
      }
      if (second >= 0 && second <= 9) {
        second = "0" + second;
      }
      //拼接起来,获取格式化之后的字符串
      var after =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      //   var time = document.getElementById("time");
      //   time.value = after;
      //   this.realtime = after;
      alert("格式化之前:" + start + "\n" + "格式化之后:" + after);
    }
    // start: function() {
    //   setInterval(this.gettime(), 100);
    // }
  },
  mounted() {
    // this.start();
    setInterval(function() {
      //创建Data对象,并获取年月日时分秒
      var start = new Date();
      var year = start.getFullYear();
      var month = start.getMonth() + 1;
      var day = start.getDate();
      var hour = start.getHours();
      var minute = start.getMinutes();
      var second = start.getSeconds();
      //时分秒是一位时在前面补0
      if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
      if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
      }
      if (second >= 0 && second <= 9) {
        second = "0" + second;
      }
      //拼接起来,获取格式化之后的字符串
      var after =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      var time = document.getElementById("time");
      time.value = after;
    }, 1000);
  }
};
</script>

<style>
#time {
  width: 300px;
  height: 50px;
  font-family: Miscrosoft YaHei;
  font-size: 30px;
}
</style>


