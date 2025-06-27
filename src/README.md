---
name: 宝藏资源分享
home: true
icon:  /logo.png
title: 主页
heroImage: /logo.png
heroImageStyle:
  width: 120px
  margin-top: 50px
  border-radius: 50%
  border: "5px solid rgba(255, 255, 255, 0.3)"
  box-shadow: "0 0 12px rgba(0, 0, 0, 0.2)"
  backdrop-filter: "blur(10px)"
  background: "rgba(255, 255, 255, 0.1)"
bgImage: /assets/bg/bg.jpg

bgImageStyle:
  opacity: 0.4
heroFullScreen: false
heroText: '@小怪兽'
tagline: 本站所有资源完全免费分享
actions:
  - text: 加入我们
    icon: /assets/tubiao/qq.svg
    link: https://qm.qq.com/cgi-bin/qm/qr?k=8Ok6nljK3XWpVAqMtLe6KubG6d035Waw&jump_from=webapi&authKey=+iTAqDLuQmLtHR3j18OSSEdZecln12Hiu/JrmqOk1eDNh1Ixo6WffbJ+HS9dYYtf
    type: primary


---
<script setup>
import data from '@data/home.json'
</script>


<VPBanner
    v-for="val in data.banner"
    :key="val.name"
    :class="`banner banner-${val.name}`"
    v-bind="val"
    :actions='val.name && [{ text: "进入专区", link: val.link || `/${ val.name}/` }]' />


<!-- @include: ./common/xuzhi.md -->