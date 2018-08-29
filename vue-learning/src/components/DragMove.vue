<template>
    <div>
        <canvas id="tree" width="100" height="150" v-on:mousedown="movetree"></canvas>
        <canvas id="phone" width="100" height="180" v-on:mousedown="movephone"></canvas>

        <div id="addtree"><div id="mountedtree"></div></div>
    </div>
    
</template>

<script>
export default {
  name: "dragmove",
  components: {},
  data() {
    return {
      treeleft: 200,
      treetop: 200
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
    },
    //movetree(随着鼠标变化差值而变化)
    movetree: function(e) {
      e.preventDefault();
      var start = new Date();
      var start1 = start.toTimeString();
      console.log(start);
      console.log(start1);
      var [mousedisx, mousedisy] = [e.clientX, e.clientY];
      var tree = document.getElementById("tree");
      tree.style.opacity = "0.5";
      document.onmousemove = e => {
        console.log("test");
        var sub1 = e.clientX - mousedisx;
        var sub2 = e.clientY - mousedisy;
        let xx = this.treeleft + sub1;
        let yy = this.treetop + sub2;
        tree.style.left = xx + "px";
        tree.style.top = yy + "px";
      };
      document.onmouseup = () => {
        tree.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
        this.treeleft = parseInt(tree.style.left);
        this.treetop = parseInt(tree.style.top);
        var stop = new Date();
        console.log(stop.toTimeString());
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
    },
    //movephone(计算出鼠标与图片相对位置,之后获取鼠标位置后减去相对位置就是图片的位置)
    movephone: function(e) {
      e.preventDefault();
      //计算出鼠标位置与phone的相对位置差
      var phone = document.getElementById("phone");
      var disx = e.clientX - phone.offsetLeft;
      var disy = e.clientY - phone.offsetTop;
      phone.style.opacity = "0.5";
      //   console.log(disx + "+" + disy);
      document.onmousemove = e => {
        // 根据鼠标实时位置减去相对位置就是现在图片该在的位置
        var left = e.clientX - disx;
        var top = e.clientY - disy;
        phone.style.left = left + "px";
        phone.style.top = top + "px";
      };
      document.onmouseup = e => {
        phone.style.opacity = "1";
        document.onmousedown = null;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  },
  mounted() {
    this.draw();
    this.drawphone();
  }
};
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
  left: 500px;
  top: 500px;
  opacity: 1;
  cursor: pointer;
}
</style>

