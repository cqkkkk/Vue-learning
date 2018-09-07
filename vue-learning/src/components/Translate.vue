<template>
    <div>
        <img src="../../public/images/draganddrop/shoes2.png" id="shoes" alt="shoes">
        <input type="button" value="start" v-on:click="start">
        <input type="button" value="stop" v-on:click="stop">
        <input type="button" value="reset" v-on:click="reset">
    </div>
    
</template>

<script>
export default {
    name:"translate",
    components:{},
    data(){
        return{
            leftvalue:100,
            topvalue:250,
        };
    },
    methods:{
        start:function(){
            this.leftvalue += 5;
            var shoess = document.getElementById("shoes");
            shoess.style.left = this.leftvalue + "px";
            if(window.innerWidth-this.leftvalue>220){
                window.globalID = requestAnimationFrame(this.start);
            }
        },
        stop:function(){
            cancelAnimationFrame(window.globalID);
        },
        reset:function(){
            this.leftvalue = 100;
            var shoess = document.getElementById("shoes");
            shoess.style.left = this.leftvalue + "px";
        }
    },
    mounted(){
    }
}
</script>

<style>
#shoes{
    position: absolute;
    left:100px;
    top: 250px;
}
</style>


