---
content: doc
welcome: 👋 你好，欢迎来到这里
name: 宝藏资源分享
titles:
  - 点击右上角QQ，加入我们吧！
home: true
icon:  https://gitee.com/websongsong/tuku/raw/master/assets/tubiao/主页.svg
title: 主页
heroImage: logo.png
heroImageStyle:
  border-radius: 50%
  border: "5px solid rgba(255, 255, 255, 0.3)"
  box-shadow: "0 0 12px rgba(0, 0, 0, 0.2)"
  backdrop-filter: "blur(10px)"
  background: "rgba(255, 255, 255, 0.1)"
bgImage: https://s21.ax1x.com/2025/05/23/pEz1sgA.jpg
bgImageStyle:
  background-attachment: fixed
  filter: brightness(60%)
  opacity: 0.5
heroFullScreen: true
heroText: 小怪兽宝藏
tagline: 本站所有资源完全免费
actions:
  - text: 加入我们
    icon: /assets/tubiao/qq.svg
    link: https://qm.qq.com/cgi-bin/qm/qr?k=8Ok6nljK3XWpVAqMtLe6KubG6d035Waw&jump_from=webapi&authKey=+iTAqDLuQmLtHR3j18OSSEdZecln12Hiu/JrmqOk1eDNh1Ixo6WffbJ+HS9dYYtf
    type: primary



---
<script setup>
import data from '@data/home.json'
</script>

# 内容

<VPBanner
    v-for="val in data.banner"
    :key="val.name"
    :class="`banner-${val.name}`"
    v-bind="val"
    :actions='val.name && [{ text: "进入专区", link:`/${val.name}/` }]' />


