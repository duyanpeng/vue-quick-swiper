
<template>
<div>
   <div class="vq-swiper">
      <div class="vq-swiper-container" ref="container">
        <div class="vq-swiper-item">1</div>
        <div class="vq-swiper-item">2</div>
        <div class="vq-swiper-item">3</div>
        <div class="vq-swiper-item">4</div>
      </div>
      <div class="vq-swiper-dots"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        index: 0,
        startX:0,
        endX:0
    };
  },

  components: {},

  computed: {},

  mounted(){
    this.bindEvent()
  },
  methods: {
    bindEvent(){
      this.$nextTick(()=>{
        // 判断是否是移动端 支持touch事件
        if("ontouchend" in document){
          this.$el.addEventListener('touchstart',this.onTouchStart);
          this.$el.addEventListener('touchmove',this.onTouchMove);
          this.$el.addEventListener('touchend',this.onTouchEnd);
        }else{
          console.log('不支持')
        }
      })
    },
     // 触摸开始
     onTouchStart(e){
       const screenX = e.touches[0].screenX;
       // 记录初始位置
       this.startX = screenX;
       this.$refs.container.style["-webkit-transition"] = `all 0s`;
       this.$refs.container.style["transition"] = `all 0s`;
     },
     // 触摸中
     onTouchMove(e){
       const screenX = e.touches[0].screenX;
       const width = this.$el.getBoundingClientRect().width
       // 记录移动结束位置
       this.endX = screenX - this.startX
       this.handleMove(this.endX + width *(-this.index))
     },
     // 触摸结束
     onTouchEnd(){
       // 轮播图宽
       const width = this.$el.getBoundingClientRect().width
       // 移动距离
       const dis =  Math.abs(this.endX)
       // 如果移动超过轮播图宽的一半
       if(dis > width/2){
         if(this.endX < 0){
           this.index++
         }else{
           this.index--
         }
       } 
       this.endX = 0
       console.log(this.index)
       this.handleEnd()
     },
     // 控制移动
     handleMove(dis){
       this.$refs.container.style["-webkit-transform"] = `translate3d(${dis}px,0,0)`;
       this.$refs.container.style["transform"] = `translate3d(${dis}px,0,0)`;
     },
     // 触摸结束滚动
     handleEnd(){
       const width = this.$el.getBoundingClientRect().width;
       this.$refs.container.style["-webkit-transition"] = `all .2s`;
       this.$refs.container.style["transition"] = `all .2s`;
       this.handleMove(-width * this.index)
     }
  }
}

</script>
<style scoped>
.vq-swiper{
  width:100%;
  overflow: hidden;
}
.vq-swiper-container{
  /* transform: translate(-375px); */
  display:flex;
}
.vq-swiper-item{
  flex-shrink:0;
  width:100%;
  height:200px;
  background: green;
}
</style>