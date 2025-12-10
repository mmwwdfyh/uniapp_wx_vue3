### 介绍

uni-app vue3+ts+vite 基础框架

- api：是对 flyio 的一个封装，可以学习一下，感觉可以改进的也可以自行改动
- pages，services，store：主要的业务代码
- components：是用来放一些公共组件的地方。注意，一定是公共组件才放这里面，这意味着很多页面都可以使用
- types：是用来存放类型

##### 关于页面的组成部分

- pages：主页面
- components：页面的公共组件
- api/apiConfig：配置接口
- services：封装接口的业务代码
<!-- 调用方式 -->
<!-- import { xxx } from "@/services/index"; -->

<!-- const handle = async () => {
  try {
    const params = {
      xxx: '111',
      xxx: '222'
    };
    const result = await xxx(params);
    console.log('获取成功:', result);
  } catch (error) {
    console.error('获取失败:', error);
  }
}; -->
### 依赖

1. tmui：
   <https://tmui.design/>

2. animate.css

3. pinia

4. flyio

5. 请使用 pnpm 包管理工具：原因是可能存在一些依赖问题，导致 npm 或者 yarn 跑不起来
