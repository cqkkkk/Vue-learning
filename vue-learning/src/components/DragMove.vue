<template>
    <!-- <div>aaa</div> -->
    <div>
        <canvas id="tree" width="100" height="150" v-on:mousedown="movetree"></canvas>

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

      ctx.fillStyle = "brown";
      ctx.beginPath();
      ctx.moveTo(40, 90);
      ctx.lineTo(40, 140);
      ctx.lineTo(60, 140);
      ctx.lineTo(60, 90);
      ctx.closePath();
      ctx.fill();
    },
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
    }
  },
  mounted() {
    this.draw();
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
</style>

