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
        {img: 'https://f12.baidu.com/it/u=4112654053,4071846932&fm=72'},
        {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1173172369,2359613451&fm=26&gp=0.jpg'},
        {img: 'https://f12.baidu.com/it/u=1208544201,1064095414&fm=72'},
        {img: 'https://f12.baidu.com/it/u=2231634963,330068410&fm=72'},
        {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1130320778,2467377452&fm=26&gp=0.jpg'},
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
    margin-bottom .5rem
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
