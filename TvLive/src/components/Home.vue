<template>
  <div class="home">
      <div class="item" v-for="item in liveData" @click="playSrc(item.src,item.name)">
          <div class="name">{{item.name}}</div>
          <span class="live">Live</span>
      </div>
  </div>
</template>

<script>
import { liveData } from "common/js/liveData.js"
export default {
  name:'home',
  data() {
      return {
          liveData: liveData
      }
  },
  mounted() {
      
  },
  methods:{
      playSrc(src,name){
          this.$router.push({
              path:'/play',
              query:{
                  src,
                  name
              }
          })
      }
  }
}
</script>


<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl'
.home
    width 100%
    .item
        display flex
        align-items center
        justify-content space-around
        width 100%
        height 100px
        font-size 30px
        border-1px(#ccc)
        .name
            width 300px
            font-size 32px
        .live
            background #2196f3
            color #ffffff
            padding 10px 30px
            border-radius 6px
</style>

