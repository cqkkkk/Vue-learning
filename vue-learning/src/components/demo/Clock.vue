<template>
    <div>
        <input id= "linkmove" type="button" v-bind:value="btvalue" v-on:click="changelinkmove"><br><br>
        <input id="btsecond" type="button" v-bind:value="btsecondvalue" v-on:click="changesecondhand">
        <canvas id="clock" width="500" height="500"></canvas>
        <canvas id="hourhand" width="30" height="180" v-on:mousedown="movehour"></canvas>
        <canvas id="minutehand" width="20" height="200" v-on:mousedown="moveminute"></canvas>
        <canvas id="secondhand" width="6" height="205" v-on:mousedown="movesecond" v-show="seensecondhand"></canvas>
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
            movehourvalue:0,
            moveminutevalue:0,
            movesecondvalue:0,
            btvalue:"指针不联动",
            linkmovevalue:false,
            btsecondvalue:"秒针显示",
            seensecondhand:true,
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
                this.movehourvalue = this.moveangle;
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

            if(this.linkmovevalue){
                // 校正
                const correct1 = this.moveminutevalue / 360 * 30;
                const correct2 = this.movehourvalue % 30;
                if (correct1 == correct2) {
                this.movehourvalue = this.movehourvalue;
                } else {
                this.movehourvalue = parseInt(this.movehourvalue / 30) * 30 + correct1;
                const hour = document.getElementById("hourhand");
                hour.style.transform = "rotate(" + this.movehourvalue + "deg)";
                }

                var disX = e.clientX - pointleft - 25 ;
                var disY = 25 + pointtop -e.clientY;
                // mousemove的时候调用一个闭包，前两个参数分别表示之前的初始坐标
                document.onmousemove = this.listenerMove(disX,disY,true);

                document.onmouseup = () =>{
                    document.onmousedown = null;
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }else{
                document.onmousemove = e =>{
                    let disx = e.clientX - pointleft - 25 ;
                    let disy = 25 + pointtop -e.clientY;
                    this.calculateangle(disx,disy);
                    odiv.style.transform = "rotate(" + this.moveangle + "deg)";
                }
                document.onmouseup = () =>{
                    this.moveminutevalue = this.moveangle;
                    document.onmousedown = null;
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }

            
        },
        movesecond:function(e){
            e.preventDefault();
            e.stopPropagation();

            let odiv = e.target;
            const point = document.getElementById("clockpoint");
            const pointleft = parseInt(point.getBoundingClientRect().left);
            const pointtop = parseInt(point.getBoundingClientRect().top);

            if(this.linkmovevalue){
                var disX = e.clientX - pointleft - 25 ;
                var disY = 25 + pointtop -e.clientY;
                // mousemove的时候调用一个闭包，前两个参数分别表示之前的初始坐标
                document.onmousemove = this.listenerMove(disX,disY,false);

                document.onmouseup = () =>{
                    document.onmousedown = null;
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }else{
                document.onmousemove = e =>{
                let disx = e.clientX - pointleft - 25 ;
                let disy = 25 + pointtop -e.clientY;
                this.calculateangle(disx,disy);
                odiv.style.transform = "rotate(" + this.moveangle + "deg)";
                }
                document.onmouseup = () =>{
                    this.movesecondvalue = this.moveangle;
                    document.onmousedown = null;
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
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
        // 利用闭包实时监听鼠标位置的变化，根据变化值加了之后来判断是否经过0点处
        listenerMove:function(x, y, minOrsec){
            let originX = x;
            let originY = y;

            return e =>{
                const point = document.getElementById("clockpoint");
                const pointleft = parseInt(point.getBoundingClientRect().left);
                const pointtop = parseInt(point.getBoundingClientRect().top);
                var disx = e.clientX - pointleft - 25 ;
                var disy = 25 + pointtop -e.clientY;

                this.calculateangle(disx,disy);

                // 计算移动产生的角度，先用余弦公式求出cos值，再反余弦求出角度
                const cos =
                (disx * originX + disy * originY) /
                (Math.sqrt(disx * disx + disy * disy) *
                    Math.sqrt(originX * originX + originY * originY));
                var xita = Math.acos(cos) / Math.PI * 180;

                // 判断指针是顺时针移动还是逆时针移动
                if ((originY > 0 && disy > 0) || (originY < 0 && disy < 0)) {
                if (Math.atan2(originY, originX) > Math.atan2(disy, disx)) {
                    // console.log("顺时针");
                    this.linkmove(minOrsec, xita);
                } else {
                    // console.log("逆时针");
                    this.linkmoveneg(minOrsec, xita);
                }
                } else if (
                (originX > 0 && originY > 0 && disy < 0) ||
                (originX < 0 && originY < 0 && disy > 0)
                ) {
                // console.log("顺时针");
                this.linkmove(minOrsec, xita);
                } else if (
                (originX > 0 && originY < 0 && disy > 0) ||
                (originX < 0 && originY > 0 && disy < 0)
                ) {
                // console.log("逆时针");
                this.linkmoveneg(minOrsec, xita);
                }

                // 设置css的transform值，使得指针角度跟随变化
                if (!minOrsec) {
                    const second = document.getElementById("secondhand");
                    second.style.transform = "rotate(" + this.movesecondvalue + "deg)";
                }
                const minute = document.getElementById("minutehand");
                minute.style.transform = "rotate(" + this.moveminutevalue + "deg)";
                const hour = document.getElementById("hourhand");
                hour.style.transform = "rotate(" + this.movehourvalue + "deg)";

                // 改变赋值，可以使得一直move的情况下实时更改初始值
                [originX, originY] = [disx, disy];
            }
        },
        // 顺时针移动
        linkmove: function(minorsec, Xita) {
        if (minorsec) {
            this.moveminutevalue = this.moveangle;
            this.movehourvalue = this.movehourvalue + Xita / 12;
        } else {
            this.movesecondvalue = this.movesecondvalue + Xita;
        }
        if (this.movesecondvalue > 360) {
            this.movesecondvalue = this.moveangle;
            this.moveminutevalue = this.moveminutevalue + 6;
            this.movehourvalue = this.movehourvalue + 0.5;
        } else {
            this.movesecondvalue = this.moveangle;
        }
        if (this.moveminutevalue > 360) {
            this.moveminutevalue = this.moveminutevalue - 360;
        }
        if (this.movehourvalue > 360) {
            this.movehourvalue = this.movehourvalue - 360;
        }
        },
        // 逆时针移动
        linkmoveneg: function(minorsec, Xita) {
        if (minorsec) {
            this.moveminutevalue = this.moveangle;
            this.movehourvalue = this.movehourvalue - Xita / 12;
        } else {
            this.movesecondvalue = this.movesecondvalue - Xita;
        }
        if (this.movesecondvalue < 0) {
            this.movesecondvalue = this.moveangle;
            this.moveminutevalue = this.moveminutevalue - 6;
            this.movehourvalue = this.movehourvalue - 0.5;
        } else {
            this.movesecondvalue = this.moveangle;
        }
        if (this.moveminutevalue < 0) {
            this.moveminutevalue = this.moveminutevalue + 360;
        }
        if (this.movehourvalue < 0) {
            this.movehourvalue = this.movehourvalue + 360;
        }
        },
        changelinkmove:function(){
            this.linkmovevalue = !this.linkmovevalue;
            if(this.linkmovevalue){
                this.btvalue = "指针联动";
            }else{
                this.btvalue = "指针不联动";
            }
        },
        changesecondhand:function(){
            this.seensecondhand = !this.seensecondhand;
            if(this.seensecondhand){
                this.btsecondvalue = "秒针显示";
            }else {
                this.btsecondvalue = "秒针不显示";
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
#linkmove{
    width: 10%;
    height: 10%;
    font-size: 20px;
}
#btsecond{
    width: 10%;
    height: 10%;
    font-size: 20px;
}
</style>
