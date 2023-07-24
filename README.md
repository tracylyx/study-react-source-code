# 参考文档

- [React 之如何调试源码](https://juejin.cn/post/7168821587251036167#heading-9)
- [react eject后报错Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` env](https://blog.csdn.net/exxes/article/details/123980432)

# React hook被执行的过程
- hook什么时候被调用？
    - 文件：ReactRootDom，react-dom render执行，其内部调用`updateContainer`
    - 文件：ReactFiberReconciler.old.js
        - updateContainer() 在`ReactFiberReconciler`文件中