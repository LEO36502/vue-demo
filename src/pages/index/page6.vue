<template lang="html">
  <div class="page">
    <div class="content" ref="popWrapper">
      <ul>
        <li class="item-list" v-for="(item, index) in pops" :keys="index">
          <div class="pop-image">
            <img alt="" v-lazy="item.img">
          </div>
          
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      pops: [
        {img: 'http://img1.qunarzz.com/sight/p0/1810/ab/ab0f6f1a51c5b6fda3.img.jpg_710x360_ed2201e7.jpg'},
        {img: 'http://img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_710x360_fcbed267.jpg'},
        {img: 'http://img1.qunarzz.com/sight/p0/1810/22/226c137568f18ac0a3.water.jpg_710x360_1a5446bf.jpg'},
        {img: 'http://img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_710x360_673fd990.jpg'},
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
</script>

<style lang="stylus" type="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin.styl'
.page 
  overflow hidden
  height 100%
  position absolute
  left 0
  right 0
  .header
    position fixed
    left 0
    right 0
    top .1rem
    right 0
    height 1.24rem
    border-1px()
    line-height 1.24rem
    font-size .52rem
    text-align center
  .nav
    margin-left 1rem
    padding .1rem 0
  .content
    margin-top -0.1rem
    margin-bottom .2rem
    height 14rem
    .item-list
      background #ffffff
      height 5rem
      &:last-child
        padding-bottom 2rem
      .pop-image
        width 100%
        position relative
        img
          width 100%
        img[lazy=loading]
          display block
          width  100%
          height 5rem
          background #000
          margin auto
</style>
