---
index: false
icon: /assets/banner/游戏.jpg
category:
  - 游戏
---

# 游戏
<script setup>
import data from '@data/youxi.json';
const keys = Object.keys(data)
</script>


<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
