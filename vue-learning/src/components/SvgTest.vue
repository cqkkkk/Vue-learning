<template>
    <div>
    <ul>
      <li><icon name="star"/></li>
      <li><icon name="star"/></li>
      <li><icon name="star"/></li>
      <li><icon name="star"/></li>
      <li><icon name="star"/></li>
    </ul>
    <span>3 of 5</span>
  </div>
</template>

<script>
import 'vue-awesome/icons/star';

// import 'vue-awesome/icons/star-of-life'
import Icon from 'vue-awesome/components/Icon';
export default {
    name:"svgtest",
    components:{Icon},
    data(){
        return{

        };
    },
    methods:{

    }

}
// <div>
//         <!-- 基础用法 -->
//         <v-icon name="star"/>

//         <!-- 添加选项 -->
//         <v-icon name="sync" scale="2" spin/>
//         <v-icon name="comment" flip="horizontal"/>
//         <v-icon name="code-branch" label="Forked Repository"/>

//         <!-- 堆叠图标 -->
//         <v-icon label="No Photos">
//         <v-icon name="camera"/>
//         <v-icon name="ban" scale="2" class="alert"/>
//         </v-icon>
//     </div>
</script>

<style>

</style>
