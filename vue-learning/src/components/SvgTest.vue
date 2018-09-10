<template>
    <div class="rating">
        <ul class="list">
        <li class="star active"><icon name="star"/></li>
        <li class="star active"><icon name="star"/></li>
        <li class="star"><icon name="star"/></li>
        <li class="star"><icon name="star-of-life"/></li>
        <li class="star"><icon name="star-of-life"/></li>
        </ul>
        <span>3 of 5</span>
        <!-- 添加选项 -->
        <ul>
            <li><icon name="sync" scale="2" spin/></li>
            <li><icon name="comment" flip="horizontal"/></li>
            <li><icon name="code-branch" label="Forked Repository"/></li>
        </ul>
        <ul class="list">
            <!-- 使用 Vue 的数据来设置组件状态 -->
            <li v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star" class="star" @click="rate(star)">
                <icon :name="star <= stars ? 'star' : 'star-of-life'"/>
            </li>
        </ul>
        <!-- 抽象到一个计算属性 -->
        <span v-if="seencounter">{{ counter }}</span>
  </div>
</template>

<script>
import 'vue-awesome/icons/star';
import 'vue-awesome/icons/star-of-life';
import 'vue-awesome/icons/sync';
import 'vue-awesome/icons/comment';
import 'vue-awesome/icons/code-branch';

// import 'vue-awesome/icons/star-of-life'
import Icon from 'vue-awesome/components/Icon';
export default {
    props: {
      grade: {
        type: Number,
        required: true
      },
      maxStars: {
        type: Number,
        default: 5
      },
      hasCounter: {
        type: Boolean,
        default: true
      }
    },
    // props: ['grade', 'maxStars', 'hasCounter'],
    name:"svgtest",
    components:{Icon},
    data(){
        return{
          stars: this.grade,
        };
    },
    methods:{
      rate:function(star){
        //原版（实际不能给出0评分）
        // this.stars = star;
        //改进版（重新点击同一颗 star，并切换至其当前状态，而不是保持 active 状态。）
        this.stars = this.stars === star ? star - 1 : star
      }
    },
    computed: {
        counter: function(){
            return `${this.stars} of ${this.maxStars}`
        }
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

<style scoped>
  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #a7a8a8;
  }
  .list {
    margin: 0 0 5px 0;
    padding: 0;
    list-style-type: none;
  }
  .list:hover .star {
    color: #f3d23e;
  }
  .star {
    display: inline-block;
    cursor: pointer;
  }
  .star:hover ~ .star:not(.active) {
    color: inherit;
  }
  .active {
    color: #f3d23e;
  }
</style>
