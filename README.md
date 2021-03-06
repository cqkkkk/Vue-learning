# Vue-learning

### 该项目是本人在学习Vue组件开发时积累的一些经验，制作成的一些vue组件的demo，能够以组件的形式实现一些简单的前端功能，并且能够实现一些简单的2D动画效果。demo较简陋，仅用于参考，而不能直接作为产品，欢迎指正学习！！！

### clock.vue ✔
* 使用canvas画布简单画出时钟，且时钟的指针可拖拉移动，分为联动模式和非联动模式。联动模式下在move时调用一个闭包，实时监听鼠标的位置，判断顺时针，逆时针，是否经过0点等。另外关于时钟我还制作了另一个实时转动的，就是如同现实中的时钟，如需要参考可以移步Canvas-learning项目中的animation文件夹。

### dragmove.vue ✔
* 使用原声js写的能够点击移动相关物体，并且采用了三种不同的方法来写这个点击移动的效果。同时对其中两个物体，实现点击时复制一个同样的物体随鼠标移动，仅母体存在复制功能，新复制的物体仅具备拖拉功能，还加上一键清空功能。

### draganddrop.vue ✔
* html5中新增的可以直接使用的拖拉功能，方法较简单，但是与上一个组件还是有一定的区别，个人更加推荐上一个组件中的方法来实现拖拉效果。这里也写了一个简单的demo供参考。

### GetNowTime.vue ✔
* 获取当前时间，并将其格式化。使用setTimeOut实时显示当前的时间。

### translate.vue ✔
* 使用requestAnimationFrame实现简单2D平移动画。

### crossroad.vue ✔
* 十字路口动画demo，核心即translate组件中的内容。

### svgtest.vue ✔
* 使用vue-awesome（一个用 Font Awesome icons 构建的 Vue.js 的 SVG 图标组件）构建的一个图标星星打分demo。
* [参考网址](https://www.oschina.net/translate/build-your-first-vue-js-component?lang=chs&p=1)

### install vue-router ✔
* 尝试通过使用npm安装vue-router，但是老是提醒失败，不知道是因为node.js没有安装成功还是其他什么原因。
* 直接在vue-learning的package.json文件中的dependencies加上vue-router，再在调试中yarn它会自动去下载安装，即可安装好vue-router。

### add router.js ✔
* 使用vue-router来对页面进行路由管理
* /index 暂时的主页面，可以选择demo中的各个component
* /demo/clock 时钟组件
* /demo/dragmove 拖拉组件
* 其他同理

### install node-sass&sass-loader ✔
* 安装同上，直接在package.json文件中去加入名字和版本号，再yarn编译一下就可以安装好
* 具体用法待进一步学习（css工具）

### add animation.vue ✔
* 之前的动画步骤都是单一的步骤，比如从左往右，从上往下这样。
* 当涉及到多步的步骤时，例如先上再左，再下再右这样就要用到css中的animation来进行操作
* 该组件写了一个小demo使用animation展示多部动画效果

### add linkTimeout.js ✔
* 使用linkTimeout将一系列前后操作的步骤串联起来，逻辑更加清晰
* 具体用法见[内部readme文件](https://github.com/cqkkkk/Vue-learning/tree/master/vue-learning)

### add LinkAnimation.vue ✔
* 添加linkTimeout.js 中导出的方法的使用例子，动画效果同animation.vue
* 使用起来虽然步骤相差不大没有减少，但是在时间延时计算方面更加直接，更加方便，且逻辑更加清晰。

## added by xin
