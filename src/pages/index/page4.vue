<template lang="html">
  <div class="page">
    <div class="content" ref="popWrapper">
      <ul>
        <article class="slide_wrap">
          <mt-swipe  :auto="4000">
            <mt-swipe-item v-for="(img, index) in slideImg" :key="index">
              <img :src="img" alt="">
            </mt-swipe-item>  
          </mt-swipe>
        </article>
        <div class="list-items">
          <h2 class="items-title">
            <span class="head_bg">
              <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
            </span>
            <span>今日特惠</span>
          </h2>
          <div class="items-img">
            <img src="https://source.qunarzz.com/site/images/wns/20150420_qunar_flight_homepage_top_banner_31_464x320_V2.jpg" alt="">
          </div>
        </div>
        <div class="list-items">
          <h2 class="items-title">
            <span class="head_bg">
              <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
            </span>
            <span>活动推荐</span>
          </h2>
          <div class="items-img">
            <img src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1729749746.jpg" alt="">
          </div>
        </div>
        
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
        {img: 'https://media.china-sss.com/pics/gallery/201809/732a679f-5893-4687-b290-bed973a321e0_201809271713.jpg'},
        {img: 'https://media.china-sss.com/pics/gallery/201810/5b428b3a-b472-48d9-989a-797741491e55_201810091640.jpg'},
        {img: 'https://media.china-sss.com/pics/gallery/201810/c62046bf-6cbf-4f23-a233-ca3373be40c7_201810091640.jpg'},
        {img: 'https://media.china-sss.com/img/M00/04/27/wKjFbFu8POWABsULAAVhRuVBI48915.png_500x350.jpg'},
      ],
      slideImg: [
        'http://www.airchina.com.cn/cn/images/newindex/2018/09/28/82B439B42904BA51F0803FDB50E7B6D5.jpg',
        'http://www.airchina.com.cn/cn/images/newindex/2018/09/28/964401D1A1B10040E2E69BD59A03D15D.jpg',
        'http://www.airchina.com.cn/cn/images/newindex/2018/10/10/0C0D45712B84CB91CF447BE6E01BD439.jpg'
      ]
    }
  },
  methods: {
    _initScroll () {
      this.popScroll = new BScroll(this.$refs.popWrapper, {
        click: true,
        probeType: 3
      })
    },
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
  .content
    height 14rem
    margin-top .01rem
    margin-bottom .5rem
    .slide_wrap
      height 6.9rem
      width 10rem
      .mint-swipe-indicators.is-active
        background mainColor
        opacity 1
      .mint-swipe-item 
        width 10rem
        img
          width 10rem
          height 100%
    .list-items
      font-size .5rem
      border-line()
      .items-title
        width 100%
        text-align center
        height 1.3rem
        line-height 1.3rem
        margin-left .1rem
        .head_bg
          width .826rem
          height 2.133rem
          position relative
          right .1rem
          img
           width 4%
      .items-img
        img 
          width 100%
    .item-list
      background #ffffff
      height 5rem
      margin-top .1rem
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
