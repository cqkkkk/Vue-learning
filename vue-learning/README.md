# vue-learning

### 2018.08.28
#### 1.添加dragmove组件，实现简单的点击拖拉移动主要原理，down的时候记录鼠标和tree的初始位置，move的时候计算出鼠标的移动位置差，由位置差计算出现在tree应当在的位置。

### 2018.08.29
#### 1.添加新组件,获取当前的时间并且能够按照意愿将其格式化.格式:年-月-日 时:分:秒
#### 2.使用setInterval设置定时器,每1000毫秒定时更新一次数据,实时显示时间,这里要注意的是setInterval要放在mounted中,且mounted中是不能够直接this.来访问data中的数据值或者methods中的函数.故访问相对应dom元素来修改它的value值,且写多一遍函数.
#### 3.更新dragmove组件,添加第二种方法,主要原理是在down的时候计算出鼠标与图片的相对位置,move的时候可以获取鼠标的实时位置,减去相对位置就是图片的实时位置.
#### 4.添加第三种拖拉移动的方法,使用一个闭包.闭包中能够一直保存着鼠标和图片上一次触发时刻的位置信息,在move过程中的下一次触发时,与上一次触发保存的位置进行比较,计算出鼠标位置变化值,由此得到图片的实时位置值.

### 2018.08.30
#### 1.添加新组件，clock组件，使用canvas简单画出时钟和时针分针秒针，使用css的transform属性，里面有一个rotate值，可以调节指针的旋转值。这里要注意，要将旋转的中点设置为底部中点。原来默认的是设置的图片的中心点，不符合我们的要求。现在暂时能够实现不联动的随鼠标移动指针旋转。

### 2018.08.31
#### 1.在学习HTML5的过程中，发现在HTML5当中添加了拖放（drag and drop），可以很轻易就实现拖拉移动，但是这个可以轻易实现拖拉也有不好的点，其点击移动时原图片依旧还在原地，并且产生一个随着鼠标移动的透明度较低的复制图片，只有在drop放下的时候才会决定到底是将图片放置到新区域还是新区域不允许留在老区域，没有拖拉移动的动画效果。添加dragAndDrop组件，学习对比之前前两天做的dragmove组件。
#### 2.花费较长时间才将拖拉组件添加好，vue中使用与在html网页文件中使用还是有些区别的，事件监听要加上v-on，监听的事件名字去掉前面的on，执行的函数要在event前面加上$符号等，已将对应的html文件加到public文件夹下，方便对比学习。
#### 3.添加分针联动状态下的move，即移动分针时时针随之一起变化。因为移动前可能处在不联动的状态，所以一开始时需要先进行校正，使得时针与分针的值相互对应。实现联动的难点是要判断分针是顺时针还是逆时针，以及要怎么判断分针经过零点处，当分针转很多圈时要怎么判断。该文档中采用的方法是利用闭包来做，因为闭包可以随时帮我保存上一时刻的坐标值，根据坐标值就可以计算出角度值。实时更新指针的角度值，就可以判断下一时刻触发move事件时原角度加上现在移动变化角度是否会大于360，或者小于0，并进行下一步的操作。
#### 4.添加秒针联动状态下的move，大概原理即实现同分针实现原理，但是秒针移动时的联动是只有当秒针顺时针经过0点处和逆时针经过0点处时会进行联动。

### 2018.09.03
#### 1.继续完善dragmove组件，希望能够实现点击移动目标时是新复制一个图片，并且新图片会随着鼠标移动而移动，且新图片只能够放在指定的区域内部，若放在其他地方则图片会被删除。还有能够实现一键清除的功能将新复制的全部图片都清空掉。
#### 2.一开始在复制新的tree和新的phone时仍是使用canvas生成一个画一个，但是这样比较麻烦，组件的template又是固定的，因此想到另外一种方法将原来就画好的tree和phone通过canvas自带的toDataURL可以转为相对应的图片链接，并且在模板中来使用即可。
#### 3.注意！模板中的img标签的src属性前面要加":"冒号，不然会一直报错！！！
#### 4.该组件还要继续更新，实现判断位置，以及新复制的图片也能自由移动，新图片统一不存在复制图片功能。

### 2018.09.06
#### 1.dragmove组件：新复制的图片也能够单纯实现移动的功能。

### 2018.09.07
#### 1.新增translate组件，能够实现简单2D的平移效果，并使用按钮可以控制start，stop，reset等功能。主要使用的是requestAnimationFrame这个动画请求来实现动画效果。
#### 2.新增crossroad组件，主要做的是一个十字路口，其基础就是上面translate组件上面的平移动画，只是加上了一个背景，加上一些边缘的判断，也较简单。

### 2018.09.10
#### 1.新增svgtest组件，主要是学习使用svg图标，这里引进了一个库vue-awesome，引进库之后通过设置icon的name属性就可以显示相应的图标。
#### 2.利用引进的库来创建一个简单的打分系统，可能之前的想法就是使用五个图标，然后在点击其中的图标之一的时候就切换这些图标的状态，但是这个参考网站上提供的想法是利用数据来控制图标，更改时也只需改变其中的数据即可。全部只需要一个<li>即可，使用vue的v-for来循环获得这些数据。在点击时就可以将相应的参数star直接传入到要执行的函数之中，更改data中的值来更新整一个打分图标的状态。
```shell
    <ul class="list">
        <!-- 使用 Vue 的数据来设置组件状态 -->
        <li v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star" class="star" @click="rate(star)">
            <icon :name="star <= stars ? 'star' : 'star-of-life'"/>
        </li>
    </ul>
```
```shell
    rate:function(star){
        //原版（实际不能给出0评分）
        // this.stars = star;
        //改进版（重新点击同一颗 star，并切换至其当前状态，而不是保持 active 状态。）
        this.stars = this.stars === star ? star - 1 : star
    }
```
#### 3.之前，做的组件，它们的数据在数据属性中被硬编码。但是如果我们希望我们的组件实际上是可复用的，需要能够从其实例传递自定义数据。在vue.js中传递自定义数据可以通过props来做到。并且，我们还可以对要传递的props进行验证，可以做到：检查类型，要求定义一个 prop 属性，设置默认值，并执行自定义验证。
```shell
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
    <svgtest :grade="3"></svgtest>
```

### 2018.09.21
#### 1.添加router用于管理页面路由，
```shell
    //首先要将依赖import进来，还有一些你要放在相应路由地址下的组件也要import（此处省略）
    import Vue from 'vue';
    import Router from 'vue-router';
    
    Vue.use(Router);
    
    //此处举部分例子，这样就可以在/index路由地址下访问到app组件，在/demo/clock路由地址下访问到clock组件
     export default new Router({
         base: process.env.BASE_URL,
         routes: [
             {
                 path: '/index',
                 name:'home',
                 component: app
             },
            {
                path: '/demo/clock',
                name: 'clock',
                component : clock
            },
         ]
     })   
```
#### 2.添加好了上面的router.js文件之后还需要做一点其他操作。
```
    //App.vue文件中模板中只需添加<router-view>
    <template>
        <router-view/>
    </template>
    
    //main.js文件中要import vue-router，且new Vue中要加上router
    import router from './router';
    
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
```
#### 3.整理项目的框架，尤其是在之前所有组件都是直接放在components文件夹中的根目录下，这样并不好。如何划分你的组件和目录是没有严格的限定的，你可以在一个组件目录下编写多个组件，但是绝对不可以将自己的组件直接暴露在 components 目录下面。所以最好在components文件夹下建子文件夹，将相应的vue组件放在子文件夹中。
#### 4.之前是将所有组件都import到app组件中，然后在组件中设置v-if来显示或者隐藏相应的组件。现在这个主页面就完全不需要这样子做，没有必要再去将所有的子组件都import进来，而只需使用this.router.push就可以转换到想要访问的组件对应的路由。
```shell
    //举例
    //html部分
    <input type="button" value="dragmove" v-on:click="choosePage('dragmove')">
    <input type="button" value="getnowtime" v-on:click="choosePage('getnowtime')">
    <input type="button" value="clock" v-on:click="choosePage('clock')">
    //js部分 转换路由函数
    choosePage(src) {
        console.log(src);
		this.$router.push({ path: `/demo/${src}` });
	}
```
#### 5.修改test.vue组件，使用v-for，可以节省大部分的代码量
```
    //注意要加上最后面的key
    <input type="button" v-for="(src,index) in srcList" :value='src' @click='choosePage(src)' :key="index">

    data() {
        return {
            srcList:['clock','getnowtime','dragmove','draganddrop','translate','crossroad','svgtest']
        };
    },
```
#### 6.添加animation组件，能够使用css的animation操作多步动画。animation这个css3属性在[日志](https://github.com/cqkkkk/Daily-Record/blob/master/dailyrecord(2018.09).md#20180915%E5%B1%B1%E7%AB%B9%E5%8D%B3%E5%B0%86%E7%99%BB%E9%99%86%E5%B9%BF%E4%B8%9C)中有做过详细解释。
#### 7.各个多步骤的动画之间采用的是setTimeout这个方法来将全部步骤串连在一起，但是这样做的话每当计算一个步骤的延时时，要将前面的全部步骤的时间加在一起，越到后面加这个时间就越麻烦。swnb写了一个linkTimeout的类可以将setTimeout连在一起，具体用法待进一步理解。（待更新）
#### 8.SASS是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。[阮一峰的网络日志-SASS用法指南](http://www.ruanyifeng.com/blog/2012/06/sass.html)

