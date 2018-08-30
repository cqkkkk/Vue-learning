<template>
    <div>
        <canvas id="clock" width="500" height="500"></canvas>
        <canvas id="hourhand" width="30" height="180" v-on:mousedown="movehour"></canvas>
        <canvas id="minutehand" width="20" height="200" v-on:mousedown="moveminute"></canvas>
        <canvas id="secondhand" width="10" height="205" v-on:mousedown="movesecond"></canvas>
        <canvas id="clockpoint" width="50" height="50"></canvas>
    </div>
    
</template>

<script>
export default {
    name:"clock",
    components:{},
    data(){
        return{
            moveangle:0,
        };
    },
    methods:{
        movehour:function(e){
            e.preventDefault();
            e.stopPropagation();

            let odiv = e.target;
            const point = document.getElementById("clockpoint");
            const pointleft = parseInt(point.getBoundingClientRect().left);
            const pointtop = parseInt(point.getBoundingClientRect().top);

            document.onmousemove = e =>{
                let disx = e.clientX - pointleft - 25 ;
                let disy = 25 + pointtop -e.clientY;
                this.calculateangle(disx,disy);
                odiv.style.transform = "rotate(" + this.moveangle + "deg)";
            }

            document.onmouseup = () =>{
                document.onmousedown = null;
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
        moveminute:function(e){ 
            e.preventDefault();
            e.stopPropagation();

            let odiv = e.target;
            const point = document.getElementById("clockpoint");
            const pointleft = parseInt(point.getBoundingClientRect().left);
            const pointtop = parseInt(point.getBoundingClientRect().top);

            document.onmousemove = e =>{
                let disx = e.clientX - pointleft - 25 ;
                let disy = 25 + pointtop -e.clientY;
                this.calculateangle(disx,disy);
                odiv.style.transform = "rotate(" + this.moveangle + "deg)";
            }

            document.onmouseup = () =>{
                document.onmousedown = null;
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
        movesecond:function(e){
            e.preventDefault();
            e.stopPropagation();

            let odiv = e.target;
            const point = document.getElementById("clockpoint");
            const pointleft = parseInt(point.getBoundingClientRect().left);
            const pointtop = parseInt(point.getBoundingClientRect().top);

            document.onmousemove = e =>{
                let disx = e.clientX - pointleft - 25 ;
                let disy = 25 + pointtop -e.clientY;
                this.calculateangle(disx,disy);
                odiv.style.transform = "rotate(" + this.moveangle + "deg)";
            }

            document.onmouseup = () =>{
                document.onmousedown = null;
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
        // 计算鼠标实时角度
        calculateangle: function(x, y) {
        if (x >= 0 && y >= 0) {
            this.moveangle = 90 - Math.atan(y / x) / Math.PI * 180;
        } else if (x < 0 && y > 0) {
            this.moveangle = 270 + Math.atan(-y / x) / Math.PI * 180;
        } else if (x < 0 && y < 0) {
            this.moveangle = 270 - Math.atan(y / x) / Math.PI * 180;
        } else {
            this.moveangle = 90 + Math.atan(-y / x) / Math.PI * 180;
        }
        },
        drawclock:function(){
            var canvas = document.getElementById("clock");
            if(!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = "gray";
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.arc(250,250,230,0,Math.PI*2);
            ctx.closePath();
            ctx.stroke();         
        },
        drawclockpoint:function(){
            var canvas = document.getElementById("clockpoint");
            if(!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "gray";
            ctx.beginPath();
            ctx.arc(25,25,20,0,Math.PI*2);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(25,25,15,0,Math.PI*2);
            ctx.closePath();
            ctx.fill();
        },
        drawhourhand:function(){
            var canvas = document.getElementById("hourhand");
            if(!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(0,180);
            ctx.lineTo(0,30);
            ctx.lineTo(15,0);
            ctx.lineTo(30,30);
            ctx.lineTo(30,180);
            ctx.lineTo(0,180);
            ctx.closePath();
            ctx.fill();
        },
        drawminutehand:function(){
            var canvas = document.getElementById("minutehand");
            if(!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "#3f4347";
            ctx.beginPath();
            ctx.moveTo(0,200);
            ctx.lineTo(0,50);
            ctx.lineTo(10,0);
            ctx.lineTo(20,50);
            ctx.lineTo(20,200);
            ctx.closePath();
            ctx.fill();
        },
        drawsecondhand:function(){
            var canvas = document.getElementById("secondhand");
            if(!canvas.getContext) return;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.fillRect(0,0,6,205);
            ctx.closePath();
        }

    },
    mounted(){
        this.drawclock();
        this.drawhourhand();
        this.drawminutehand();
        this.drawclockpoint();
        this.drawsecondhand();
    
    }
}
</script>

<style>
#clock{
    position: absolute;
    left: 100px;
    top: 100px;
}
#clockpoint{
    position: absolute;
    left: 325px;
    top: 325px;
}
#hourhand{
    position: absolute;
    left:335px;
    top:170px;
    transform: rotate(0deg);
    transform-origin: center bottom;
    cursor: pointer;
}
#minutehand{
    position: absolute;
    left: 340px;
    top: 150px;
    transform: rotate(0deg);
    transform-origin: center bottom;
    cursor: pointer;
}
#secondhand{
    position: absolute;
    left:348px;
    top: 150px;
    transform: rotate(0deg);
    transform-origin: center bottom;
    cursor: pointer;
}
</style>
