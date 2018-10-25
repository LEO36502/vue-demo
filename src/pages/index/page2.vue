<template lang="html">
  <div class="page">
    <div class="content" ref="popWrapper">
      <ul>
        <section class="list-items">
          <div class="metra-list-one">
            <span><img src="../../assets/dutyfree/free1.jpg" alt=""></span>
            <span><img src="../../assets/dutyfree/free2.jpg" alt=""></span>
            <span><img src="../../assets/dutyfree/free3.jpg" alt=""></span>
            <span><img src="../../assets/dutyfree/free4.jpg" alt=""></span>
          </div>
        </section>
        <section class="list-items">
          <h2 class="items-title">
            <span class="head_bg">
              <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
            </span>
            <span>全球热门目的地</span>
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
            <span>巴厘岛绝美风光</span>
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
        {img: 'http://b4-q.mafengwo.net/s6/M00/44/23/wKgB4lMrYVuAVVASAAG0l3hvgzE37.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90'},
        {img: 'http://n4-q.mafengwo.net/s11/M00/6E/A2/wKgBEFtxVQmAB80bAAHDsBZEO6M20.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90'},
        {img: 'http://b4-q.mafengwo.net/s11/M00/6E/A1/wKgBEFtxVQmAE9aCAAFGmn3MDg487.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90'},
        {img: 'http://p4-q.mafengwo.net/s12/M00/41/A1/wKgED1ut55eAXDmjABoqT7WpZwg555.png?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90'},
        {img: 'http://b4-q.mafengwo.net/s6/M00/47/D9/wKgB4lMrZM-ADasvAAKeeH4dBe420.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F90'},
      ],
      brands: [
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3949353105,582030392&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=392101590,571840763&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539599903753&di=5827f627f76ea1cc779a5bb0939a54d2&imgtype=0&src=http%3A%2F%2Fphoto.quanmeishi.com%2Fuploads%2Fimage%2F131022%2F2561284_1016655_3a59726de3_o.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539600253497&di=f43198ed5f5e0f1639a2ab4fe98702fa&imgtype=0&src=http%3A%2F%2Fimg3.a0bi.com%2Fupload%2Fttq%2F20140710%2F1404970564219_middle.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539600005807&di=35794008aca7ba09e55df973225027db&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F48%2F83%2F79a58PICDrq_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539600085271&di=2297586bc5cff5e0104b8b3dfb9028d0&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi4%2FT1GO0SXhXFXXcm8YTc_125904.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539600120027&di=596c043284af7e69786cdf81df02a5e3&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F45%2F21%2F01300000432684141741217897876_s.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539600157006&di=75975849d8f479fb7fa2413e9819073d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F83%2F66%2F55a58PICheG_1024.png'
      ],

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
        margin-top .1rem
        overflow hidden
        padding-bottom .5rem
        padding-left .2rem
        span
          width 45%
          height 2.1rem
          display inline-block
          float left
          padding 0rem 0.2rem
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
