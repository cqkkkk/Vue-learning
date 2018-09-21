<template>
        <div id="container">
            <div id="water" alt="water">
					<img src="../../../public/images/animation/dropper.png" v-show="dropperstate" alt="dropper" id="dropper_normal">
                    <img src="../../../public/images/animation/dropper_water.png" v-show="!dropperstate" alt="dropper" id="dropper_full">
					<img src="../../../public/images/animation/water_bottle.png" alt="bottle" id="bottle">
					<img src="../../../public/images/animation/top_normal.png" v-show="topstate" alt="top" id="top_normal">
                    <img src="../../../public/images/animation/top_press.png" v-show="!topstate" alt="top_press" id="top_press">
					<img src="../../../public/images/animation/fall_water.png" v-show="seenwater" alt="fallwater" id="fallwater">
			</div>
            <input type="button" value="开始演示" @click = "startanimation">
        </div>    
			
</template>

<script>
export default {
    name:'animation',
    data() {
        return {
            dropperstate:true, //true表示吸管没吸水状态，false表示吸管吸水状态
            topstate:true, //true表示帽子正常状态，false表示帽子按压状态
            seenwater:false //true表示看到水滴，false表示不看到水滴
        };
    },
    methods:{
        startanimation(){
            console.log('演示多步动画效果');
            const dropper1 = document.getElementById('dropper_normal');
            const dropper2 = document.getElementById('dropper_full');
            const top1 = document.getElementById('top_normal');
            const top2 = document.getElementById('top_press');
            const water = document.getElementById('fallwater');
            setTimeout(() => {
                this.topstate = false;
            },200);
            setTimeout(() => {
                this.topstate = true;
            },300)
            setTimeout(() => {
                this.dropperstate = false;
                top1.classList.add('move_top');
                dropper2.classList.add('move_dropper');
            },500)
            setTimeout(() => {
                top1.style.top = '-280px';
                top1.style.left = '222px';
                top2.style.top = '-280px';
                top2.style.left = '222px';
                dropper2.style.left = '229px';
                dropper2.style.top = '-195px';
                dropper1.style.left = '229px';
                dropper1.style.top = '-195px';
                top1.classList.remove('move_top');
                dropper2.classList.remove('move_dropper');
            },2500)
            setTimeout(() => {
                this.topstate = false;
            },2600)
            setTimeout(() => {
                this.topstate = true;
            },2700) 
            setTimeout(() => {
                this.seenwater = true;
                this.dropperstate = true;
            },2800)
            setTimeout(() => {
                water.classList.add('water_fall');
            },2900) 
            setTimeout(() => {
                water.style.top = '240px';
            },3900)
            setTimeout(() => {
                top1.classList.add('back_top');
                dropper1.classList.add('back_dropper');
            },4000)
            setTimeout(() => {
                top1.style.top = '-80px';
                top1.style.left = '22px';
                dropper1.style.left = '29px';
                dropper1.style.top = '5px';
                console.log('演示完毕');
            },6000)

        }
    }
}
</script>

<style lang='scss' scoped>
#water {
	position: absolute;
	left: 50px;
	top: 340px;
	width: 120px;
	height: 200px;
        > img {
            position: absolute;
            &:nth-child(1) {
                left: 29px;
                top: 5px;
            }
            &:nth-child(2) {
                left: 29px;
                top: 5px;
            }
            &:nth-child(3) {
                left: 0px;
                top: 0px;
            }
            &:nth-child(4) {
                left: 22px;
                top: -80px;
            }
            &:nth-child(5) {
                left: 20px;
                top: -80px;
            }
            &:nth-child(6) {
                left: 250px;
                top: -30px;
            }
        }
}
.move_top{
    animation: movetop 2s linear;
}
@keyframes movetop {
    50%{
        left: 22px;
        top: -280px;
    }
    100%{
        left: 222px;
        top: -280px;
    }
}
.back_top{
    animation: backtop 2s linear;
}
@keyframes backtop {
    50%{
        left: 22px;
        top: -280px;
    }
    100%{
        left: 22px;
        top: -80px;
    }
}
.move_dropper{
    animation: movedropper 2s linear;
}
@keyframes movedropper {
    50%{
        left: 29px;
        top: -195px;
    }
    100%{
        left: 229px;
        top: -195px;
    }
}
.back_dropper{
    animation: backdropper 2s linear;
}
@keyframes backdropper {
    50%{
        left: 29px;
        top: -195px;
    }
    100%{
        left: 29px;
        top: 5px;
    }
}
.water_fall{
    animation: waterfall 1s ease-in;
}
@keyframes waterfall {
    100%{
        top: 240px;
    }
}
</style>
