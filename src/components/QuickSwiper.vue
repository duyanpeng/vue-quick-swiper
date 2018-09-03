
<template>
  <div>
    <div class="vq-swiper">
      <div class="vq-swiper-container" ref="container">
        <slot></slot>
      </div>
      <div class="vq-swiper-dots"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      startX: 0,
      endX: 0,
      imgNum: 0,    // 图片数
    };
  },

  components: {},

  computed: {},

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
          this.$el.addEventListener("webkitAnimationEnd",()=>{
            console.log('gggg')
          })
        } else {
          console.log("不支持");
        }
      });
    },
    // 触摸开始
    onTouchStart(e) {
      const screenX = e.touches[0].screenX;
      // 记录初始位置
      this.startX = screenX;
      this.$refs.container.style["-webkit-transition"] = null;
      this.$refs.container.style["transition"] = null;
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
      console.log(this.index)

      if(this.index === 0){
        this.index = this.imgNum
      }

      if(this.index === this.imgNum + 1){
        this.index = 1;
        
        const width = this.$el.getBoundingClientRect().width;

      //   this.$refs.container.style[
      //   "-webkit-transform"
      // ] = `translate3d(${-width * this.index}px,0,0)`;
      // this.$refs.container.style["transform"] = `translate3d(${-width * this.index}px,0,0)`;
      
      // return
      }   
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
      this.timer = setInterval(()=>{
     //  this.index = this.index+1
      // this.handleEnd()  
      },1500)
    }
  }
};
</script>
<style scoped>
.vq-swiper {
  width: 100%;
  overflow: hidden;
}
.vq-swiper-container {
  /* transform: translate(-375px); */
  display: flex;
}
.vq-swiper-item {
  flex-shrink: 0;
  width: 100%;
  height: 200px;
  background: lightgreen;
}
</style>