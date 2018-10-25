<template lang="html">
  <div>
  此页面暂未制作。
  </div>
</template>
<div class="page">
    <div class="content" ref="popWrapper">
      <ul>
        <li class="item-list" v-for="(item, index) in pops" :keys="index">
          <div class="pop-image">
            <img alt="" v-lazy="item.img">
          </div>
          此页面暂未制作
        </li>
      </ul> 
    </div>
  </div>





<script>

</script>

import BScroll from 'better-scroll'
export default {
  data () {
    return {
      navs:['','',''],
      pops: [
        {img: '',},
       
        
        
      ]
    }
  },
  methods: {
    _initScroll () {
      this.popScroll = new BScroll(this.$refs.popWrapper, {
        click: true,
        probeType: 3
      })
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}





<style lang="stylus" type="stylesheet/stylus" scoped>

</style>

@import '../../common/stylus/mixin.styl'
.page 
  overflow hidden
  height 100%
  position absolute
  left 0
  right 0
  
  .content
    margin-top .2rem
    margin-bottom 5rem
    height 14rem
    .item-list
      background #ffffff
      height 10rem
      &:last-child
        padding-bottom 2rem
      .pop-image
        width 100%
        img
          width 100%
        img[lazy=loading]
          display block
          width  100%
          height 10rem
          background #000
          margin auto
