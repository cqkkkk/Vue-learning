<template>
    <div>
        <canvas id="tree" width="100" height="150" v-on:mousedown="movetree"></canvas>
        <canvas id="phone" width="100" height="180" v-on:mousedown="movephone"></canvas>
        <canvas id="taiji" width="100" height="100" v-on:mousedown="movetaiji"></canvas>
        <div id="addborder"></div>
        <div id="addeverything"></div>   
        <input type="button" value="一键清空" id="clearbt" v-on:click="clearall">
    </div>
</template>

<script>
import Vue from "vue/dist/vue.js";
export default {
  name: "dragmove",
  components: {},
  data() {
    return {
      treeleft: 200,
      treetop: 200,
      taijileft: 100,
      taijitop: 533,
      treevalue:0,//当前tree复制次数
      phonevalue:0,//当前phone复制次数
    };
  },
  methods: {
    //画tree
    draw: function() {
      var canvas = document.getElementById("tree");
      if (!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.moveTo(50, 0);
      ctx.lineTo(70, 30);
      ctx.lineTo(55, 30);
      ctx.lineTo(100, 90);
      ctx.lineTo(0, 90);
      ctx.lineTo(45, 30);
      ctx.lineTo(30, 30);
      ctx.closePath();
      ctx.fill();
      //躯干
      ctx.fillStyle = "brown";
      ctx.beginPath();
      ctx.moveTo(40, 90);
      ctx.lineTo(40, 140);
      ctx.lineTo(60, 140);
      ctx.lineTo(60, 90);
      ctx.closePath();
      ctx.fill();
      // var canvas = document.getElementById("mycanvas");
      window.treeimg = canvas.toDataURL("image/png");
    },
    //movetree(随着鼠标变化差值而变化)
    movetree: function(e) {
      e.preventDefault();
      // var start = new Date();
      // var start1 = start.toTimeString();
      // console.log(start);
      // console.log(start1);
      var [mousedisx, mousedisy] = [e.clientX, e.clientY];

      let varr = this.treevalue;
      if(varr >= 0){
        // 移动时创建新的tree，并且让新建的tree随着鼠标移动
        /*  <div id="addeverything">
        *        <div id="add0">
        *            <div id="addSon"></div>因为实例挂载会代替整个dom元素，所以这里要创建双层div
        *        </div>
        *    </div>
        */
        const newEle = document.createElement("div");
        newEle.id = "add" + varr;
        newEle.style.width = "100%";
        newEle.style.position = "absolute";
        const curSectionEle = document.getElementById("addeverything");
        curSectionEle.appendChild(newEle);

        const newEleson = document.createElement("div");
        newEleson.id = "addSon";
        const sectionEle = document.getElementById("add" + varr);
        sectionEle.appendChild(newEleson);
        // 挂载
        new newtree().$mount("#addSon");
        this.treevalue = this.treevalue + 1;
        var moveEle = document.getElementById("add" + varr).childNodes[0];
        moveEle.style.opacity = "0.5";
      }

      // var tree = document.getElementById("tree");
      // tree.style.opacity = "0.5";
      document.onmousemove = e => {
        // console.log("test");
        var sub1 = e.clientX - mousedisx;
        var sub2 = e.clientY - mousedisy;
        let xx = this.treeleft + sub1;
        let yy = this.treetop + sub2;
        // console.log(xx +" "+ yy)
        moveEle.style.left = xx + "px";
        moveEle.style.top = yy + "px";
      };
      document.onmouseup = () => {
        moveEle.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
        // this.treeleft = parseInt(tree.style.left);
        // this.treetop = parseInt(tree.style.top);
        // var stop = new Date();
        // console.log(stop.toTimeString());
      };
    },
    //drawphone
    drawphone: function() {
      var canvas = document.getElementById("phone");
      if (!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      //整机背景颜色灰色
      ctx.fillStyle = "gray";
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(90, 0);
      ctx.arcTo(100, 0, 100, 10, 10);
      ctx.lineTo(100, 170);
      ctx.arcTo(100, 180, 90, 180, 10);
      ctx.lineTo(10, 180);
      ctx.arcTo(0, 180, 0, 170, 10);
      ctx.lineTo(0, 10);
      ctx.arcTo(0, 0, 10, 0, 10);
      ctx.closePath();
      ctx.fill();
      //屏幕
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(5, 15);
      ctx.lineTo(95, 15);
      ctx.lineTo(95, 165);
      ctx.lineTo(5, 165);
      ctx.closePath();
      ctx.fill();
      //听筒
      ctx.beginPath();
      ctx.arc(50, 8, 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      //home键
      ctx.beginPath();
      ctx.arc(50, 172.5, 5, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      window.phoneimg = canvas.toDataURL("image/png");
    },
    //movephone(计算出鼠标与图片相对位置,之后获取鼠标位置后减去相对位置就是图片的位置)
    movephone: function(e) {
      e.preventDefault();
      //计算出鼠标位置与phone的相对位置差
      var phone = document.getElementById("phone");
      var disx = e.clientX - phone.offsetLeft;
      var disy = e.clientY - phone.offsetTop;

      let varr = this.phonevalue;
      if(varr >= 0){
        const newEle = document.createElement("div");
        newEle.id = "addphone" + varr;
        newEle.style.width = "100%";
        const curSectionEle = document.getElementById("addeverything");
        curSectionEle.appendChild(newEle);

        const newEleson = document.createElement("div");
        newEleson.id = "addSon";
        const sectionEle = document.getElementById("addphone" +varr);
        sectionEle.appendChild(newEleson);

        new newphone().$mount("#addSon");
        this.phonevalue +=1;
        var moveEle = document.getElementById("addphone" + varr).childNodes[0];
        moveEle.style.opacity = "0.5";
      }

      // phone.style.opacity = "0.5";
      //   console.log(disx + "+" + disy);
      document.onmousemove = e => {
        // 根据鼠标实时位置减去相对位置就是现在图片该在的位置
        var left = e.clientX - disx;
        var top = e.clientY - disy;
        moveEle.style.left = left + "px";
        moveEle.style.top = top + "px";
      };
      document.onmouseup = () => {
        
        moveEle.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    // 判断函数，判断移动的目标是否在指定的区域内
    // judge:function(){
    //   var addborder = document.getElementById('addborder');
    //     let aaa = addborder.getBoundingClientRect().left;
    // },
    drawtaiji: function() {
      var canvas = document.getElementById("taiji");
      if (!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(50, 0);
      ctx.arc(50, 50, 50, Math.PI / 2, Math.PI * 3 / 2, false);
      ctx.arc(50, 25, 25, Math.PI / 2, Math.PI * 3 / 2, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(50, 75, 25, Math.PI / 2, Math.PI * 3 / 2, false);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(50, 25, 7, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(50, 75, 7, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "gray";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    },
    /*movetaiji
    *闭包方法做,闭包可以实时保存鼠标和图片的位置信息,
    *这样每一次比较实际上是与上一个触发点作比较*/
    movetaiji: function(e) {
      e.preventDefault();
      //鼠标初始位置
      var [disx, disy] = [e.clientX, e.clientY];
      //图片初始位置
      var taiji = document.getElementById("taiji");
      var [disX, disY] = [
        parseInt(taiji.getBoundingClientRect().left),
        parseInt(taiji.getBoundingClientRect().top)
      ];
      taiji.style.opacity = "0.5";
      //move时调用一个闭包
      document.onmousemove = this.listenerMove(disx, disy, disX, disY);
      document.onmouseup = () => {
        taiji.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    listenerMove: function(mousedisx, mousedisy, taijidisx, taijidisy) {
      //这四个值不会被垃圾回收
      let x = mousedisx;
      let y = mousedisy;
      let xx = taijidisx;
      let yy = taijidisy;
      return e => {
        //计算差值
        var subx = e.clientX - x;
        var suby = e.clientY - y;
        //计算图片实时位置值
        var addx = xx + subx;
        var addy = yy + suby;
        var taiji = document.getElementById("taiji");
        taiji.style.left = addx + "px";
        taiji.style.top = addy + "px";
        //更新这四个值,也就是move过程中实时的鼠标位置和图片位置
        [x, y] = [e.clientX, e.clientY];
        [xx, yy] = [addx, addy];
      };
    },
    //清空全部
    clearall:function(){
      new blank().$mount("#addeverything");
      this.treevalue = 0;
    },
  },
  mounted() {
    this.draw();
    this.drawphone();
    this.drawtaiji();
  }
};
//Newtree
var newtree = Vue.extend({
  template:'<img :src="src" class="addTree" v-on:mousedown="movetree"></img>',
  data(){
    return{
      src:window.treeimg,
    };
  },
  methods:{
    movetree:function(e){ 
      e.preventDefault();
      let odiv = e.target;
      var disx = e.clientX - odiv.offsetLeft;
      var disy = e.clientY - odiv.offsetTop;
      odiv.style.opacity = "0.5"

      document.onmousemove = e =>{
        var left = e.clientX - disx;
        var top = e.clientY -disy;
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = () =>{
        odiv.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
      }
    },
  },
  mounted(){
    // this.draw();
  }
});
//Newphone
var newphone = Vue.extend({
  template:'<img :src ="phonesrc" class="addPhone" v-on:mousedown="movephone"></img>',
  data(){
    return{
      phonesrc:window.phoneimg,
    };
  },
  methods:{
    movephone:function(e){
      e.preventDefault();
      let odiv = e.target;
      var disx = e.clientX - odiv.offsetLeft;
      var disy = e.clientY - odiv.offsetTop;
      odiv.style.opacity = "0.5";

      document.onmousemove = e =>{
        var left = e.clientX - disx;
        var top = e.clientY - disy;
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = () =>{
        odiv.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
      }
    },
  },
  mounted(){
    // this.drawphone();
  }
});
//clear
var blank = Vue.extend({
  template:'<div id="addeverything"></div>',
  data(){
    return {};
  }
});
// 删除实例
var deleteEle = Vue.extend({
  template: "<a></a>",
  data() {
    return {};
  }
});
</script>

<style>
#tree {
  position: absolute;
  left: 200px;
  top: 200px;
  opacity: 1;
  cursor: pointer;
}
#phone {
  position: absolute;
  left: 311px;
  top: 502px;
  opacity: 1;
  cursor: pointer;
}
#taiji {
  position: absolute;
  left: 100px;
  top: 533px;
  opacity: 1;
  cursor: pointer;
}
#addborder{
  position: absolute;
  width: 60%;
  height: 80%;
  border: 1px solid gray;
  left: 35%;
  top: 2%;
}
#clearbt{
  position: absolute;
  font-size: 25px;
  left: 35%;
  top: 83%;
}
.addTree {
  position: absolute;
  cursor: pointer;
  opacity: 1;
}
.addPhone{
  position: absolute;
  left: 311px;
  top: 502px;
  opacity: 1;
  cursor: pointer;
}
</style>

