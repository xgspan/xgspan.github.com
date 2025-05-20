---
index: false
icon: /assets/banner/动漫.jpg
category:
  - 二次元
---

<script setup>
import data from '@data/dongman.json';
const keys = Object.keys(data)
</script>

# 二次元


::: info 注意
网盘资源一定要记得先 **保存**

可获取最新更新，防止资源丢失
:::

<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
