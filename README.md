# vue-quick-swiper

基于vue的移动端轮播图插件

默认样式：可自定义更改导航样式


## 安装
---
`npm install vue-quick-swiper -S`

```
// 推荐引入方式
// 使用vue-cli webpack时在main.js中引入
import Vue from 'vue';
import VueQuickSwiper from 'vue-quick-swiper;

Vue.use(VueQuickSwiper)
```

## 使用
---
```html
<template>
    <div id="app" style="overflow: hidden;">
        <!-- 注意：quick-swiper包裹容器一定要有overflow:hidden; -->
        <quick-swiper :getIndex="getIndex">
           <quick-swiper-item><div class="switem">1</div></quick-swiper-item> 
           <quick-swiper-item><div class="switem">2</div></quick-swiper-item> 
           <quick-swiper-item><div class="switem">3</div></quick-swiper-item> 
           <quick-swiper-item><div class="switem">4</div></quick-swiper-item> 
           <quick-swiper-item><div class="switem">5</div></quick-swiper-item> 
        </quick-swiper>
    </div>
</template>
```
```javascript
export default {
  name: "Message",
  data() {
    return {
      dataList: [1, 2, 3, 4, 5]
    };
  },
  methods: {
      // 获得轮播图索引
    getIndex(index) {
      console.log(index)
    },
  },
};
```
```css
*{
    margin:0;
    padding:0;
}
html,body,#app{
    height:100%;
    overflow: hidden;
}
.switem{
    height: 200px;
    width:100%;
    background: lightgreen;
}
```

### 下拉刷新配置
---
参数|类型|说明|备注
:--:|:--:|:--:|:--:
v-bind:space|number|轮播图间隔|默认:3000
v-bind:getIndex|Function|获得轮播图索引|
---
### 自定义索引组件方法:
```html
<template slot="dots">
    <div>根据getIndex返回的索引,自定义索引组件</div>
</template>    
```

## 版本更新说明
---
版本号|说明|
:--:|:--:|
0.0.2|更新文档
0.0.1|项目初始化

## 联系我
---
QQ:215028726
