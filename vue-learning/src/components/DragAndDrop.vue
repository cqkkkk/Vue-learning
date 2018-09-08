<template>
    <div>
        <div id="box1" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)"></div>
        <div id="box2" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)"></div>
        <img id="shoes1" src="../../public/images/draganddrop/shoes1.jpg" draggable="true" v-on:dragstart="drag($event)">
    </div>
</template>

<script>
export default {
    name:"draganddrop",
    components:{},
    data(){
        return{
        };
    },
    methods:{
        // drag(event) {
        // window.dom = event.currentTarget;
        // console.log(window.dom);
        // },
        // drop(event) {
        // event.preventDefault();
        // event.target.appendChild(window.dom);
        // },
        // allowDrop(event) {
        // event.preventDefault();
        // }
        allowDrop: function(ev) {
            ev.preventDefault();
        },
        drag: function(ev) {
            ev.dataTransfer.setData("img",ev.target.id);
            // console.log("drag");
        },
        drop: function(ev) {
            ev.preventDefault();
            var data=ev.dataTransfer.getData("img");
            ev.target.appendChild(document.getElementById(data));
            // console.log("drop");
        }
    },
    mounted(){
    }
};
</script>

<style>
#box1{
    position: absolute;
    width: 30%;
    height: 30%;
    left: 5%;
    top: 5%;
    border: 1px solid black;
}
#box2{
    position: absolute;
    width: 30%;
    height: 30%;
    left: 40%;
    top: 5%;
    border: 1px solid black;
}
#shoes1{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    cursor: pointer;
}
</style>

