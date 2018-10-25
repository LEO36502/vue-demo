<template lang="html">
  <div class="page">
    <div class="content" ref="popWrapper">
      <ul>
        <section class="list-items">
          <div class="metra-list-one">
            <span><img src="http://b3-q.mafengwo.net/s7/M00/B6/7D/wKgB6lSrwS6ANNM-AAHJldK1O1s82.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90" alt=""></span>
            <span><img src="http://p4-q.mafengwo.net/s12/M00/EB/3E/wKgED1uaTUeAEr71AAJsLrEC2vo23.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90" alt=""></span>
          </div>
        </section>
        <section class="list-items">
          <h2 class="items-title">
            <span class="head_bg">
              <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
            </span>
            <span>国内热门旅游地
            </span>
          </h2>
          <ul class="metra-list-two">
            <li v-for="(item, index) in brands">
              <img :src="item" alt="">
            </li>
          </ul>
        </section>
        <section class="list-items">
          <h2 class="items-title">
            <span class="head_bg">
              <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
            </span>
            <span>北京风光</span>
          </h2>
          <ul class="metra-list-three">
            <li v-for="(item, index) in products">
              <img :src="item" alt="">
            </li>
          </ul>
        </section>
        <section class="list-items">
          <h2 class="items-title">
            <span class="head_bg">
              <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
            </span>
            <span>上海风光</span>
          </h2>
          <li class="item-list" v-for="(item, index) in pops" :keys="index">
            <div class="pop-image">
              <img alt="" v-lazy="item.img">
            </div>    
          </li>
        </section>
        
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
        {img: 'http://p3-q.mafengwo.net/s11/M00/54/C2/wKgBEFtRWgOAL6CtAAhBG3gnnaM20.jpeg?imageMogr2%2Fthumbnail%2F%21296x156r%2Fgravity%2FCenter%2Fcrop%2F%21296x156%2Fquality%2F100'},
        {img: 'http://b3-q.mafengwo.net/s10/M00/71/27/wKgBZ1nlfSaAUDRhAAcwkdSo3Hk98.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100'},
        {img: 'http://b3-q.mafengwo.net/s10/M00/B7/2B/wKgBZ1nltY-APLD2AAalfVFx-Is15.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100'},
        {img: 'http://p4-q.mafengwo.net/s10/M00/87/AB/wKgBZ1ofeheAWIP1AAiAIRcPZOo68.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100'},
        {img: 'http://p1-q.mafengwo.net/s11/M00/DA/48/wKgBEFqxlbSAGPiTACiF0RDJRzo67.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100'},
      ],
      brands: [
        'http://p4-q.mafengwo.net/s11/M00/D7/1F/wKgBEFsNEbSAI4SnAAbxfmz6GoM30.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'http://n3-q.mafengwo.net/s7/M00/EA/C4/wKgB6lSvPmaAMANQAAfLiiXRods442.png?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'http://n3-q.mafengwo.net/s10/M00/A5/AA/wKgBZ1oo8duAG9S_AASIKfK1UBc27.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'http://b3-q.mafengwo.net/s7/M00/F3/C7/wKgB6lSvSJ-AC2WlAAaojIciQVE907.png?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'http://n4-q.mafengwo.net/s8/M00/67/6B/wKgBpVW_LmGAAuFvAAhZIIszbdI76.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'https://b1-q.mafengwo.net/s6/M00/CD/3A/wKgB4lM7jsqATNaRAATlZu6KzSU34.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'http://b3-q.mafengwo.net/s8/M00/66/68/wKgBpVW6NIqAVFxeABF44rqCjKc06.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90',
        'http://n1-q.mafengwo.net/s11/M00/4E/94/wKgBEFpC-ryAaLZpAAELsUXcv2828.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90'
      ],
      products: [
        'http://b3-q.mafengwo.net/s9/M00/2F/9E/wKgBs1cWRpCACWlSAAdObOdTPvo56.jpeg?imageMogr2%2Fthumbnail%2F%21180x180r%2Fgravity%2FCenter%2Fcrop%2F%21180x180%2Fquality%2F90',
        'http://n4-q.mafengwo.net/s5/M00/A1/86/wKgB3FEL0bmAOpLQAAOeCG_bWyE98.jpeg?imageMogr2%2Fthumbnail%2F%21180x180r%2Fgravity%2FCenter%2Fcrop%2F%21180x180%2Fquality%2F90',
        'http://b4-q.mafengwo.net/s11/M00/36/39/wKgBEFrhb3WAakoZAAf3cRjwZCY02.jpeg?imageMogr2%2Fthumbnail%2F%21180x180r%2Fgravity%2FCenter%2Fcrop%2F%21180x180%2Fquality%2F90',
        'http://b4-q.mafengwo.net/s5/M00/B2/F0/wKgB3FDjqrmAZW91AAtxfFvcYKg52.jpeg?imageMogr2%2Fthumbnail%2F%21180x180r%2Fgravity%2FCenter%2Fcrop%2F%21180x180%2Fquality%2F90',
        'http://p2-q.mafengwo.net/s9/M00/59/B6/wKgBs1bVAcaAa1bKAACROd9Mmuw67.jpeg?imageMogr2%2Fthumbnail%2F%21180x180r%2Fgravity%2FCenter%2Fcrop%2F%21180x180%2Fquality%2F90',
        'http://n3-q.mafengwo.net/s6/M00/CE/EB/wKgB4lOIRoyAFLXbAAPF5rEdd_480.jpeg?imageMogr2%2Fthumbnail%2F%21180x180r%2Fgravity%2FCenter%2Fcrop%2F%21180x180%2Fquality%2F90',
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
  .content
    margin-top -0.1rem
    margin-bottom .5rem
    height 14rem
    .list-items
      font-size .5rem
      border-line()
      .metra-list-one
        display flex
        width 10rem
        margin-top .1rem
        span
          width 5rem
          display inline-block
          img
            width 100%
      .metra-list-two
        overflow hidden
        li
          float left
          width 2.5rem
          height 2.5rem
          img 
            width 100%
            height 75%
      .metra-list-three
        overflow hidden
        li
          float left
          width 5rem
          height 5rem
          img 
            width 100%
      .items-title
        width 100%
        text-align center
        height 1.3rem
        line-height 1.3rem
        margin-left .1rem
        font-size .48rem
        .head_bg
          width .826rem
          height 2.133rem
          position relative
          right .1rem
          img
           width 4%
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
