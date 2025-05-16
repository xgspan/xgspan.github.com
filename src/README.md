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
  - 点击右上角QQ，加入我们吧！
---
<script setup>
import data from '@data/home.json'
</script>

<VPBanner
    v-for="(val,key) in data.banner"
    :key="key"
    v-bind="val"
    :actions='val.link && [{ text: "访问", link:val.link }]' />

