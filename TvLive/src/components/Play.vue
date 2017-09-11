<template>
  <div class="play">
      <div class="hd">
          <span class="back" @click="back">&lt;返回</span>
          <span class="name">{{name}}</span>
      </div>
      <video src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" ref="video" class="video" preload></video>
  </div>
</template>

<script>
export default {
  name:'play',
  data() {
      return {
          name:''
      }
  },
  created() {      
      this.src = this.$route.query.src
  },
  mounted() {
      this.name = this.$route.query.name
      this.video = this.$refs.video
      this.video.setAttribute('src', this.src)
      setTimeout(() => {          
          this.video.play()
      },20)
  },
  methods:{
      back() {
          this.$router.push({
              path:'/home'
          })
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl'
.play
    width 100%
    overflow hidden
    .hd
        position relative
        width 100%
        height 120px
        line-height 120px
        overflow hidden
        text-align center
        border-1px(#ccc)
        .back
            position absolute
            left 30px
            font-size 34px
        .name
            font-size 34px
    .video
        width 100%
        margin-top 20px
</style>
