//创建一个类 Timeout
class Timeout {
    static create() {
        return new Timeout();
    }
    constructor() {
        this.fnLinkList = [];
    }
    //调用then这个方法的时候将要执行的函数以及延时的时间放进一个对象中添加到fnLinkList中
    then(fn,time = 0){
        this.fnLinkList.push({
            fn,
            time
        });
        return this;
    }
    //真正开始执行动画的方法
    next() {
        if (this.fnLinkList.length === 0) return;
        //删除掉fnLinkList最前面的一个元素，并且赋值
        const { fn , time } = this.fnLinkList.shift();
        // 核心仍然是setTimeout
        setTimeout(() => {
            fn();
            // 每次延时到了，触发相对应的函数的同时又启动了下一个延时，直至List被删除完毕
            this.next();
        },time);
    }
    //start方法，实际上调用next方法
    start() {
        this.next();
    }
}
//将新建的linkTimeoutexport
export const linkTimeout = Timeout.create;