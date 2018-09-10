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
