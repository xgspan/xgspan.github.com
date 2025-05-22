---
index: false
icon: https://s21.ax1x.com/2025/05/23/pEz1h4g.png
category:
  - 游戏
---

# 游戏
<script setup>
import data from '@data/youxi.json';
const keys = Object.keys(data)
</script>

<!-- @include: @common/网盘提示.md -->

---

::: note 提示
由于小怪兽我也不怎么玩游戏， 不知道你们都喜欢什么游戏，就按照自己喜好添加了一些

如果没找自己需要的资源可以点击右上角↗️QQ，加入我们来和我说哦

欢迎你的加入
:::

> 游戏资源实在太多了，做了一个可以搜索的功能， 点击 **下方按钮**  搜索资源 **保存下载** 就可以了

<VPCard
title="搜索游戏"
desc="直接搜索 首字母/关键词"
logo="assets/tubiao/游戏/搜索.svg"
link="https://web.wps.cn/wo/sl/v33W3pH4?app_id=4fuv106ERmpl3tkUpdHksM"
background="rgba(253, 230, 138, 0.15)"
/>

---
这边也为大家提供了一个所有游戏的合集地址

[游戏合集【根据字母找自己玩的游戏】](https://pan.quark.cn/s/64f1dfa47259)


<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
