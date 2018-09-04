
<template>
  <div>
    <div class="vq-swiper">
      <div class="vq-swiper-container" ref="container">
        <slot></slot>
      </div>
      <div class="vq-swiper-dots">
        <div class="vq-swiper-dot" v-for="(item,index) in imgNum" :class="{'vq-swiper-select':selectIndex == index}" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      startX: 0,
      selectIndex:0,
      endX: 0,
      imgNum: 0,    // 图片数
      space:1500,
      timer:{}, //定时器
      stopAuto:false,  // 自动轮播开关
    };
  },

  components: {},

  computed: {},
  watch:{
    index(newData,oldData){
      if(newData > this.imgNum){
        this.selectIndex = 0
        console.log(0)
      }else if(newData === 0){
        this.selectIndex = this.imgNum - 1
        console.log(this.imgNum - 1)
      }else if(newData === 1){
        
      }else{
        this.selectIndex = newData - 1
        console.log(newData - 1)
      }
      
    }
  },
  mounted() {
    this.bindEvent();
    this.insertNode();
    this.initPosition();
    this.autoMove();
  },
  methods: {
    bindEvent() {
      this.$nextTick(() => {
        // 判断是否是移动端 支持touch事件
        if ("ontouchend" in document) {
          this.$el.addEventListener("touchstart", this.onTouchStart);
          this.$el.addEventListener("touchmove", this.onTouchMove);
          this.$el.addEventListener("touchend", this.onTouchEnd);
        } else {
          console.log("不支持");
        }
      });
    },
    // 触摸开始
    onTouchStart(e) {
      this.stopAuto = true
      const screenX = e.touches[0].screenX;
      // 记录初始位置
      this.startX = screenX;
      this.$refs.container.style["-webkit-transition"] = null;
      this.$refs.container.style["transition"] = null;
      // 边界条件
      if(this.index === 0){
        this.index = this.imgNum
      }

      if(this.index === this.imgNum + 1){
        this.index = 1;        
      }  
    },
    // 触摸中
    onTouchMove(e) {
      const screenX = e.touches[0].screenX;
      const width = this.$el.getBoundingClientRect().width;
      // 记录移动结束位置
      this.endX = screenX - this.startX;
      this.handleMove(this.endX + width * -this.index);
    },
    // 触摸结束
    onTouchEnd() {
      // 轮播图宽
      const width = this.$el.getBoundingClientRect().width;
      // 移动距离
      const dis = Math.abs(this.endX);
      // 如果移动超过轮播图宽的一半
      if (dis > width / 2) {
        if (this.endX < 0) {
          this.index++;
        } else {
          this.index--;
        }
      }
      this.endX = 0;
      this.handleEnd();
    },
    // 控制移动
    handleMove(dis) {
      this.stopAuto = false  
      this.$refs.container.style[
        "-webkit-transform"
      ] = `translate3d(${dis}px,0,0)`;
      this.$refs.container.style["transform"] = `translate3d(${dis}px,0,0)`;
    },
    // 触摸结束滚动
    handleEnd() {
      const width = this.$el.getBoundingClientRect().width;
      this.$refs.container.style["-webkit-transition"] = `all .2s`;
      this.$refs.container.style["transition"] = `all .2s`;
      this.handleMove(-width * this.index);
    },
    // 无缝滚动复制第一和最后一个节点
    insertNode() {
      this.$nextTick(() => {
        const container = this.$refs.container.children;
        this.imgNum = container.length
        const firstNode = container[0].cloneNode(true);
        const lastNode = container[container.length - 1].cloneNode(true);
        this.$refs.container.insertBefore(lastNode, container[0]);
        this.$refs.container.appendChild(firstNode);
      });
    },
    // 初始化轮播图位置
    initPosition(){
      const width = this.$el.getBoundingClientRect().width;
      this.handleMove(-width * 1);
    },
    // 自动轮播
    autoMove(){
      if( this.stopAuto){
        return
      }
      this.timer = setTimeout(()=>{
        const width = this.$el.getBoundingClientRect().width;
        this.$refs.container.style["-webkit-transition"] = null;
        this.$refs.container.style["transition"] = null;
      if(this.index === this.imgNum + 1){
        this.index = 1;
        this.$refs.container.style[
        "-webkit-transform"
      ] = `translate3d(${-width}px,0,0)`;
      this.$refs.container.style["transform"] = `translate3d(${-width}px,0,0)`;
      this.space = 0
      this.autoMove()
      }else{
        this.space = 1500
        this.index = this.index+1
        this.$refs.container.style["-webkit-transition"] = `all .2s`;
        this.$refs.container.style["transition"] = `all .2s`;
        this.handleMove(-width * this.index); 
        this.autoMove()
      }
      },this.space)
    }
  }
};
</script>
<style scoped>
.vq-swiper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.vq-swiper-container {
  display: flex;
}

.vq-swiper-dots{
  position:absolute;
  bottom:20px;
  left:50%;
  transform: translate(-50%);
  display: flex;
  height:6px;
}
.vq-swiper-dot{
  margin: 0 5px;
  width:6px;
  height:6px;
  border-radius: 3px;
  background: #d0cdd1;
}
.vq-swiper-select{
  background: #53b2fd;
}
</style>