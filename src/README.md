---
home: true
portfolio: true
title: 首页
icon: house
content: doc
welcome: 👋 你好，欢迎来到这里
name: 宝藏资源分享
avatar: assets/bg/homebg.png
titles:
  - 本站资源完全免费分享
  - 本站提供的所有资源均为网络整理而来
  - 仅供学习研究使用，不得用于任何商业用途 
  - 如有侵权，请联系，我们将尽快处理。
---
<script setup>
import data from '@data/home.json'
</script>

<VPBanner
    v-for="(val,key) in data.banner"
    :key="key"
    v-bind="val"
    :actions='val.link && [{ text: "访问", link:val.link }]' />

