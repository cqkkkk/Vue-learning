<template>
    <div id="contentView">
        <canvas id="background" width="1280" height="800"></canvas>
        <img src="../../public/images/cars/car1.jpg" id="car1" alt="car1">
        <img src="../../public/images/cars/car2.jpg" id="car2" alt="car2">
        <img src="../../public/images/cars/car4.jpg" id="car3" alt="car3">
        <img src="../../public/images/cars/car3-1.jpg" id="car11" alt="car1-1">
        <img src="../../public/images/cars/car4-1.jpg" id="car12" alt="car2-1">
        <img src="../../public/images/cars/car2-1.jpg" id="car13" alt="car3-1">
        <img src="../../public/images/cars/car3-2.jpg" id="car21" alt="car2-1">
        <img src="../../public/images/cars/car4-2.jpg" id="car31" alt="car3-1">
        <img src="../../public/images/cars/car1-2.jpg" id="car32" alt="car3-2">
        <input type="button" value="东西方向通行" v-on:click="start1">
        <input type="button" value="南北方向通行" v-on:click="start2">
        <input type="button" value="stop" v-on:click ="stop">
        <input type="button" value="reset" v-on:click ="reset">
    </div>
    
</template>

<script>
export default {
    name:"crossroad",
    components:{},
    data(){
        return{
            car1value:700,
            car2value:570,
            car3value:440,
            car11value:990,
            car12value:1120,
            car13value:1250,
            car21value:300,
            car31value:600,
            car32value:720
        };
    },
    methods:{
        //start
        start1:function(){
            cancelAnimationFrame(window.globalID);
            //从左往右
            this.car1value = this.car1value + Math.random()*1 +3;
            //超出屏幕从另一边出现
            if(this.car1value >1530){
                this.car1value = 250;
            }
            var car1 = document.getElementById('car1');
            car1.style.left = this.car1value +"px";
            this.car2value = this.car2value + Math.random()*1 +3;
            if(this.car2value >1530){
                this.car2value = 250;
            }
            var car2 = document.getElementById('car2');
            car2.style.left = this.car2value + "px";
            this.car3value = this.car3value + Math.random()*1 +3;
            if(this.car3value >1530){
                this.car3value = 250;
            }
            var car3 = document.getElementById('car3');
            car3.style.left = this.car3value + "px";
            //从右往左
            this.car11value = this.car11value - Math.random()*1 -3;
            if(this.car11value <145){
                this.car11value = 1450;
            }
            var car11 = document.getElementById('car11')
            car11.style.left = this.car11value + "px";
            this.car12value = this.car12value - Math.random()*1 -3;
            if(this.car12value <145){
                this.car12value = 1450;
            }
            var car12 = document.getElementById('car12')
            car12.style.left = this.car12value + "px";
            this.car13value = this.car13value - Math.random()*1 -3;
            if(this.car13value <145){
                this.car13value = 1450;
            }
            var car13 = document.getElementById('car13')
            car13.style.left = this.car13value + "px";
            window.globalID = requestAnimationFrame(this.start1);
        },
        start2:function(){
            cancelAnimationFrame(window.globalIDD);
            //从上往下
            this.car21value = this.car21value + Math.random()*1 +3;
            //超出屏幕从另一边出现
            if(this.car21value >900){
                this.car21value = 100;
            }
            var car21 = document.getElementById('car21');
            car21.style.top = this.car21value +"px";
            //从下往上
            this.car31value = this.car31value - Math.random()*1 - 3;
            //超出屏幕从另一边出现
            if(this.car31value <100){
                this.car31value = 900;
            }
            var car31 = document.getElementById('car31');
            car31.style.top = this.car31value +"px";
            this.car32value = this.car32value - Math.random()*1 - 3;
            //超出屏幕从另一边出现
            if(this.car32value <100){
                this.car32value = 900;
            }
            var car32 = document.getElementById('car32');
            car32.style.top = this.car32value +"px";

            window.globalIDD = requestAnimationFrame(this.start2);
        },
        //stop
        stop:function(){
            cancelAnimationFrame(window.globalID);
            cancelAnimationFrame(window.globalIDD);
        },
        //reset
        reset:function(){
            cancelAnimationFrame(window.globalID);
            cancelAnimationFrame(window.globalIDD);
            this.car1value=700;
            this.car2value=570;
            this.car3value=440;
            this.car11value=990;
            this.car12value=1120;
            this.car13value=1250;
            this.car21value = 300;
            this.car31value = 600;
            this.car32value = 720;
            this.judgeposition();
        },
        judgeposition:function(){
            var car1 = document.getElementById('car1');
            car1.style.left = this.car1value +"px";
            var car2 = document.getElementById('car2');
            car2.style.left = this.car2value + "px";
            var car3 = document.getElementById('car3');
            car3.style.left = this.car3value + "px";
            var car11 = document.getElementById('car11')
            car11.style.left = this.car11value + "px";
            var car12 = document.getElementById('car12')
            car12.style.left = this.car12value + "px";
            var car13 = document.getElementById('car13')
            car13.style.left = this.car13value + "px";
            var car21 = document.getElementById('car21');
            car21.style.top = this.car21value +"px";
            var car31 = document.getElementById('car31');
            car31.style.top = this.car31value +"px";
            var car32 = document.getElementById('car32');
            car32.style.top = this.car32value +"px";
        },
        drawbackground:function(){
            var canvas = document.getElementById("background");
            if(!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "gray";
            ctx.lineWidth = 10;
            //画出马路轮廓
            ctx.beginPath();
            ctx.moveTo(0,300);
            ctx.lineTo(540,300);
            ctx.lineTo(540,0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(740,0);
            ctx.lineTo(740,300);
            ctx.lineTo(1280,300);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0,500);
            ctx.lineTo(540,500);
            ctx.lineTo(540,800);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(740,800);
            ctx.lineTo(740,500);
            ctx.lineTo(1280,500);
            ctx.stroke();
            //设置虚线，画马路中间虚线
            ctx.setLineDash([20, 20]);  // [实线长度, 间隙长度]
            ctx.lineDashOffset = -0;
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(0,400);
            ctx.lineTo(540,400);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(1280,400);
            ctx.lineTo(740,400);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(640,0);
            ctx.lineTo(640,300);
            ctx.stroke();
            ctx.moveTo(640,800);
            ctx.lineTo(640,500);
            ctx.stroke();
        },
    },
    mounted(){
        this.drawbackground();
        // [...document.querySelectorAll("input")].forEach(
        //     element => (element.style.font-size = "1")
        // );
    }
}
</script>

<style>
#contentView input{
    font-size: 25px;
    margin: 0.5%;
}
#background{
    position: absolute;
    left: 250px;
    top: 100px;
}
#car1{
    position: absolute;
    left: 700px;
    top: 515px;
}
#car2{
    position: absolute;
    left: 570px;
    top: 515px;
}
#car3{
    position: absolute;
    left: 440px;
    top: 520px;
}
#car11{
    position: absolute;
    left: 990px;
    top: 420px;
}
#car12{
    position: absolute;
    left: 1120px;
    top: 425px;
}
#car13{
    position: absolute;
    left:1250px;
    top:420px;
}
#car21{
    position: absolute;
    left: 800px;
    top: 300px;
}
#car31{
    position: absolute;
    left: 900px;
    top: 600px;
}
#car32{
    position: absolute;
    left: 900px;
    top: 720px;
}
</style>

